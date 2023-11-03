import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="*" element={<Error />} exact />
          {/* TODO: make these links accessible only if the user is logged in */}
          <Route path="/home" element={<Landing />} exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
