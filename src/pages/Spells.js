import { useEffect, useState } from "react";
import { getAllSpells } from "../database/ext/api";

import SpellCard from "../components/Spells/spellcard";
import "../components/Spells/styles.css"

function SpellsPage () {
    const [spells, setSpells] = useState([]);

    loadingText();

    useEffect(() => {
        getAllSpells().then(setSpells);
    }, []);

    return (
        <>
            <p>List of all spells:</p>
            <p id="loadingText">Loading...</p>
            <ul id="spellList" className="spell-list">
              {spells.map((spell) => (
                <SpellCard key={spell.index} spell={spell} />
              ))}
            </ul>
        </>
    )
}

function loadingText() {
    
}

export default SpellsPage;