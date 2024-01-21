import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import SearchIcon from "../icons/16/SearchIcon";
import useQueryString from "../hooks/useQueryString";
import { v4 as uuidV4 } from "uuid";

/**
 * @param {*} maxHistory Maxinum number of most recent search histories to persist
 */
const FindCityAndCountryHeader = ({ maxHistory = 15 }) => {
  const { country: countryFromQueryString, city: cityFromQueryString } =
    useQueryString();

  // Default to Singapore
  // react-hook-form: Easy state management
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      country: countryFromQueryString || "Singapore",
      city: cityFromQueryString || "Singapore",
    },
  });

  const onSubmit = (input) => {
    // historyId keeps track of which history is clicked (on the finder icon) later
    // There will be a border left for the clicked history
    const historyId = uuidV4();
    const storageWeatherHistories = JSON.parse(
      localStorage.getItem("weatherSearchHistories") || `[]`
    );
    // Keep only maxHistory number of records
    const newHistories = [
      { ...input, id: historyId, createdAt: new Date() },
      ...storageWeatherHistories,
    ].slice(0, maxHistory);
    localStorage.setItem(
      "weatherSearchHistories",
      JSON.stringify(newHistories)
    );

    const params = new URLSearchParams({ ...input, hid: historyId });

    window.location.href = `?${params.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-row flex-wrap gap-4 w-full">
        <Input
          label="Country"
          placeholder="Malaysia"
          {...register("country", { required: "Country is required!" })}
          error={errors.country?.message}
        />
        <Input
          label="City"
          placeholder="Johor"
          {...register("city", { required: "City is required!" })}
          error={errors.city?.message}
        />
        <Button type="submit" className="h-12">
          <SearchIcon color="#eee" />
        </Button>
      </div>
    </form>
  );
};

export default FindCityAndCountryHeader;
