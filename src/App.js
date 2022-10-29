import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Timeline from "./pages/Timeline/Timeline";
import Error from "./pages/Error/Error";
import Layout from "./components/layout/Layout";
import Articles from "./pages/Articles/Articles";
import Contact from "./pages/Contact/Contact";
import NagehanVeMahir from "./pages/NagehanVeMahir/NagehanVeMahir";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nagehanvemahir" element={<NagehanVeMahir />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
