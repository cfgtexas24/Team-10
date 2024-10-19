"use client";
import { useState } from "react";
import { FiMenu, FiArrowLeft } from "react-icons/fi"; // Importing icons from react-icons

const patientData = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    emailAddress: "emily.johnson@example.com",
    dateOfBirth: "1990-05-14",
    age: 34,
    occupation: "Teacher",
    race: "White",
    ethnicity: "Non-Hispanic",
    insurance: "Yes",
  },
  {
    id: 2,
    firstName: "Sophia",
    lastName: "Brown",
    emailAddress: "sophia.brown@example.com",
    dateOfBirth: "1985-11-23",
    age: 38,
    occupation: "Nurse",
    race: "Black or African American",
    ethnicity: "Non-Hispanic",
    insurance: "No",
  },
  // ... other patient records
];

const serviceData = [
  {
    id: 1,
    dateAttended: "2024-01-15",
    serviceType: "Pregnancy Test",
    patientFirstName: "Emily",
    patientLastName: "Johnson",
    dateOfBirth: "1990-05-14",
    report: "report1.pdf",
  },
  {
    id: 2,
    dateAttended: "2024-01-20",
    serviceType: "Ultrasound",
    patientFirstName: "Sophia",
    patientLastName: "Brown",
    dateOfBirth: "1985-11-23",
    report: "report2.pdf",
  },
  {
    id: 3,
    dateAttended: "2024-01-25",
    serviceType: "Prenatal Care",
    patientFirstName: "Isabella",
    patientLastName: "Martinez",
    dateOfBirth: "1992-03-02",
    report: "report3.pdf",
  },
  // ... other service records
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    dateOfBirth: "",
    race: "",
    ethnicity: "",
    occupation: "Patient",
    insurance: "",
  });
  const [filters, setFilters] = useState({
    race: "",
    ethnicity: "",
    insurance: "",
    age: "",
  });

  // State for sidebar visibility and selected tab
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("By Patient");

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
      newUser.insurance
    ) {
      const newUserEntry = { id: patientData.length + 1, ...newUser };
      patientData.push(newUserEntry); // Adding new patient to mock data
      setNewUser({
        firstName: "",
        lastName: "",
        emailAddress: "",
        dateOfBirth: "",
        race: "",
        ethnicity: "",
        occupation: "Patient",
        insurance: "",
      }); // Reset form
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = patientData.filter((patient) => {
    const searchMatches = Object.values(patient).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filterMatches =
      (!filters.race || patient.race === filters.race) &&
      (!filters.ethnicity || patient.ethnicity === filters.ethnicity) &&
      (!filters.insurance || patient.insurance === filters.insurance) &&
      (!filters.age || patient.age.toString() === filters.age);

    return searchMatches && filterMatches;
  });

  const filteredServices = serviceData.filter((service) => {
    return Object.values(service).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPatientRecords = patientData.length;
  const totalServiceRecords = serviceData.length;
  const filteredPatientRecordsCount = filteredData.length;
  const filteredServiceRecordsCount = filteredServices.length;
  const patientPercentage = totalPatientRecords
    ? ((filteredPatientRecordsCount / totalPatientRecords) * 100).toFixed(2)
    : 0;
  const servicePercentage = totalServiceRecords
    ? ((filteredServiceRecordsCount / totalServiceRecords) * 100).toFixed(2)
    : 0;

  return (
    <div className="flex h-screen">
      {/* Collapsible Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-1/4" : "w-0"
        } transition-width duration-300 bg-gray-100 h-full overflow-hidden`}
      >
        {isSidebarOpen && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Select Tab</h2>
            <button
              onClick={() => setSelectedTab("By Patient")}
              className="block mb-4"
            >
              By Patient
            </button>
            <button
              onClick={() => setSelectedTab("By Service")}
              className="block"
            >
              By Service
            </button>

            {selectedTab === "By Patient" && (
              <>
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
                    <option value="Black or African American">
                      Black or African American
                    </option>
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
              </>
            )}
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

        {selectedTab === "By Patient" ? (
          <>
            <h1 className="text-3xl font-bold mb-4">Patient Records</h1>

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
                {filteredPatientRecordsCount} out of {totalPatientRecords}{" "}
                patient records: {patientPercentage}% of patients
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Service Records</h1>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search services"
              value={searchTerm}
              onChange={handleSearch}
              className="input mb-4 w-full"
            />

            {/* Service List */}
            <table className="table-auto w-full mb-8">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Date Attended</th>
                  <th className="px-4 py-2">Service Type</th>
                  <th className="px-4 py-2">Patient Name</th>
                  <th className="px-4 py-2">DOB</th>
                  <th className="px-4 py-2">Report</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id}>
                    <td className="border px-4 py-2">{service.id}</td>
                    <td className="border px-4 py-2">{service.dateAttended}</td>
                    <td className="border px-4 py-2">{service.serviceType}</td>
                    <td className="border px-4 py-2">{`${service.patientFirstName} ${service.patientLastName}`}</td>
                    <td className="border px-4 py-2">{service.dateOfBirth}</td>
                    <td className="border px-4 py-2">
                      <a
                        href={service.report}
                        download
                        className="text-blue-500"
                      >
                        Download Report
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Records Info */}
            <div className="mt-4">
              <p className="text-right">
                {filteredServiceRecordsCount} out of {totalServiceRecords}{" "}
                service records: {servicePercentage}% of services
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
