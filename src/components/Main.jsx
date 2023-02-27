import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import CountryListPage from "./CountryListPage";
import CountryDetail from "./CountryDetail";

export default function Main(props) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/:id" element={<CountryListPage />} />
        <Route path="/countryDetail/:country" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}
