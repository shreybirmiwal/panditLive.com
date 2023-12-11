import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

const BookingRequests = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timesAvailable: new Date(),
    prayerType: 'homeWarming',
    prayerLength: '',
    requestPandit: 'noPreference',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Booking Requests</h1>

      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone Number (No dashes)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your phone number"
            pattern="[0-9]*" // Only allow numeric input
            required
          />
        </div>



        <div className="mb-4">
  <label htmlFor="timesAvailable" className="block text-sm font-medium text-gray-600">
    Days Available
  </label>
  <span className="absolute top-2 left-3 text-gray-400">
      {selectedDays.length === 0 ? 'Select dates' : ''}
    </span>
  <div className="mt-1 p-2 border rounded-md w-full relative">
  <DatePicker
  multiple
  plugins={[
   <DatePanel />
  ]}
  value={selectedDays} 
  onChange={setSelectedDays}
/>
  </div>
</div>



<div className="mb-4">
  <label htmlFor="prayerType" className="block text-sm font-medium text-gray-600">
    Type of Prayer
  </label>
  <select
    id="prayerType"
    name="prayerType"
    value={formData.prayerType}
    onChange={handleChange}
    className="mt-1 p-2 border rounded-md w-full"
  >
    <option value="">Pooja1</option>
    <option value="">Pooja2</option>
    <option value="">Pooja3</option>
    <option value="custom">Custom</option>
  </select>
</div>

{formData.prayerType === 'custom' && (
  <div className="mb-4">
    <label htmlFor="customPrayerType" className="block text-sm font-medium text-gray-600">
      Custom Type of Prayer
    </label>
    <input
      type="text"
      id="customPrayerType"
      name="customPrayerType"
      value={formData.customPrayerType}
      onChange={handleChange}
      className="mt-1 p-2 border rounded-md w-full"
      placeholder="Enter custom type of prayer"
    />
  </div>
)}
      
        <div className="mb-4">
          <label htmlFor="prayerLength" className="block text-sm font-medium text-gray-600">
            Length of Prayer (Hours)
          </label>
          <input
            type="number"
            id="prayerLength"
            name="prayerLength"
            value={formData.prayerLength}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter the length of prayer"
            step="0.5"
          />
        </div>


        <div className="mb-4">
        <label htmlFor="requestPandit" className="block text-sm font-medium text-gray-600">
          Request a Pandit
        </label>
        <select
          id="requestPandit"
          name="requestPandit"
          className="mt-1 p-2 border rounded-md w-full"
        >
          <option value="noPreference">No Preference</option>
          <option value="Pandit 1">Pandit 1</option>
          <option value="Pandit 2">Pandit 2</option>
          <option value="Pandit 3">Pandit 3</option>
        </select>
      </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingRequests;
