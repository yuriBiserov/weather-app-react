import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import "./App.css";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/saved" element={<SavedPage />}></Route>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
