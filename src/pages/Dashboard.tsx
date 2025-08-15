import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/DkTable";
import FormDialog from "./components/FormDialog";

interface Landlord {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default function Dashboard() {
  const [landlords, setLandlords] = useState<Landlord[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => setLandlords(res.data))
      .finally(() => setLoading(false));
  }, []);


   const handleAdd = () => {
    setEditingItem(null);
    setOpenDialog(true);
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setOpenDialog(true);
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values);
    // call API here
  };

  return (
    <>
      {/* Top Sticky Bar */}
      <div className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <div>
            <h1 className="font-bold text-lg">Landlord Management System</h1>
            <p className="text-sm text-gray-500">Manage landlords with ease</p>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Contact Us
          </button>
        </div>
      </div>
     <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 border rounded shadow">
          <h2 className="font-semibold">Total Landlords</h2>
          <p className="text-2xl font-bold">{landlords.length}</p>
        </div>
        <div className="p-4 bg-green-50 border rounded shadow">
          <h2 className="font-semibold">Active Listings</h2>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="p-4 bg-yellow-50 border rounded shadow">
          <h2 className="font-semibold">Pending Approvals</h2>
          <p className="text-2xl font-bold">4</p>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
          Add Landlord
        </button>
      </div>

      {/* Table */}
      <Table<Landlord>
        columns={[
          {
            key: "thumbnailUrl",
            label: "Image",
            render: (item) => (
              <img
                src={item.thumbnailUrl}
                alt="Thumb"
                className="w-12 h-12 rounded"
              />
            ),
          },
          { key: "id", label: "ID" },
          { key: "title", label: "Title" },
          {
            key: "url",
            label: "Link",
            render: (item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View
              </a>
            ),
          },
        ]}
        data={landlords}
        loading={loading}
        onView={(item) => alert(`Viewing ${item.title}`)}
        onEdit={(item) => alert(`Editing ${item.title}`)}
        onDelete={(item) => alert(`Deleting ${item.title}`)}
      />
    </div>

    <FormDialog
        open={openDialog}
        title={editingItem ? "Edit Landlord" : "Add Landlord"}
        initialValues={editingItem || {}}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
