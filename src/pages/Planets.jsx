import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"



const Planets = () => {

    const [ planets, setPlanets ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const planets = await axios.get(baseUrl + "/planets/");
                const result = await planets.data;
                
                if(result){
                    setPlanets(result.results);
                    setLoading(false);
                
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchPlanets();
    }, []);

    return(
        <div className="flex flex-row flex-wrap justify-center">
            {
                loading || error ? (
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

                )
                
            }
           
          
            </div>
            

    );
}

export default Planets;