import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route to="/" element={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
