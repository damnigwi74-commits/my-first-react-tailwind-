// src/components/LandlordFormDialog.tsx
import React from "react";
import { useForm } from "react-hook-form";

export interface LandlordFormData {
  name: string;
  phone: string;
  location: string;
  dob: string;
  profileImage: string;
  nationalId: string;
  kraPin: string;
  passportNumber: string;
  address: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: LandlordFormData) => void;
  initialData?: LandlordFormData;
}

const LandlordFormDialog: React.FC<Props> = ({ open, onClose, onSubmit, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LandlordFormData>({
    defaultValues: initialData || {}
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? "Edit Landlord" : "Add Landlord"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Phone</label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Location</label>
            <input
              {...register("location", { required: "Location is required" })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "DOB is required" })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Profile Image URL</label>
            <input
              {...register("profileImage", { required: "Profile image is required" })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.profileImage && <p className="text-red-500 text-sm">{errors.profileImage.message}</p>}
          </div>

          <div>
            <label className="block font-medium">National ID</label>
            <input {...register("nationalId")} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium">KRA PIN</label>
            <input {...register("kraPin")} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium">Passport Number</label>
            <input {...register("passportNumber")} className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium">Address</label>
            <input {...register("address")} className="w-full border rounded px-3 py-2" />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandlordFormDialog;
