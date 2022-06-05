import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
