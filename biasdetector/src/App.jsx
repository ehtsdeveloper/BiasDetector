import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from '/Home/Home'

function App() {
  return (
    <Router>
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;