

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
// import Header from "./components/Navbar/Header";
// import ColorScheme from "./pages/ColorScheme";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<ColorScheme />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
