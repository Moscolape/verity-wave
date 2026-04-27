import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));


function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <p className="text-gray-500">Loading dashboard...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
 
export default App;