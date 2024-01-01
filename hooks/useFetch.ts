import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading };
};
