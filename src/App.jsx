import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
   return (
      <BrowserRouter>
         <SearchAppBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Tour />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
