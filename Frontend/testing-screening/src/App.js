import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Details from "./Components/Details";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/details/:uuid" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
