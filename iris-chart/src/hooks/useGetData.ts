import { useEffect, useState } from 'react';

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  /**
   *
   * Utils.
   *
   */

  const getData = () => {
    fetch('http://localhost:8080/feed/data')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong');
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  /**
   *
   * Effects.
   *
   */

  useEffect(() => {
    getData();
  }, []);

  /**
   *
   * Data.
   *
   */

  return { data, error };
};
