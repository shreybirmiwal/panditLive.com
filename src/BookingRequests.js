// src/components/BookingForm.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingRequests = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
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
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block
          text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Enter your phone number"
          pattern="[0-9]*" // Only allow numeric input
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="timesAvailable" className="block text-sm font-medium text-gray-600">
          Times Available
        </label>
        <DatePicker
          id="timesAvailable"
          name="timesAvailable"
          selected={new Date()} // Set the initial date
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="prayerType" className="block text-sm font-medium text-gray-600">
          Type of Prayer
        </label>
        <select className="mt-1 p-2 border rounded-md w-full">
          <option value="homeWarming">Home Warming</option>
          <option value="car">Car</option>
          <option value="example1">Example1</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="prayerLength" className="block text-sm font-medium text-gray-600">
          Length of Prayer
        </label>
        <input
          type="number"
          id="prayerLength"
          name="prayerLength"
          className="mt-1 p-2 border rounded-md w-full"
          placeholder="Enter the length of prayer"
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
          {/* Add other options based on your needs */}
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
