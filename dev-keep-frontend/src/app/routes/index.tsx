import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/acessar" element={<h1>Hello</h1>} />
        <Route path="*" element={<Navigate to="/acessar" />} />
      </Routes>
    </BrowserRouter>
  );
};
