import axios from "axios";
import { useEffect, useState } from "react";
import { BikeNetworkData } from "../../Types/Types";

function Datadisplay() {
    const [networks, setNetworks] = useState<BikeNetworkData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError]=useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://api.citybik.es/v2/networks");
                setNetworks(response.data.networks); // Setting the array properly
                console.log("Fetched Data:", response.data.networks); // Log fetched networks
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(true)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Data loading...</div>;
    }

    if(error){
        return <div>Server error! </div>
    }

    return (
        <div>
            <h1>Data Display</h1>
            {networks.map((network) => (
                <div key={network.id}>
                    <h3>{network.name}</h3>
                    <p>Location: {network.location.city}, {network.location.country}</p>
                </div>
            ))}
        </div>
    );
}

export default Datadisplay;
