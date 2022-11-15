import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Places from "./components/Places";

export default function App() {
  return (
    <div className="my-5">
      <Header className="text-[#434343] px-5" />
      <Routes>
        <Route path="/" element={<Main className="mt-5 text-[#434343]" />} />
        <Route path="/place-to-stay" element={<Places />} />
      </Routes>
      <Footer />
    </div>
  );
}