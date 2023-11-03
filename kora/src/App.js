import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/home" element={<Landing />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
