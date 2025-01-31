import { useState, useEffect } from "react";
import SuperheroList from "./components/SuperheroList";
import SuperheroForm from "./components/SuperheroForm";
import "./App.css";


function App() {
  const [superheroes, setSuperheroes] = useState([]); 

  const fetchSuperheroes = async () => {
    try {
      const response = await fetch("http://localhost:3000/superheroes");
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setSuperheroes(data); 
      } else {
        setSuperheroes([]); 
      }
    } catch (error) {
      console.error("Error fetching superheroes:", error);
      setSuperheroes([]); 
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return (
    <div>
      <h1>Humble Superhero API</h1>
      <SuperheroForm onSuperheroAdded={fetchSuperheroes} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}

export default App;