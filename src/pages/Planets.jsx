import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Planets = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState([]);

  const URL = baseUrl + `/planets/?page=${page}`;

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const planets = await axios.get(URL);
        const result = await planets.data;

        if (result) {
          setPlanets(result.results);
          setLoading(false);
          setInfo(result);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchPlanets();
  }, [URL]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {loading || error ? (
          <span className="text-white">loading....</span>
        ) : (
          planets.map((planet, index) => (
            <Card
              key={index}
              name={planet.name}
              gender={planet.diameter}
              height={planet.terrain}
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

export default Planets;
