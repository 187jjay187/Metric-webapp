// imports

import axios from 'axios';

// API

const baseUrl = 'https://disease.sh/v3/covid-19/countries';

// fetch data from the api baseUrl using axios library import

const fetchData = async () => {
  // empty array called stats
  const stats = [];

  // use axios library to fetch data from api

  const response = await axios.get(baseUrl);

  // responseStat variable holds api data

  const responseStat = response.data;

  // function that maps the responseStat that deconstructs and selects the _id

  responseStat.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const staticsCovid = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };
    return stats.push(staticsCovid);
  });
  return stats;
};

// export

export default fetchData;
