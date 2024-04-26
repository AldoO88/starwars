import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"
import Pagination from "../components/Pagination";



const Species = () => {

    const [ page, setPage ] = useState(1)
    const [ species, setSpecies ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ info, setInfo ] = useState([]);

    const URL = baseUrl  + `/species/?page=${page}`;
    
    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const species = await axios.get(URL);
                const result = await species.data;
                
                if(result){
                    setSpecies(result.results);
                    setLoading(false);
                    setInfo(result);
                
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchSpecies();
    }, [URL]);

    return(
        <>
        <div className="flex flex-row flex-wrap justify-center">
            {
                loading || error ? (
                    <span className="text-white">loading....</span>
                ) : (
                    species.map((specie, index) => (
                    
                            <Card
                                key={index}
                                name={specie.name}
                                gender={specie.classification}
                                height={specie.designation}
                            />
                        
                    ))
                )
            }
            </div>
            <div>
                <Pagination  setPage={setPage} info={info}/>
            </div>
            </>

    );
}

export default Species;