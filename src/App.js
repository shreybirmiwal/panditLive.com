import RequestsList from "./RequestsList";
import BookingRequests from "./BookingRequests"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import { useState } from "react";

function App() {

  const [allPandits, setAllPandits] = useState(["Pandit 1", "Pandit 2", "Pandit 3"]);

  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<BookingRequests allPandits={allPandits} setAllPandits={setAllPandits} />}/>
        <Route path="/Admin" element={<RequestsList/>}/>

      </Routes>
    </Router>

  );
}

export default App;
