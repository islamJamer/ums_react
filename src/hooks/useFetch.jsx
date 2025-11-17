import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      console.log("[Users] fetching products…");
      const res = await axios.get(`https://fakestoreapi.com/${path}`);
      console.log("[Users] products:", res.data);
      setData(res.data);
      return res.data;
    } catch (err) {
      setError({
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
      console.error("❌ fetch error:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
      return [];
    } finally {
      console.log("[Users] fetch finished");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {data, loading, error};
}
