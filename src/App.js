import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/programs/Programs";
import Reason from "./components/reasons/Reason";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Routes>
        <Route path="/programs" element={<Programs />} />
        <Route path="/reason" element={<Reason />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
