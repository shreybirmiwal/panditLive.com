import RequestsList from "./RequestsList";
import BookingRequests from "./BookingRequests"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<BookingRequests/>}/>
        <Route path="/Admin" element={<RequestsList/>}/>

      </Routes>
    </Router>

  );
}

export default App;
