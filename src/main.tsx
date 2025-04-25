import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import MainLayout from "./MainLayout";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Home from "./screen/Home";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/MuhammetBsgy/Muhammett">
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
