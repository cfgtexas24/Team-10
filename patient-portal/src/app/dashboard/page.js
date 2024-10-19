"use client";

import { useState } from 'react';
import { FiMenu, FiArrowLeft } from 'react-icons/fi'; // Importing icons from react-icons

const mockData = [
  {
    id: 1,
    firstName: 'Emily',
    lastName: 'Johnson',
    emailAddress: 'emily.johnson@example.com',
    dateOfBirth: '1990-05-14',
    age: 34,
    occupation: 'Teacher',
    race: 'White',
    ethnicity: 'Non-Hispanic',
    insurance: 'Yes',
  },
  {
    id: 2,
    firstName: 'Sophia',
    lastName: 'Brown',
    emailAddress: 'sophia.brown@example.com',
    dateOfBirth: '1985-11-23',
    age: 38,
    occupation: 'Nurse',
    race: 'Black or African American',
    ethnicity: 'Non-Hispanic',
    insurance: 'No',
  },
  {
    id: 3,
    firstName: 'Isabella',
    lastName: 'Martinez',
    emailAddress: 'isabella.martinez@example.com',
    dateOfBirth: '1992-03-02',
    age: 32,
    occupation: 'Software Engineer',
    race: 'Asian',
    ethnicity: 'Hispanic',
    insurance: 'Yes',
  },
  {
    id: 4,
    firstName: 'Mia',
    lastName: 'Garcia',
    emailAddress: 'mia.garcia@example.com',
    dateOfBirth: '1996-07-19',
    age: 28,
    occupation: 'Accountant',
    race: 'White',
    ethnicity: 'Hispanic',
    insurance: 'Yes',
  },
  {
    id: 5,
    firstName: 'Amelia',
    lastName: 'Davis',
    emailAddress: 'amelia.davis@example.com',
    dateOfBirth: '1991-12-10',
    age: 33,
    occupation: 'Marketing Specialist',
    race: 'Black or African American',
    ethnicity: 'Non-Hispanic',
    insurance: 'No',
  },
  {
    id: 6,
    firstName: 'Charlotte',
    lastName: 'Miller',
    emailAddress: 'charlotte.miller@example.com',
    dateOfBirth: '1987-04-25',
    age: 37,
    occupation: 'Architect',
    race: 'Asian',
    ethnicity: 'Non-Hispanic',
    insurance: 'Yes',
  },
  {
    id: 7,
    firstName: 'Harper',
    lastName: 'Rodriguez',
    emailAddress: 'harper.rodriguez@example.com',
    dateOfBirth: '1995-06-17',
    age: 29,
    occupation: 'Pharmacist',
    race: 'White',
    ethnicity: 'Hispanic',
    insurance: 'No',
  },
  {
    id: 8,
    firstName: 'Evelyn',
    lastName: 'Martinez',
    emailAddress: 'evelyn.martinez@example.com',
    dateOfBirth: '1988-09-03',
    age: 36,
    occupation: 'Graphic Designer',
    race: 'Native Hawaiian or Other Pacific Islander',
    ethnicity: 'Non-Hispanic',
    insurance: 'Yes',
  },
  {
    id: 9,
    firstName: 'Abigail',
    lastName: 'Lee',
    emailAddress: 'abigail.lee@example.com',
    dateOfBirth: '1993-01-15',
    age: 31,
    occupation: 'Social Worker',
    race: 'Asian',
    ethnicity: 'Non-Hispanic',
    insurance: 'No',
  },
  {
    id: 10,
    firstName: 'Avery',
    lastName: 'Perez',
    emailAddress: 'avery.perez@example.com',
    dateOfBirth: '1997-08-12',
    age: 27,
    occupation: 'Lawyer',
    race: 'White',
    ethnicity: 'Hispanic',
    insurance: 'Yes',
  }
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    race: '',
    ethnicity: '',
    occupation: 'Patient',
    insurance: '',
  });
  const [filters, setFilters] = useState({
    race: '',
    ethnicity: '',
    insurance: '',
    age: ''
  });

  // State for sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('By Patient');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.emailAddress &&
      newUser.dateOfBirth &&
      newUser.race &&
      newUser.ethnicity &&
      newUser.insurance // Ensure insurance is provided
    ) {
      const newUserEntry = { id: mockData.length + 1, ...newUser };
      mockData.push(newUserEntry); // Adding new patient to mock data
      setNewUser({
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: '',
        race: '',
        ethnicity: '',
        occupation: 'Patient', // Reset to 'Patient'
        insurance: '', // Reset insurance
      }); // Reset form
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = mockData.filter((patient) => {
    const searchMatches = Object.values(patient).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filterMatches =
      (!filters.race || patient.race === filters.race) &&
      (!filters.ethnicity || patient.ethnicity === filters.ethnicity) &&
      (!filters.insurance || patient.insurance === filters.insurance) &&
      (!filters.age || patient.age.toString() === filters.age); // Filter by age

    return searchMatches && filterMatches;
  });

  const totalRecords = mockData.length;
  const filteredRecordsCount = filteredData.length;
  const percentage = totalRecords ? ((filteredRecordsCount / totalRecords) * 100).toFixed(2) : 0;

  return (
    <div className="flex h-screen">
      {/* Collapsible Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'w-1/4' : 'w-0'
        } transition-width duration-300 bg-gray-100 h-full overflow-hidden`}
      >
        {isSidebarOpen && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Filter Patients</h2>
            <div className="space-y-4">

              <select
                name="race"
                value={filters.race}
                onChange={handleFilterChange}
                className="input w-full"
              >
                <option value="">Filter by Race</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Asian">Asian</option>
              </select>

              <select
                name="ethnicity"
                value={filters.ethnicity}
                onChange={handleFilterChange}
                className="input w-full"
              >
                <option value="">Filter by Ethnicity</option>
                <option value="Hispanic">Hispanic</option>
                <option value="Non-Hispanic">Non-Hispanic</option>
              </select>

              <select
                name="insurance"
                value={filters.insurance}
                onChange={handleFilterChange}
                className="input w-full"
              >
                <option value="">Filter by Insurance</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <input
                type="number"
                name="age"
                placeholder="Filter by Age"
                value={filters.age}
                onChange={handleFilterChange}
                className="input w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300`}>
        {/* Sidebar Toggle Icon */}
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-4 cursor-pointer text-2xl bg-gray-200 hover:bg-gray-300 p-2 rounded-full inline-block"
        >
          {isSidebarOpen ? <FiArrowLeft /> : <FiMenu />}
        </div>

        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by any attribute"
          value={searchTerm}
          onChange={handleSearch}
          className="input mb-4 w-full"
        />

        {/* Patient List */}
        <table className="table-auto w-full mb-8">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">DOB</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Occupation</th>
              <th className="px-4 py-2">Race</th>
              <th className="px-4 py-2">Ethnicity</th>
              <th className="px-4 py-2">Insurance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((patient) => (
              <tr key={patient.id}>
                <td className="border px-4 py-2">{patient.id}</td>
                <td className="border px-4 py-2">{patient.firstName}</td>
                <td className="border px-4 py-2">{patient.lastName}</td>
                <td className="border px-4 py-2">{patient.emailAddress}</td>
                <td className="border px-4 py-2">{patient.dateOfBirth}</td>
                <td className="border px-4 py-2">{patient.age}</td>
                <td className="border px-4 py-2">{patient.occupation}</td>
                <td className="border px-4 py-2">{patient.race}</td>
                <td className="border px-4 py-2">{patient.ethnicity}</td>
                <td className="border px-4 py-2">{patient.insurance}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Records Info */}
        <div className="mt-4">
          <p className="text-right">
            {filteredRecordsCount} out of {totalRecords} patient records: {percentage}% of patients
          </p>
        </div>

        {/* Add New Patient */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Patient</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={newUser.firstName}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={newUser.lastName}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              value={newUser.emailAddress}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={newUser.dateOfBirth}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="text"
              name="race"
              placeholder="Race"
              value={newUser.race}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="text"
              name="ethnicity"
              placeholder="Ethnicity"
              value={newUser.ethnicity}
              onChange={handleNewUserChange}
              className="input"
            />
            <input
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={newUser.occupation}
              onChange={handleNewUserChange}
              className="input"
            />
            <select
              name="insurance"
              value={newUser.insurance}
              onChange={handleNewUserChange}
              className="input"
            >
              <option value="">Select Insurance</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button
            onClick={handleAddUser}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
