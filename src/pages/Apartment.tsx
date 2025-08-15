import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface ApartmentModel {
  id: string;
  title: string;
  body: string;
}

const Apartment: React.FC = () => {
  const [landlords, setLandlords] = useState<ApartmentModel[]>([]);

  useEffect(() => {
    // const token = localStorage.getItem("authToken");
    // if (!token) {
    //   toast.error("Unauthorized! Please log in.");
    //   return;
    // }

    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        headers: { 
          //Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
       },
      })
      .then((res) => setLandlords(res.data))
      .catch(() => toast.error("Failed to fetch landlords"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Landlords List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {landlords.map((landlord) => (
            <tr key={landlord.id}>
              <td className="border border-gray-300 p-2">{landlord.id}</td>
              <td className="border border-gray-300 p-2">{landlord.title}</td>
              <td className="border border-gray-300 p-2">{landlord.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Apartment;
