import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Pint = lazy(() => import("./menuList/pint"));
const MiniCup = lazy(() => import("./menuList/miniCup"));
const StickSand = lazy(() => import("./menuList/stickSand"));
const ConBulk = lazy(() => import("./menuList/conBulk"));
const Dessert = lazy(() => import("./menuList/dessert"));

const Menu = () => {
    return (
            <Routes>
                <Route path={"/pint"} element={<Pint />} />
                <Route path={"/miniCup/*"} element={<MiniCup />} />
                <Route path={"/stickSand/*"} element={<StickSand />} />
                <Route path={"/conBulk/*"} element={<ConBulk />} />
                <Route path={"/dessert/*"} element={<Dessert />} />
            </Routes>
    );
};

export default Menu;
