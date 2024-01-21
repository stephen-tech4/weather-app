import { useCallback, useState } from "react";

// You may replace the key with your own
const OPENWEATHERMAP_API_KEY = "34cf0989c5115ca0fea0b6c56d80e31c";

/**
 * Acccepts
 * @param {string} units for temperature: "standard" - Kelvin; "metric" - Celsius; "imperial" - Fahrenheit
 * @returns \{ result, fetchCurrentWeatherData \}
 *
 * See more for [units](https://openweathermap.org/current#data)
 */
const useOpenWeatherApi = (units = "metric") => {
  const [result, setResult] = useState({
    fetching: false,
    data: null,
    error: null,
  });

  /**
   * @param params \{ q: "Singapore, Sembawang" \}
   * @returns result = { fetching, data, error }
   */
  const fetchCurrentWeatherData = useCallback(
    async ({ params }) => {
      setResult((r) => ({ ...r, fetching: true }));

      try {
        const newParams = new URLSearchParams({
          ...params,
          appid: OPENWEATHERMAP_API_KEY,
          units,
        });

        // Example endPoint
        // https://api.openweathermap.org/data/2.5/weather?q=City, Country&appid=123&units=Metric
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?${newParams.toString()}`
        );
        const data = await response.json();

        if (data.error) {
          setResult((r) => ({ ...r, fetching: false, error: data.error }));
        } else if (data.cod !== 200) {
          setResult((r) => ({ ...r, fetching: false, error: data.message }));
        } else {
          setResult((r) => ({ ...r, fetching: false, data }));
        }
      } catch (error) {
        setResult((r) => ({
          ...r,
          fetching: false,
          error,
        }));
      }
    },
    [units]
  );

  return { result, fetchCurrentWeatherData };
};

export default useOpenWeatherApi;
