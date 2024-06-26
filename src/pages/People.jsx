import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"
import Pagination from "../components/Pagination";

const People = () => {
    
    const [ page, setPage ] = useState(1)
    const [ people, setPeople ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ info, setInfo ] = useState([]);
    const URL = baseUrl  + `/people/?page=${page}`;

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peoples = await axios.get(URL);
                const result = await peoples.data;
                
                if(result){
                    setPeople(result.results);
                    setLoading(false);
                    setInfo(result);
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchPeople();
    },[URL]);


    return(
        <>
        <div className="flex flex-row flex-wrap justify-center">
            {
                loading || error ? (
                    <span className="text-white">loading....</span>
                ) : (
                    people.map((people,index) => (
                    
                            <Card
                                key={index}
                                name={people.name}
                                gender={people.gender}
                                height={people.height}
                            />
                        
                    ))

                )
               
            }
          
            </div>
            <div>
                <Pagination setPage={setPage} info={info} />
            </div>
            </>
            

    );
}

export default People;