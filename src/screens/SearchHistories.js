import pluralize from "pluralize";
import Card from "../components/Card";
import Text from "../components/typography/Text";
import SearchHistoryCard from "./SearchHistoryCard";

const SearchHistories = () => {
  // Get the persisted histories from localStorage
  const storageWeatherHistories = JSON.parse(
    localStorage.getItem("weatherSearchHistories") || `[]`
  );

  // Delete all histories in one shot
  const onDeleteAllHistories = () => {
    // Delete confirmation
    const confirmDelete = window.confirm(
      `Are you sure to delete ${pluralize(
        "history",
        storageWeatherHistories.length,
        true
      )}?`
    );

    if (confirmDelete) {
      localStorage.setItem("weatherSearchHistories", "[]");

      // Return to home page to reset all the states
      window.location.href = "/";
    }
  };

  return (
    <Card className="bg-purple-50/40 border-transparent rounded-md">
      <div className="flex flex-row gap-2 justify-between">
        <Text className="font-semibold text-gray-600 uppercase" size="sm">
          Search History{" "}
          {storageWeatherHistories.length > 0 &&
            `(${storageWeatherHistories.length})`}
        </Text>

        {storageWeatherHistories.length > 0 && (
          <Text
            className="text-gray-500 cursor-pointer hover:text-gray-800 uppercase duration-100"
            size="sm"
            onClick={onDeleteAllHistories}
          >
            Clear History
          </Text>
        )}
      </div>

      {storageWeatherHistories.length > 0 ? (
        storageWeatherHistories.map((history) => {
          return <SearchHistoryCard key={history.id} history={history} />;
        })
      ) : (
        <Text className="text-gray-600" size="sm">
          No history.
        </Text>
      )}
    </Card>
  );
};

export default SearchHistories;
