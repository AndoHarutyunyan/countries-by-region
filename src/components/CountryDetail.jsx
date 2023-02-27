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
    <>
      <h1>{country[0]?.name.official}</h1>
      <div className="flex">
        <section>
          <div>
            <h3>Flag</h3>
            <div>
              <img src={country[0]?.flags.png} alt="flag" />
            </div>
          </div>
          <div>
            <h3>Coat Of Arms</h3>
            <div>
              <img src={country[0]?.coatOfArms.png} alt="coatOfArms" />
            </div>
          </div>
        </section>
        <section>
          <ul>
            <li>
              capital:
              <span>{country[0]?.capital[0]}</span>
            </li>
            <li>
              languages:
              <span>{country[0]?.languages.hye}</span>
            </li>
            <li>
              population:
              <span>{country[0]?.population}</span>
            </li>
          </ul>
          <div className="w-96 h-60 rounded-lg border-neutral-300 border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563246.0242156957!2d45.040741000000004!3d40.070618499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2sam!4v1677511914673!5m2!1sru!2sam"
            //   width="200"
            //   height="150"
              //   style="border:0;"
              //   allowfullscreen=""
              //   loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
