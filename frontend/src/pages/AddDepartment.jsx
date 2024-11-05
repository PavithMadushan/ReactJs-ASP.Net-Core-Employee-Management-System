import { useState } from "react";
import axios from "axios";

function AddDepartment() {
  const [form, setForm] = useState({
    departmentCode: "",
    departmentName: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Send a POST request to register the department
      const response = await axios.post(
        "https://mern-recipe-app-backend-production.up.railway.app/api/department/register",
        {
          departmentCode: form.departmentCode,
          departmentName: form.departmentName,
          location: form.location,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Department registered successfully!");
        setForm({
          departmentCode: "",
          departmentName: "",
          location: "",
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Register Department</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Department Code *</label>
            <input
              type="text"
              name="departmentCode"
              value={form.departmentCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter department code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department Name *</label>
            <input
              type="text"
              name="departmentName"
              value={form.departmentName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter department name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location *</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter location"
            />
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          {success && <p className="text-sm text-green-500 mt-1">{success}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-rose-500 text-white rounded-md font-semibold hover:bg-rose-600 transition"
          >
            Register Department
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
