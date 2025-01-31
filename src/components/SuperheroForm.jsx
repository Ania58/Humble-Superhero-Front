import { useState } from "react";

const SuperheroForm = ({ onSuperheroAdded }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSuperhero = { name, superpower, humilityScore: Number(humilityScore) };

    try {
      const response = await fetch("http://localhost:3000/superheroes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSuperhero),
      });

      if (response.ok) {
        onSuperheroAdded(); 
        setName("");
        setSuperpower("");
        setHumilityScore("");
      }
    } catch (error) {
      console.error("Error adding superhero:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Superpower" value={superpower} onChange={(e) => setSuperpower(e.target.value)} required />
      <input type="number" placeholder="Humility Score (1-10)" value={humilityScore} onChange={(e) => setHumilityScore(e.target.value)} required min="1" max="10" />
      <button type="submit">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;