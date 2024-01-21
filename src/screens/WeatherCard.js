import Card from "../components/Card";
import SearchHistories from "./SearchHistories";
import WeatherInformation from "./WeatherInformation";

const WeatherCard = ({ weather }) => {
  return (
    <Card className="!mt-[72px] rounded-md bg-purple-50/50 backdrop-blur border-transparent">
      <WeatherInformation weather={weather} />

      <SearchHistories />
    </Card>
  );
};

export default WeatherCard;
