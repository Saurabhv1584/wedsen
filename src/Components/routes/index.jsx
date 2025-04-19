import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";

const Crochet = lazy(() => import("../crochet"));
const DreamCatcher = lazy(() => import("../dreamCatcher"));
const WeddingEssential = lazy(() => import("../weddingEss"));
const Resin = lazy(() => import("../resin"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/resin" element={<Resin />} />
        <Route path="/dreamCatcher" element={<DreamCatcher />} />
        <Route path="/weddingEssential" element={<WeddingEssential />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
