/**
 *
 * @returns Get the query params from url
 */
const useQueryString = () => {
  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  let params = {};
  queryParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

export default useQueryString;
