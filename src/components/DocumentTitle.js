import { useEffect } from "react";

const DocumentTitle = ({ children = "Loading..." }) => {
  useEffect(() => {
    document.title = `${children} - Weather App`;
  }, [children]);

  return null;
};

export default DocumentTitle;
