import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { App } from "./app"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<App />} />
            </Routes>
        </BrowserRouter>)
}