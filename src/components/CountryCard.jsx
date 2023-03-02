import { Link } from "react-router-dom";

export default function CountryCard(props) {
  return (
    <Link
      to={`/countryDetail/${props.countryData.name.common}`}
      className="w-80 h-72 border-neutral-300 border p-2.5 cursor-pointer  rounded-lg mt-10 mx-2.5 hover:mt-5"
    >
      <div className="rounded-lg mb-2.5 border-neutral-300 border h-52">
        <img
          src={props.countryData.flags.png}
          alt="flag"
          className="w-full object-cover rounded-lg h-full"
        />
      </div>
      <div className="flex justify-center items-center text-neutral-400 font-medium">
        country:
        <h3 className="font-bold text-stone-700 ml-2.5">
          {props.countryData.name.common}
        </h3>
      </div>
      <div className="flex justify-center items-center text-neutral-400 font-medium">
        capital:
        <h5 className="font-bold text-stone-700 ml-2.5">
          {props.countryData.capital}
        </h5>
      </div>
    </Link>
  );
}
