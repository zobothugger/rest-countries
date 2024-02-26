import React from "react";
import "./Countries.css";
import { Link } from "react-router-dom";
import Loading from "../../utlis/Loading";

const Countries = ({ countries, isLoading }) => {
  if (isLoading) {
    return <Loading isLoading={isLoading}/>;
  }
  return (
    <div className="container countries ">
      {countries.map((country) => {
        return (
          <Link
            to={`/detail/${country.name.common}`}
            key={country.name.common}
            className="bg-element rounded-3 custom-text-white text-decoration-none"
          >
            <img
              className="w-100 rounded-top flag"
              src={country.flags.png}
              alt={country.flags.alt}
            />
            <div className="px-4 py-5 text-start">
              <p className="fw-bold fs-1">{country.name.common}</p>
              <p>
                <span className="fw-semibold">Population:</span>:{" "}
                {country.population}
              </p>
              <p>
                <span className="fw-semibold">Region:</span>
                {country.region}
              </p>
              <p>
                <span>Capital:</span>
                {country.capital ? country.capital : "No Capital"}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
