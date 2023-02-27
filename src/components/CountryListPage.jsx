import CountryCard from "./CountryCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountrysByRegion } from "../store/slices/countrySlices";
import { useParams } from "react-router";

export default function CountryListPage() {
  const countrys = useSelector((state) => state.countrysByRegion);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountrysByRegion(params.id));
  }, [params.id]);
  return (
    <div className="px-5 flex flex-wrap justify-center">
      {countrys.map((el) => (
        <CountryCard countryData={el} key={el.area} />
      ))}
      {/* <h1>{count}</h1> */}
      {/* <p>{country?.name?.common}</p> */}
      {/* <button
        className="border-neutral-300 border mx-10"
        onClick={() => {
          dispatch(increment(2));
        }}
      >
        increment
      </button>
      <button
        className="border-neutral-300 border mx-10"
        onClick={() => {
          dispatch(decrement(3));
        }}
      >
        decrement
      </button> */}
    </div>
  );
}
