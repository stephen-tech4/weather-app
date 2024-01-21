import { useEffect } from "react";
import Section from "../components/Section";
import FindCityAndCountryHeader from "./FindCityAndCountryHeader";
import useQueryString from "../hooks/useQueryString";
import useOpenWeatherApi from "../hooks/useOpenWeatherApi";
import Callout from "../components/Callout";
import WeatherCard from "./WeatherCard";

/**
 *
 * Beginning of the page
 *
 * In this test, we will be using url query string to maintain the form states: `country` and `city`.
 *  - States are maintained externally, refreshing the page will persist the searches
 *  - You can also share the url with your colleagues with the same search
 *
 * For Search History, we will be using localStorage to persist the data.
 *  - So the data will be kept after you stop server
 *  - 15 most recent histories will be kept only
 *  - History will be saved only after you clicked the Search button or submit the form
 *
 */
const TodayWeatherPage = () => {
  // Default to Singapore
  const { country = "Singapore", city = "Singapore" } = useQueryString();
  const { result, fetchCurrentWeatherData } = useOpenWeatherApi();

  useEffect(() => {
    // Fetch the weather data
    if (country || city) {
      fetchCurrentWeatherData({ params: { q: `${city}, ${country}` } });
    }
  }, [country, city, fetchCurrentWeatherData]);

  return (
    <Section className="space-y-4 px-0">
      <FindCityAndCountryHeader />

      {result.error && <Callout intent="error">Error: {result.error}</Callout>}

      <WeatherCard weather={result.data} />
    </Section>
  );
};

export default TodayWeatherPage;
