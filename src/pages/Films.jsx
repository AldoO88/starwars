import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"



const Films = () => {

    const [ films, setFilms ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const films = await axios.get(baseUrl + "/films/");
                const result = await films.data;
                
                if(result){
                    setFilms(result.results);
                    setLoading(false);
                
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchFilms();
    }, []);

    return(
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
            

    );
}

export default Films;