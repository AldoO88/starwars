import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../utils/constants";
import Card from "../components/Card"



const People = () => {

    const [ people, setPeople ] = useState([])
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const peoples = await axios.get(baseUrl + "/people/");
                const result = await peoples.data;
                
                if(result){
                    setPeople(result.results);
                    setLoading(false);
                
                }
                
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
           
        };
        fetchPeople();
    }, []);

    return(
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
            

    );
}

export default People;