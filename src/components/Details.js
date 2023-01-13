// imports
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../redux/coronavirus-api/covid-19-countries';
import { fetchStats } from '../redux/coronavirus-api/covidreducer';

// Get Country Details from the API
// return countryStore with useSelector

const DetailPage = () => {
  const countryStore = useSelector((store) => store.details);

  // Dispatch Function

  const dispatch = useDispatch();

  // return name from API url

  const { name } = useParams();

  // return an object that matches condition

  const findCountry = countryStore.find((country) => country.country === name);

  // useEffect if countryStore is empty to fetchData from the API

  useEffect(() => {
    if (countryStore.length === 0) {
      fetchData().then((response) => dispatch(fetchStats(response)));
    }
  });

  // return a ul With Countries, Cases, Deaths And Recoveries

  return (
    <div className="container-fluid states-container">
      <div className="continent">
        <h2>{name}</h2>
        {findCountry.country_flag ? (
          <img
            src={findCountry.country_flag}
            alt="national-flag"
            className="national-flag1"
          />
        ) : (
          <p>Country not found</p>
        )}
      </div>
      <div>
        <h3> Today&apos;s update</h3>
        <ul className="today">
          <li className="stats-list">
            <p>New Cases:</p>
            {' '}
            {findCountry.todays_cases ? findCountry.todays_cases.toLocaleString() : '0'}
          </li>
          <li className="stats-list">
            <p>Confirmed Deaths:</p>
            {' '}
            {findCountry.todays_deaths ? findCountry.todays_deaths.toLocaleString() : '0'}
          </li>
          <li className="stats-list">
            <p>New Recoveries:</p>
            {' '}
            {findCountry.todays_recovered ? findCountry.todays_recovered.toLocaleString() : '0'}
          </li>
        </ul>
        <ul className="total">
          <h3>Total</h3>
          <li className="stats-list">
            <p>Confirmed cases:</p>
            {' '}
            {findCountry.total_cases ? findCountry.total_cases.toLocaleString() : 'unknown'}
          </li>
          <li className="stats-list">
            <p>Recovered:</p>
            {' '}
            {findCountry.total_recovered ? findCountry.total_recovered.toLocaleString() : 'unknown'}
          </li>
          <li className="stats-list">
            <p>Active Cases:</p>
            {' '}
            {findCountry.total_active ? findCountry.total_active.toLocaleString() : 'unknown'}
          </li>
          <li className="stats-list">
            <p>Total Tests:</p>
            {' '}
            {findCountry.total_tests ? findCountry.total_tests.toLocaleString() : 'unknown'}
          </li>
          <li className="stats-list">
            <p>Deaths:</p>
            {' '}
            {findCountry.total_deaths ? findCountry.total_deaths.toLocaleString() : 'unknown'}
          </li>
        </ul>
      </div>
    </div>
  );
};

// export
export default DetailPage;
