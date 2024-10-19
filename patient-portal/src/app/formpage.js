

import Profile from '../components/dashboard/Profile';
import Story from '../components/dashboard/Story';
import FAQ from '../components/dashboard/FAQ';
import Resources from '../components/dashboard/Resources';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import './form.css';

const UpdatedFormPage = () => {
    const midwifeNames = ["Midwife A", "Midwife B", "Midwife C", "Midwife D"];
    const locations = ["Irving", "Richardson", "Dallas", "Plano"];

    const [midwife, setMidwife] = useState("");
    const [location, setLocation] = useState("");
    const [relationship, setRelationship] = useState("");
    const [visitationDate, setVisitationDate] = useState("");
    const [satisfaction, setSatisfaction] = useState({
        doctorKnowledge: "",
        doctorKindness: "",
        nursePatience: "",
        nurseKnowledge: "",
        waitingTime: "",
        hygiene: "",
    });
    const [improvement, setImprovement] = useState("");

    const handleSatisfactionChange = (aspect, value) => {
        const scoreMapping = {
            "Very satisfied": 5,
            "Satisfied": 4,
            "Neutral": 3,
            "Unsatisfied": 2,
            "Very unsatisfied": 1,
        };
        setSatisfaction(prev => ({ ...prev, [aspect]: scoreMapping[value] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ midwife, location, relationship, visitationDate, satisfaction, improvement });
        // Add your form submission logic here, such as sending the data to a database
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white">
            <h1 className="text-2xl font-bold mb-4 text-black">Patient Feedback Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="midwife" className="block text-sm font-medium text-black">Midwife</label>
                        <select
                            id="midwife"
                            value={midwife}
                            onChange={(e) => setMidwife(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        >
                            <option value="">Select Midwife</option>
                            {midwifeNames.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-black">Location</label>
                        <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        >
                            <option value="">Select Location</option>
                            {locations.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-black">Patient-Midwife Relationship</label>
                    <select
                        id="relationship"
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="">Please Select</option>
                        <option value="Pregnancy care">Pregnancy care</option>
                        <option value="Labor and birth">Labor and birth</option>
                        <option value="Postpartum care">Postpartum care</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="visitationDate" className="block text-sm font-medium text-black">Visitation Date</label>
                    <input
                        type="date"
                        id="visitationDate"
                        value={visitationDate}
                        onChange={(e) => setVisitationDate(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2 text-black">Overall satisfaction</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-black">
                                <th className="px-4 py-2 text-left"></th>
                                <th className="px-4 py-2 text-center">Very satisfied</th>
                                <th className="px-4 py-2 text-center">Satisfied</th>
                                <th className="px-4 py-2 text-center">Neutral</th>
                                <th className="px-4 py-2 text-center">Unsatisfied</th>
                                <th className="px-4 py-2 text-center">Very unsatisfied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(satisfaction).map(([key, value]) => (
                                <tr key={key} className="border-b">
                                    <td className="px-4 py-2 text-black">
                                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </td>
                                    {['Very satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very unsatisfied'].map((option) => (
                                        <td key={option} className="px-4 py-2 text-center">
                                            <input
                                                type="radio"
                                                name={key}
                                                value={option}
                                                checked={value === option}
                                                onChange={() => handleSatisfactionChange(key, option)}
                                                className="form-radio h-4 w-4 text-blue-600"
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <label htmlFor="improvement" className="block text-sm font-medium text-black">How can we improve our service?</label>
                    <textarea
                        id="improvement"
                        value={improvement}
                        onChange={(e) => setImprovement(e.target.value)}
                        rows={4}
                        className="mt-1 block w-full rounded-md text-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatedFormPage;
