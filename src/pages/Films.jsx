import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"
import Pagination from "../components/Pagination";



const Films = () => {

    const [ page, setPage ] = useState(1)
    const [ films, setFilms] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ info, setInfo ] = useState([]);
    const URL = baseUrl  + `/films/?page=${page}`;

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const films = await axios.get(URL);
                const result = await films.data;
                
                if(result){
                    setFilms(result.results);
                    setLoading(false);
                    setInfo(result);
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchFilms();
    }, [URL]);

    return(
        <>
        <div className="flex flex-row flex-wrap justify-center">
            {
                loading || error ? (
                    <span className="text-white">loading....</span>
                ) : (
                    films.map((film, index) => (
                    
                            <Card
                                key={index}
                                name={film.title}
                                gender={film.director}
                                height={film.producer}
                            />
                        
                    ))

                )
                
            }
            </div>
            <div>
                <Pagination setPage={setPage} info={info}/>
            </div>
            </>

    );
}

export default Films;