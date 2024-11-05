// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddEmployee() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dateOfBirth: "",
//     age: "",
//     salary: "",
//     department: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));

//     if (name === "dateOfBirth") {
//       calculateAge(value);
//     }
//   };

//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const ageDiff = Date.now() - birthDate.getTime();
//     const ageDate = new Date(ageDiff);
//     const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
//     setForm((prevForm) => ({ ...prevForm, age: calculatedAge }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // Send a POST request to register the user
//       const response = await axios.post(
//         "https://mern-recipe-app-backend-production.up.railway.app/api/user/register",
//         {
//           firstName: form.firstName,
//           lastName: form.lastName,
//           email: form.email,
//           dateOfBirth: form.dateOfBirth,
//           age: form.age,
//           salary: form.salary,
//           department: form.department,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         navigate("/login");
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "An error occurred during registration."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">Register Employee</h1>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium">First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="First name"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Last Name *</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Last name"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="abc@gmail.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Date of Birth *</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={form.dateOfBirth}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Age</label>
//             <input
//               type="text"
//               name="age"
//               value={form.age}
//               readOnly
//               className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Salary *</label>
//             <input
//               type="number"
//               name="salary"
//               value={form.salary}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter salary"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Department *</label>
//             <select
//               name="department"
//               value={form.department}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select a department</option>
//               <option value="IT">IT</option>
//               <option value="HR">HR</option>
//               <option value="Finance">Finance</option>
//               <option value="Marketing">Marketing</option>
//             </select>
//           </div>
//           {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-rose-500 text-white rounded-md font-semibold hover:bg-rose-600 transition"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddEmployee;

// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// function AddEmployee() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Determine if the form is in edit mode based on passed state
//   const isEditMode = !!location.state;
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dateOfBirth: "",
//     age: "",
//     salary: "",
//     department: "",
//   });
//   const [error, setError] = useState("");

//   // Populate form if in edit mode
//   useEffect(() => {
//     if (isEditMode) {
//       const { firstName, lastName, email, dob, age, salary, dept } = location.state;
//       setForm({
//         firstName,
//         lastName,
//         email,
//         dateOfBirth: dob,
//         age,
//         salary,
//         department: dept,
//       });
//     }
//   }, [isEditMode]);

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));

//     // Calculate age when date of birth changes
//     if (name === "dateOfBirth") {
//       calculateAge(value);
//     }
//   };

//   // Calculate age based on date of birth
//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const ageDiff = Date.now() - birthDate.getTime();
//     const ageDate = new Date(ageDiff);
//     const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
//     setForm((prevForm) => ({ ...prevForm, age: calculatedAge }));
//   };

//   // Handle form submission for creating/updating an employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       if (isEditMode) {
//         // Update API call
//         await axios.put(
//           `https://mern-recipe-app-backend-production.up.railway.app/api/user/update/${location.state.eid}`,
//           form,
//           { headers: { "Content-Type": "application/json" } }
//         );
//       } else {
//         // Create API call
//         await axios.post(
//           "https://mern-recipe-app-backend-production.up.railway.app/api/user/register",
//           form,
//           { headers: { "Content-Type": "application/json" } }
//         );
//       }
//       navigate("/dashboard");
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "An error occurred during registration."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">{isEditMode ? "Update Employee" : "Register Employee"}</h1>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium">First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="First name"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium">Last Name *</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Last name"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="abc@gmail.com"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Date of Birth *</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={form.dateOfBirth}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Age</label>
//             <input
//               type="text"
//               name="age"
//               value={form.age}
//               readOnly
//               className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Salary *</label>
//             <input
//               type="number"
//               name="salary"
//               value={form.salary}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter salary"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Department *</label>
//             <select
//               name="department"
//               value={form.department}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option value="">Select a department</option>
//               <option value="IT">IT</option>
//               <option value="HR">HR</option>
//               <option value="Finance">Finance</option>
//               <option value="Marketing">Marketing</option>
//             </select>
//           </div>
//           {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//           <button
//             type="submit"
//             className="w-full py-2 bg-rose-500 text-white rounded-md font-semibold hover:bg-rose-600 transition"
//           >
//             {isEditMode ? "Update" : "Create Account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddEmployee;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function AddEmployee() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if the form is in edit mode based on passed state
  const isEditMode = !!location.state;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "", // Changed from dateOfBirth to dob
    age: "",
    salary: "",
    department: "",
  });
  const [error, setError] = useState("");

  // Populate form if in edit mode
  useEffect(() => {
    //console.log("hiiiiiiiiiii..",location.state.id)
    console.log("qqqii..", isEditMode);

    if (isEditMode) {
      const { firstName, lastName, email, dob, age, salary, dept } =
        location.state;
      setForm({
        firstName,
        lastName,
        email,
        dob, // Using dob directly
        age,
        salary,
        department: dept,
      });
    }
  }, [isEditMode]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Calculate age when date of birth changes
    if (name === "dob") {
      // Updated to match the backend key
      calculateAge(value);
    }
  };

  // Calculate age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setForm((prevForm) => ({ ...prevForm, age: calculatedAge }));
  };

  // Handle form submission for creating/updating an employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isEditMode) {
        // Update API call
        await axios.put(
          `http://localhost:5195/api/Employee/${location.state.id}`, // Update URL
          form,
          { headers: { "Content-Type": "application/json" } }
        );
      } else {
        // Create API call
        await axios.post(
          "http://localhost:5195/api/Employee", // Registration URL
          form,
          { headers: { "Content-Type": "application/json" } }
        );
      }
      navigate("/");
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
          <h1 className="text-3xl font-bold">
            {isEditMode ? "Update Employee" : "Register Employee"}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="First name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="abc@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Date of Birth *</label>
            <input
              type="date"
              name="dob" // Updated name attribute to match the backend
              value={form.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="text"
              name="age"
              value={form.age}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Salary *</label>
            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter salary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Department *</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-rose-500 text-white rounded-md font-semibold hover:bg-rose-600 transition"
          >
            {isEditMode ? "Update" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
