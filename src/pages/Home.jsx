import { useState } from "react";

const dummyMedicines = [
    {
        id: 1,
        name: "Paracetamol",
        description: "Used for fever and mild pain.",
        price: 20,
        expiryDate: "2025-12-31",
    },
    {
        id: 2,
        name: "Ibuprofen",
        description: "Anti-inflammatory painkiller.",
        price: 35,
        expiryDate: "2024-10-10",
    },
    {
        id: 3,
        name: "Amoxicillin",
        description: "Antibiotic for infections.",
        price: 50,
        expiryDate: "2025-06-15",
    },
    {
        id: 4,
        name: "Cetirizine",
        description: "Used for allergy relief.",
        price: 15,
        expiryDate: "2026-01-01",
    },
];

const Home = () => {
    const [search, setSearch] = useState("");

    const filteredMedicines = dummyMedicines.filter((med) =>
        med.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Medicine's</h1>

                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full mb-6 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />

                <div className="grid gap-4">
                    {filteredMedicines.length === 0 ? (
                        <p className="text-gray-600">No medicines found.</p>
                    ) : (
                        filteredMedicines.map((med) => (
                            <div
                                key={med.id}
                                className="bg-white p-4 rounded-lg shadow border hover:shadow-md transition"
                            >
                                <h2 className="text-lg font-medium text-gray-800">{med.name}</h2>
                                <p className="text-sm text-gray-600">{med.description}</p>
                                <div className="mt-2 text-sm text-gray-700">
                                    <span className="mr-4">₹{med.price}</span>
                                    <span>Expires on: {med.expiryDate}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
