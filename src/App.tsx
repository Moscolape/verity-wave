import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));


function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <MoonLoader size={25} color="#FFA836" />
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