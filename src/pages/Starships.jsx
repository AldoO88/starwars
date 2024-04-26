import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Starships = () => {
  const [page, setPage] = useState(1);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState([]);

  const URL = baseUrl + `/starships/?page=${page}`;

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starships = await axios.get(URL);
        const result = await starships.data;

        if (result) {
          setStarships(result.results);
          setLoading(false);
          setInfo(result);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchStarships();
  }, [URL]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {loading || error ? (
          <span className="text-white">loading....</span>
        ) : (
          starships.map((starship, index) => (
            <Card
              key={index}
              name={starship.name}
              gender={starship.model}
              height={starship.starship_class}
            />
          ))
        )}
      </div>
      <div>
        <Pagination setPage={setPage} info={info} />
      </div>
    </>
  );
};

export default Starships;
