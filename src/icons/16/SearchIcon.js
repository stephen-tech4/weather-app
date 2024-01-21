const SearchIcon = ({ color = "#222" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16">
      <path
        d="m15.587 14.413-4.354-4.353A6.1 6.1 0 0 0 12.5 6.333a6.18 6.18 0 1 0-2.44 4.907l4.353 4.353a.84.84 0 0 0 1.174 0 .833.833 0 0 0 0-1.18ZM1.833 6.333a4.5 4.5 0 1 1 4.5 4.5 4.507 4.507 0 0 1-4.5-4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
