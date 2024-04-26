import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"
import Pagination from "../components/Pagination";



const Vehicles = () => {

    const [ page, setPage ] = useState(1)
    const [ vehicles, setVehicles ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ info, setInfo ] = useState([]);

    const URL = baseUrl  + `/vehicles/?page=${page}`;

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const vehicles = await axios.get(URL);
                const result = await vehicles.data;
                
                if(result){
                    setVehicles(result.results);
                    setLoading(false);
                    setInfo(result);
                
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchVehicles();
    }, [URL]);

    return(
        <>
        <div className="flex flex-row flex-wrap justify-center">
            {
                loading || error ? (
                    <span className="text-white">loading....</span>
                ) : (
                    vehicles.map((vehicle, index) => (
                    
                            <Card
                                key={index}
                                name={vehicle.name}
                                gender={vehicle.model}
                                height={vehicle.vehicle_class}
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

export default Vehicles;