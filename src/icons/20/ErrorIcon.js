const ErrorIcon = ({ color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      className="flex-none"
    >
      <path
        fill={color}
        d="M19.8 17.14 11.48 1.31A1.67 1.67 0 0 0 10 .4a1.67 1.67 0 0 0-1.48.9L.2 17.14a1.67 1.67 0 0 0 .05 1.67 1.67 1.67 0 0 0 1.43.77h16.66a1.67 1.67 0 0 0 1.48-2.44ZM9.18 7.08a.83.83 0 0 1 1.66 0v5a.83.83 0 0 1-1.66 0Zm.87 9.59a1.28 1.28 0 0 1-1.26-1.23A1.23 1.23 0 0 1 10 14.17a1.28 1.28 0 0 1 1.27 1.22 1.23 1.23 0 0 1-1.23 1.28Z"
      />
    </svg>
  );
};

export default ErrorIcon;
