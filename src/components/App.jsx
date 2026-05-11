import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([]);
  const [newPlant, setNewPlant] = useState("");
  useEffect(() => {
    async function fetchPlants() {
       try{
        const response = await fetch("http://localhost:6001/plants");
        if (!response.ok) {       
             throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlantList(data);
       } catch (error) {
        console.error("Error fetching plants:", error);
       }
    }
    fetchPlants();
  }, []);
  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} setPlantList={setPlantList} newPlant={newPlant} setNewPlant={setNewPlant} />
    </div>
  );
}

export default App;
