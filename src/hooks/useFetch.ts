import { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();
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
