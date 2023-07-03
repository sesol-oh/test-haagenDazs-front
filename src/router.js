import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Landing = lazy(() => import("./pages/Landing"));
const Menu = lazy(() => import("./pages/menu"));

const Routing = () => {
    return (
        <Router>
            <Suspense fallback={<div className="loading" />}>
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/Menu/*" element={<Menu />} />
                    </Routes>
            </Suspense>
        </Router>
    );
};

export default Routing;
