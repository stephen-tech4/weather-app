import { twMerge } from "tailwind-merge";
import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/typography/Text";
import SearchIcon from "../icons/16/SearchIcon";
import TrashIcon from "../icons/16/TrashIcon";
import clsx from "clsx";
import useQueryString from "../hooks/useQueryString";

const SearchHistoryCard = ({ history }) => {
  // hid keeps track of which history is clicked (on the finder icon)
  const { hid } = useQueryString();
  const onSearchClick = () => {
    const params = new URLSearchParams({
      country: history.country,
      city: history.city,
      hid: history.id,
    });

    window.location.href = `?${params.toString()}`;
  };

  const onDeleteClick = () => {
    // Delete confirmation
    const confirmDelete = window.confirm(
      `Are you sure?\n${history.city}, ${history.country} - ${new Date(
        history.createdAt
      ).toLocaleString()}`
    );

    if (confirmDelete) {
      const storageWeatherHistories = JSON.parse(
        localStorage.getItem("weatherSearchHistories") || `[]`
      );

      localStorage.setItem(
        "weatherSearchHistories",
        JSON.stringify(
          storageWeatherHistories.filter((h) => h.id !== history.id)
        )
      );

      window.location.reload();
    }
  };

  return (
    <Card
      className={twMerge(
        clsx(
          "bg-purple-50/60 border-transparent rounded-md text-purple-900 hover:bg-purple-50 hover:shadow-md duration-100",
          {
            "border-l-4 rounded-s-none border-l-purple-900": hid === history.id,
          }
        )
      )}
    >
      <div className="flex flex-row flex-wrap justify-between items-center gap-x-4 gap-y-1">
        <Text>
          {history.city}, {history.country}
        </Text>

        <div className="flex flex-row gap-2 items-center">
          <Text>{new Date(history.createdAt).toLocaleString()}</Text>
          <Button
            className="bg-white hover:bg-purple-100 active:bg-purple-300 border-purple-50 hover:border-purple-200 active:border-purple-200 shadow-md rounded-full p-2"
            onClick={onSearchClick}
          >
            <SearchIcon />
          </Button>
          <Button
            className="bg-white hover:bg-purple-100 active:bg-purple-300 border-purple-50 hover:border-purple-200 active:border-purple-200 shadow-md rounded-full p-2"
            onClick={onDeleteClick}
          >
            <TrashIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchHistoryCard;
