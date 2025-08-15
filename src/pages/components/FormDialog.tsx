import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface FormDialogProps {
  open: boolean;
  title: string;
  initialValues?: Record<string, any>;
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
}

export default function FormDialog({
  open,
  title,
  initialValues = {},
  onClose,
  onSubmit,
}: FormDialogProps) {
  const [formData, setFormData] = useState({
    name: initialValues.name || "",
    phone: initialValues.phone || "",
    location: initialValues.location || "",
    profileImage: initialValues.profileImage || "",
    dob: initialValues.dob || "",
    kyc1: initialValues.kyc1 || "",
    kyc2: initialValues.kyc2 || "",
    kyc3: initialValues.kyc3 || "",
    kyc4: initialValues.kyc4 || "",
    kyc5: initialValues.kyc5 || "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as any;
    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-2 border rounded"
          />
          {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="w-16 h-16 rounded-full object-cover"
            />
          )}

          {/* Extra KYC Fields */}
          <input
            name="kyc1"
            value={formData.kyc1}
            onChange={handleChange}
            placeholder="KYC Field 1"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="kyc2"
            value={formData.kyc2}
            onChange={handleChange}
            placeholder="KYC Field 2"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="kyc3"
            value={formData.kyc3}
            onChange={handleChange}
            placeholder="KYC Field 3"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="kyc4"
            value={formData.kyc4}
            onChange={handleChange}
            placeholder="KYC Field 4"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="kyc5"
            value={formData.kyc5}
            onChange={handleChange}
            placeholder="KYC Field 5"
            required
            className="w-full p-2 border rounded"
          />

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
