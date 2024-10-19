import { useState } from 'react';

const AppointmentForm = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      appointmentDate,
      appointmentTime,
      appointmentReason,
    };

    console.log('Appointment Data:', appointmentData);

    try {
      const response = await fetch('http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      await response.json();

      if (response.ok) {
        alert('Appointment successfully booked');
        // Optionally clear the form
        setAppointmentDate('');
        setAppointmentTime('');
        setAppointmentReason('');
      } else {
        alert('Failed to book appointment');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the appointment');
    }
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-lg mx-auto transition transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
      <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Date</label>
          <input
            type="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Time</label>
          <input
            type="time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>

        {/* Reason for Appointment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Reason for Appointment</label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter the reason for your appointment"
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
