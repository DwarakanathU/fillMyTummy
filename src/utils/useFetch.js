import { useEffect, useState } from "react";

const useFetch = async (url) => {
  const [data, setData] = useState([]);

  console.log("inside use fetch data", data);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resData = await fetch(url);
    const response = await resData.json();

    const Jsondata = response.data;

    setData(Jsondata);
  }
  return data;
};

export default useFetch;
