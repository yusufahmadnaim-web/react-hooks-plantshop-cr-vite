import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList, setPlantList, newPlant, setNewPlant }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPlants = plantList.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <main>
      <NewPlantForm setPlantList={setPlantList} newPlant={newPlant} setNewPlant={setNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plantList={filteredPlants} />
    </main>
  );
}

export default PlantPage;
