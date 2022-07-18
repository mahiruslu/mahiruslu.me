import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";
import Layout from "./components/layout/Layout";
import Articles from "./pages/Articles/Articles";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Articles />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
