import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();
    setLoading(true);
    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    return () => {
      setData(null);
      setLoading(true);
      source.cancel('Cancel request');
    };
  }, [url]);

  return { data, loading };
};

export default useFetch;
