import React, { useState } from 'react';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//firebase imports
import { db } from './firebase';
import { collection, getDocs, setDoc, doc, query, addDoc } from "firebase/firestore";

const BookingRequests = ({allPandits, setAllPandits}) => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    timesAvailable: null,
    prayerType: 'Pooja1',
    prayerLength: null,
    requestPandit: 'noPreference',
    extraNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(formData)

    if(formData.name === null || formData.email === null || formData.phone === null || formData.timesAvailable === null ||formData.timesAvailable.length === 0 || formData.prayerType === null || formData.prayerLength === null || formData.requestPandit == null){
      toast.error('Please fill out all forms', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    } else {

      var prayerTYPE = formData.prayerType;

      if(formData.prayerType === "custom"){
        prayerTYPE = formData.customPrayerType
      }

      const docRef = await addDoc(collection(db, 'requests'), {
        Email: formData.email,
        Length_hrs: Number(formData.prayerLength),
        Name: formData.name,
        PanditReq: formData.requestPandit,
        Phone: formData.phone,
        Type: prayerTYPE,
        daysAvailable: formData.timesAvailable,
        extraNotes: formData.extraNotes
      });

      toast.success('Success!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

      //console.log(formData.name)
      //console.log(formData.email)
      //console.log(formData.phone)
      //console.log(formData.timesAvailable)
      //console.log(formData.prayerType)
      //console.log(formData.prayerLength)
      //console.log(formData.requestPandit)

    }

  };

  const handleSelectedDaysChange = (newSelectedDays) => {
    setSelectedDays(newSelectedDays);
  
    const isoFormattedDates = newSelectedDays.map(date => new Date(date.year, date.monthIndex, date.day).toISOString());
  
    setFormData({
      ...formData,
      timesAvailable: isoFormattedDates,
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 mt-8 max-w-md mx-auto ">Booking Requests</h1>

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

  <div className="mt-1 p-2 border rounded-md w-full relative">
  <DatePicker
  multiple
  plugins={[
   <DatePanel />
  ]}
  value={selectedDays} 
  onChange={handleSelectedDaysChange}
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
    <option value="Pooja1">Pooja1</option>
    <option value="Pooja2">Pooja2</option>
    <option value="Pooja3">Pooja3</option>
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
        value={formData.requestPandit}
        onChange={handleChange}
      >
        {allPandits.map((pandit, index) => (
          <option key={index} value={pandit}>
            {pandit}
          </option>
        ))}
      </select>
      </div>

      

      <div className="mb-4">
          <label htmlFor="extraNotes" className="block text-sm font-medium text-gray-600">
            Extra Notes
          </label>
          <input
            type="text"
            id="extraNotes"
            name="extraNotes"
            value={formData.extraNotes}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Extra Notes:"
          />
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
      <ToastContainer/>

    </div>
  );
};

export default BookingRequests;
