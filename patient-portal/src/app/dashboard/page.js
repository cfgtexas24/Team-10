"use client";
import { useState } from "react";
import { FiMenu, FiArrowLeft } from "react-icons/fi"; // Importing icons from react-icons
import { Card } from "@/components/ui/Card";

const patientData = [
  { id: 1, firstName: 'Emily', lastName: 'Johnson', emailAddress: 'emily.johnson@example.com', dateOfBirth: '1990-05-14', age: 34, occupation: 'Teacher', race: 'White', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 2, firstName: 'Sophia', lastName: 'Brown', emailAddress: 'sophia.brown@example.com', dateOfBirth: '1985-11-23', age: 38, occupation: 'Nurse', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 3, firstName: 'Isabella', lastName: 'Martinez', emailAddress: 'isabella.martinez@example.com', dateOfBirth: '1992-03-02', age: 32, occupation: 'Software Engineer', race: 'Asian', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 4, firstName: 'Mia', lastName: 'Garcia', emailAddress: 'mia.garcia@example.com', dateOfBirth: '1996-07-19', age: 28, occupation: 'Accountant', race: 'White', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 5, firstName: 'Amelia', lastName: 'Davis', emailAddress: 'amelia.davis@example.com', dateOfBirth: '1991-12-10', age: 33, occupation: 'Marketing Specialist', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 6, firstName: 'Charlotte', lastName: 'Miller', emailAddress: 'charlotte.miller@example.com', dateOfBirth: '1987-04-25', age: 37, occupation: 'Architect', race: 'Asian', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 7, firstName: 'Harper', lastName: 'Rodriguez', emailAddress: 'harper.rodriguez@example.com', dateOfBirth: '1995-06-17', age: 29, occupation: 'Pharmacist', race: 'White', ethnicity: 'Hispanic', insurance: 'No' },
  { id: 8, firstName: 'Evelyn', lastName: 'Martinez', emailAddress: 'evelyn.martinez@example.com', dateOfBirth: '1988-09-03', age: 36, occupation: 'Graphic Designer', race: 'Native Hawaiian or Other Pacific Islander', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 9, firstName: 'Abigail', lastName: 'Lee', emailAddress: 'abigail.lee@example.com', dateOfBirth: '1993-01-15', age: 31, occupation: 'Social Worker', race: 'Asian', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 10, firstName: 'Avery', lastName: 'Perez', emailAddress: 'avery.perez@example.com', dateOfBirth: '1997-08-12', age: 27, occupation: 'Lawyer', race: 'White', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 11, firstName: 'Sofia', lastName: 'Lopez', emailAddress: 'sofia.lopez@example.com', dateOfBirth: '1989-02-09', age: 35, occupation: 'Data Scientist', race: 'Hispanic', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 12, firstName: 'Liam', lastName: 'Martinez', emailAddress: 'liam.martinez@example.com', dateOfBirth: '1994-07-22', age: 30, occupation: 'Civil Engineer', race: 'White', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 13, firstName: 'Lucas', lastName: 'Hernandez', emailAddress: 'lucas.hernandez@example.com', dateOfBirth: '1986-03-14', age: 38, occupation: 'Physician', race: 'Asian', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 14, firstName: 'Mason', lastName: 'Anderson', emailAddress: 'mason.anderson@example.com', dateOfBirth: '1990-12-05', age: 33, occupation: 'Web Developer', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 15, firstName: 'Ava', lastName: 'Thomas', emailAddress: 'ava.thomas@example.com', dateOfBirth: '1995-11-19', age: 28, occupation: 'Biologist', race: 'White', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 16, firstName: 'Ella', lastName: 'Wilson', emailAddress: 'ella.wilson@example.com', dateOfBirth: '1992-08-23', age: 31, occupation: 'Veterinarian', race: 'Asian', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 17, firstName: 'Scarlett', lastName: 'Moore', emailAddress: 'scarlett.moore@example.com', dateOfBirth: '1988-10-14', age: 35, occupation: 'Physical Therapist', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 18, firstName: 'Grace', lastName: 'Taylor', emailAddress: 'grace.taylor@example.com', dateOfBirth: '1996-04-20', age: 28, occupation: 'Chef', race: 'Native Hawaiian or Other Pacific Islander', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 19, firstName: 'Chloe', lastName: 'Anderson', emailAddress: 'chloe.anderson@example.com', dateOfBirth: '1993-09-30', age: 30, occupation: 'Graphic Artist', race: 'White', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 20, firstName: 'Ethan', lastName: 'Davis', emailAddress: 'ethan.davis@example.com', dateOfBirth: '1984-05-11', age: 40, occupation: 'Financial Analyst', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 21, firstName: 'Henry', lastName: 'Gonzalez', emailAddress: 'henry.gonzalez@example.com', dateOfBirth: '1991-07-03', age: 33, occupation: 'Operations Manager', race: 'Asian', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 22, firstName: 'Oliver', lastName: 'Parker', emailAddress: 'oliver.parker@example.com', dateOfBirth: '1995-01-27', age: 29, occupation: 'Project Manager', race: 'White', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 23, firstName: 'Jack', lastName: 'Johnson', emailAddress: 'jack.johnson@example.com', dateOfBirth: '1992-02-18', age: 32, occupation: 'Network Engineer', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 24, firstName: 'Luna', lastName: 'Garcia', emailAddress: 'luna.garcia@example.com', dateOfBirth: '1994-08-21', age: 29, occupation: 'UX Designer', race: 'Native Hawaiian or Other Pacific Islander', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 25, firstName: 'Aiden', lastName: 'Lopez', emailAddress: 'aiden.lopez@example.com', dateOfBirth: '1989-06-12', age: 35, occupation: 'Insurance Agent', race: 'White', ethnicity: 'Hispanic', insurance: 'No' },
  { id: 26, firstName: 'James', lastName: 'Martinez', emailAddress: 'james.martinez@example.com', dateOfBirth: '1983-10-30', age: 40, occupation: 'Teacher', race: 'Asian', ethnicity: 'Non-Hispanic', insurance: 'Yes' },
  { id: 27, firstName: 'Mila', lastName: 'Brown', emailAddress: 'mila.brown@example.com', dateOfBirth: '1992-01-16', age: 32, occupation: 'Research Scientist', race: 'Black or African American', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 28, firstName: 'Ella', lastName: 'Wilson', emailAddress: 'ella.wilson@example.com', dateOfBirth: '1996-05-15', age: 28, occupation: 'Quality Assurance Tester', race: 'White', ethnicity: 'Non-Hispanic', insurance: 'No' },
  { id: 29, firstName: 'Zoe', lastName: 'Thompson', emailAddress: 'zoe.thompson@example.com', dateOfBirth: '1984-04-21', age: 40, occupation: 'Software Engineer', race: 'Asian', ethnicity: 'Hispanic', insurance: 'Yes' },
  { id: 30, firstName: 'Liam', lastName: 'Williams', emailAddress: 'liam.williams@example.com', dateOfBirth: '1989-02-14', age: 35, occupation: 'Business Analyst', race: 'Black or African American', ethnicity: 'Non-Hispanic', insurance: 'No' },
];

const serviceData = [
  { id: 1, dateAttended: '2024-01-15', serviceType: 'Pregnancy Test', patientName: 'Emily Johnson', patientDOB: '1990-05-14', report: '/assets/report1.txt' },
  { id: 2, dateAttended: '2024-01-20', serviceType: 'Ultrasound', patientName: 'Sophia Brown', patientDOB: '1985-11-23', report: '/assets/report1.txt' },
  { id: 3, dateAttended: '2024-01-25', serviceType: 'Prenatal Care', patientName: 'Isabella Martinez', patientDOB: '1992-03-02', report: '/assets/report1.txt' },
  { id: 4, dateAttended: '2024-02-01', serviceType: 'Postpartum Care', patientName: 'Mia Garcia', patientDOB: '1996-07-19', report: '/assets/report1.txt' },
  { id: 5, dateAttended: '2024-02-05', serviceType: 'Group Prenatal Care', patientName: 'Amelia Davis', patientDOB: '1991-12-10', report: '/assets/report1.txt' },
  { id: 6, dateAttended: '2024-02-10', serviceType: 'Prenatal Education', patientName: 'Olivia Clark', patientDOB: '1988-04-25', report: '/assets/report1.txt' },
  { id: 7, dateAttended: '2024-02-15', serviceType: 'Labor and Delivery', patientName: 'Ava Rodriguez', patientDOB: '1993-08-12', report: '/assets/report1.txt' },
  { id: 8, dateAttended: '2024-02-20', serviceType: 'Routine Checkup', patientName: 'Charlotte Lopez', patientDOB: '1986-09-30', report: '/assets/report1.txt' },
  { id: 9, dateAttended: '2024-02-25', serviceType: 'Vaccination', patientName: 'Harper Hill', patientDOB: '1995-11-18', report: '/assets/report1.txt' },
  { id: 10, dateAttended: '2024-03-01', serviceType: 'Postnatal Follow-up', patientName: 'Evelyn Green', patientDOB: '1994-06-05', report: '/assets/report1.txt' },
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("By Patient");
  const [feedbacks, setFeedbacks] = useState([]); // State to store feedbacks
  const [showFeedback, setShowFeedback] = useState(false); // State to toggle feedback display

  const fetchFeedback = async () => {
    const response = await fetch("http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Feedback/GetAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    setFeedbacks(data); // Set the feedback data
  };

  const handleFeedbackClick = async () => {
    await fetchFeedback(); // Fetch feedback data when button is clicked
    setShowFeedback(true); // Show feedback when the button is clicked
  };

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


    const [newService, setNewService] = useState({
      serviceType: '',
      patientFirstName: '',
      patientLastName: '',
      dateOfBirth: '',
      dateAttended: '',
      report: ''
    });
    
    const handleNewServiceChange = (e) => {
      const { name, value } = e.target;
      setNewService((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    
    const handleAddService = () => {
      console.log(newService);
    };

    
    return (
      <div className="flex h-screen">
        {/* Collapsible Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-1/4" : "w-0"
          } transition-width duration-300 bg-gray-100 h-full overflow-hidden`}
        >
          {isSidebarOpen && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Tabs</h2>
              <button
                onClick={() => setSelectedTab("By Patient")}
                className="block mb-4"
              >
                By Patient
              </button>
              {selectedTab === "By Patient" && (
                <>
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
              <button
                onClick={() => setSelectedTab("By Service")}
                className="block"
              >
                <div className="space-y-4">By Service</div>
              </button>
  
              {/* User Feedback Button */}
              <button
                onClick={() => {
                  fetchFeedback();
                  setShowFeedback(true);
                  setSelectedTab("User Feedback");
                }}
                className="block mb-4"
              >
                User Feedback
              </button>
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
                    className="input w-full"
                  >
                    <option value="">Has Insurance?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <button
                  onClick={handleAddUser}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Add User
                </button>
              </div>
            </>
          ) : selectedTab === "By Service" ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Service Records</h1>
              <input
                type="text"
                placeholder="Search by any attribute"
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
                    <th className="px-4 py-2">Patient DOB</th>
                    <th className="px-4 py-2">Report</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((service) => (
                    <tr key={service.id}>
                      <td className="border px-4 py-2">{service.id}</td>
                      <td className="border px-4 py-2">{service.dateAttended}</td>
                      <td className="border px-4 py-2">{service.serviceType}</td>
                      <td className="border px-4 py-2">{service.patientName}</td>
                      <td className="border px-4 py-2">{service.patientDOB}</td>
                      <td className="border px-4 py-2"><a target='blank' href={service.report}>Report</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : selectedTab === "User Feedback" && showFeedback ? (
            <>
              <h1 className="text-3xl font-bold mb-4">User Feedback</h1>
              {/* Render User Feedback */}
              <div className="mb-8">
              {showFeedback && (
              <div>
                {feedbacks.length > 0 ? (
                  feedbacks.map((feedback) => (
                    <div
                      key={feedback.id}
                      className="bg-white shadow-md rounded-lg p-4 mb-4"
                    >
                      <p className="text-lg text-gray-700">{feedback.content}</p>
                      <p className="text-sm text-gray-500">Rating: {feedback.rating}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No feedback available</p>
                )}
              </div>
            )}
              </div>
            </>
          ) : (
            <p>No feedback available</p>
          )}
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;