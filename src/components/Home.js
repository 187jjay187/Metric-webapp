// imports
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { generate } from 'randomized-string';
import { FaSearchPlus } from 'react-icons/fa';
import fetchData from '../redux/coronavirus-api/covid-19-countries';
import { fetchStats } from '../redux/coronavirus-api/covidreducer';
import africaImg from '../images/africa.png';

// useDispatch to dispatch actions

const HomePage = () => {
  const countryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  // fetch country data from api

  useEffect(() => {
    if (countryStore.length === 0) {
      fetchData().then((response) => dispatch(fetchStats(response)));
    }
  }, [countryStore.length, dispatch]);

  // create search function to filter the list of countries

  let continCovid = countryStore.filter((item) => item.continent === 'Africa');
  const location = useLocation();

  // get search query

  const query = new URLSearchParams(location.search);

  // filter search query for country

  const search = query.get('search') || '';
  continCovid = continCovid.filter((country) => country.country.includes(search));

  // useNavigate to navigate url

  const navigate = useNavigate();

  // usestate hook to setSearchValue

  const [searchValue, setSearchValue] = useState(search);

  // create a callback function to filter search

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  // return a search form and a ul of countries from from API

  return (
    <div className="pages">
      <div className="area">
        <img src={africaImg} alt="africa" />
        <h3>Continent: Africa</h3>
        <p>Countries: 58</p>
      </div>
      <form className="form">
        <div className="search-bar">
          <input className="form-control" type="text" value={searchValue} placeholder="Search country" onChange={countryFilterOnChange} />
          <FaSearchPlus />
        </div>
      </form>
      <ul className="list-country">
        {continCovid.map((country) => (
          <Link
            key={generate()}
            to={{ pathname: `/country/${country.country}` }}
          >
            <li className="list-details">
              <div className="details-container">
                <div className=" details">
                  <h2 className="name">{country.country || 'Unknown'}</h2>
                </div>
                <div>
                  <h2 className="popalution">Population:</h2>
                  {' '}
                  <p className="number">{country.population ? country.population.toLocaleString() : 'Unknown'}</p>
                </div>
              </div>
              <div className="photo">
                {country.country_flag && (
                  <img src={country.country_flag} alt="national flag" className="national-flag" />
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

// export
export default HomePage;
