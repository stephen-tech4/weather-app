import clsx from "clsx";
import Text from "../components/typography/Text";

const WeatherInformation = ({ weather }) => {
  // Breakdown the fields returned from OpenWeatherApi
  const weatherCondition = weather?.weather[0]?.main;
  const temperature = (weather?.main?.temp || 0).toFixed(0);
  const temperature_max = (weather?.main?.temp_max || 0).toFixed(0);
  const temperature_min = (weather?.main?.temp_min || 0).toFixed(0);
  const humidity = (weather?.main?.humidity || 0).toFixed(0);
  const city = weather?.name;
  const countryCode = weather?.sys?.country;

  return (
    <div className="relative text-purple-900">
      <div
        className={clsx(
          "absolute -top-[70px] sm:-top-[110px] -right-2 w-[120px] sm:w-[200px] h-[120px] sm:h-[200px] bg-cover",
          {
            "bg-bg-cloud": weatherCondition && weatherCondition === "Clouds",
            "bg-bg-sun": weatherCondition && weatherCondition !== "Clouds",
          }
        )}
      />
      <Text className="font-medium" size="lg">
        Today&apos;s Weather
      </Text>

      {/* Small screen */}
      <div className="flex sm:hidden flex-col gap-1">
        <div className="flex flex-row justify-between">
          <Text className="font-bold" size="3xl">
            {temperature}&deg;
          </Text>

          <Text className="text-gray-600 mt-auto">{weatherCondition}</Text>
        </div>

        <div className="flex flex-row justify-between">
          <Text>
            H: {temperature_max}&deg; L: {temperature_min}&deg;
          </Text>

          <Text className="text-gray-600 mt-auto">Humidity: {humidity}%</Text>
        </div>

        <div className="flex flex-row justify-between">
          <Text>{[city, countryCode].filter((v) => !!v).join(", ")}</Text>

          <Text className="text-gray-600 mt-auto">
            {new Date().toLocaleString()}
          </Text>
        </div>
      </div>

      {/* Larger than small screen */}
      <div className="hidden sm:flex flex-col gap-1">
        <Text className="font-bold text-[48px]">{temperature}&deg;</Text>
        <Text>
          H: {temperature_max}&deg; L: {temperature_min}&deg;
        </Text>

        <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 justify-between">
          <Text>{[city, countryCode].filter((v) => !!v).join(", ")}</Text>

          <Text className="text-gray-600 mt-auto">
            {new Date().toLocaleString()}
          </Text>
          <Text className="text-gray-600 mt-auto">Humidity: {humidity}%</Text>
          <Text className="text-gray-600 mt-auto">{weatherCondition}</Text>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
