'use client';

import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: '',
    organization: '',
    phone: '',
    email: '',
    hometown: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-red-900 p-6 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h2 className="text-yellow-400 text-2xl font-bold text-center mb-4">
          Register Now
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name :"
            className="w-full p-2 rounded bg-gray-200 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation :"
            className="w-full p-2 rounded bg-gray-200 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            name="organization"
            placeholder="Institution/Company/Organization Name :"
            className="w-full p-2 rounded bg-gray-200 focus:outline-none"
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Mob. No. (WhatsApp) :"
              className="w-full p-2 rounded bg-gray-200 focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail:"
              className="w-full p-2 rounded bg-gray-200 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="hometown"
            placeholder="Hometown :"
            className="w-full p-2 rounded bg-gray-200 focus:outline-none"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-red-900 font-bold py-2 rounded hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
