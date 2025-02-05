import axios from "axios";
import { useEffect, useState } from "react";
import { BikeNetworkData } from "../../Types/Types";
import Paginationbutton from "./paginationButton/Paginationbutton";

function Datadisplay() {
  const [networks, setNetworks] = useState<BikeNetworkData['networks']>([]); // Corrected typing
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(); // Use string for error message
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://api.citybik.es/v2/networks");
        setNetworks(response.data.networks); // Set networks array properly
        console.log("Fetched Data:", response.data.networks);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true); // Set error message
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Data loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Show dynamic error message
  }

  return (
    <div>
      <h1>Data Display Comp</h1>
      <Paginationbutton networks={networks} location={""} /> 
    </div>
  );
}

export default Datadisplay;
