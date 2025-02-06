import { useEffect, useState } from "react";
import { getAllSpells } from "../database/ext/api";

import SpellCard from "../components/Spells/spellcard";
import "../components/Spells/styles.css"

function SpellsPage () {
    //Loading stuff doesnt work but its not breaking it so I am pushing lol
    const [isLoading, setIsLoading] = useState(true);
    const [spells, setSpells] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      console.log("during", isLoading)
        getAllSpells()
          .then(setSpells)
          .then(setIsLoading(false));
    }, []);
    console.log("after", isLoading)

    return (
        <>
            <p>List of all spells:</p>
            {isLoading ? <p>Loading...</p> : null}
            <ul id="spellList" className="spell-list">
              {spells.map((spell) => (
                <SpellCard key={spell.index} spell={spell} />
              ))}
            </ul>
        </>
    )
}

export default SpellsPage;