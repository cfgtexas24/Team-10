import { useState } from 'react';

const AppointmentForm = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${appointmentDate} at ${appointmentTime} for ${appointmentReason}`);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#A26B61] to-[#6C5846]">
      <div className="p-10 bg-white shadow-md rounded-lg max-w-3xl w-full mx-auto transition transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
        <h2 className="text-3xl font-semibold mb-8 text-center">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Date</label>
            <input
              type="date"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6C5846] focus:border-[#6C5846] sm:text-lg"
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
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6C5846] focus:border-[#6C5846] sm:text-lg"
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
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6C5846] focus:border-[#6C5846] sm:text-lg"
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
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#A26B61] hover:bg-[#e8a397] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C5846]"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
