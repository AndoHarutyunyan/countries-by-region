import { useEffect } from "react";
import { getCountryByName } from "./../store/slices/countrySlices";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

export default function CountryDetail() {
  const country = useSelector((state) => state.countryDetails);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(country);
  useEffect(() => {
    dispatch(getCountryByName(params.country));
  }, []);
  return (
    <div className="px-5">
      <h1 className="text-center text-2xl font-bold mb-10">
        {country[0]?.name.official}
      </h1>
      <div className="flex justify-center  items-center flex-col sm:items-start sm:flex-row">
        <section className="mr-5 mb-5">
          <div className="mb-5">
            <h3 className="mb-3">Flag</h3>
            <div className="w-64 h-40 rounded-lg border-neutral-300 border">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={country[0]?.flags.png}
                alt="flag"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-3">Coat Of Arms</h3>
            <div className="w-64 h-40 rounded-lg">
              <img
                className="rounded-lg w-full h-full object-contain"
                src={country[0]?.coatOfArms.png}
                alt="coatOfArms"
              />
            </div>
          </div>
        </section>
        <section>
          <ul>
            <li className="text-slate-400 flex mb-2.5 items-center">
              <span className="w-24 block">capital:</span>
              <span className="text-slate-800 text-base font-semibold">
                {country[0]?.capital[0]}
              </span>
            </li>
            <li className="text-slate-400 flex mb-2.5 items-center">
              <span className="w-24 block">population:</span>
              <span className="text-slate-800 text-sm font-semibold">
                {country[0]?.population}
              </span>
            </li>
            <li className="text-slate-400 flex mb-2.5 items-center">
              <span className="w-24 block">area:</span>
              <span className="text-slate-800 text-sm font-semibold">
                {country[0]?.area}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
