import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  console.log("inside use fetch data", data);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resData = await fetch(url);
    const response = await resData.json();

    const Jsondata = await response.data;

    setData(Jsondata);
  }
  return data;
};

export default useFetch;
