const SuperheroList = ({ superheroes }) => {
    if (!Array.isArray(superheroes)) {
      return <p>Loading superheroes...</p>; 
    }
  
    return (
      <div>
        <h2>Superhero List</h2>
        {superheroes.length === 0 ? (
          <p>No superheroes added yet.</p>
        ) : (
          <ul>
            {superheroes.map((hero, index) => (
              <li key={index}>
                <strong>{hero.name}</strong> - {hero.superpower} (Humility: {hero.humilityScore})
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SuperheroList;