import React, { useEffect, useState } from 'react';
//firebase imports
import { db } from './firebase';
import { collection, getDocs, setDoc, doc, query, addDoc } from "firebase/firestore";

const RequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () =>{
      const temp = [];
      const querySnapshot = await getDocs(collection(db, "requests"));
      querySnapshot.forEach((doc) => {
        temp.push(doc.data())
      });
      console.log(temp)
      setRequests(temp)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {requests.map(request => (
        <div key={request.id} className="bg-white p-4 rounded-md shadow-md">
          <p className="font-bold text-lg mb-2">{request.Name}</p>
          <p>Email: {request.Email}</p>
          <p>Length (hrs): {request.Length_hrs}</p>
          <p>Pandit Request: {request.PanditReq}</p>
          <p>Phone: {request.Phone}</p>
          <p>Type: {request.Type}</p>
          <p>Days Available: {request.daysAvailable.join(', ')}</p>
          <p>Extra Notes: {request.extraNotes}</p>
        </div>
      ))}
    </div>
  );
};

export default RequestsList;
