import React from 'react';
import Select from 'react-select';

const options = [
    { value: "Dragonborn", label: "Dragonborn" },
    { value: "Dwarf", label: "Dwarf" },
    { value: "Elf", label: "Elf" },
    { value: "Gnome", label: "Gnome" },
    { value: "Half-Elf", label: "Half-Elf" },
    { value: "Half-Orc", label: "Half-Orc" },
    { value: "Halfling", label: "Halfling" },
    { value: "Human", label: "Human" },
    { value: "Tiefling", label: "Tiefling" },
    { value: "Aarakocra", label: "Aarakocra" },
    { value: "Aasimar", label: "Aasimar" },
    { value: "Changeling", label: "Changeling" },
    { value: "Deep Gnome", label: "Deep Gnome" },
    { value: "Duergar", label: "Duergar" },
    { value: "Eladrin", label: "Eladrin" },
    { value: "Fairy", label: "Fairy" },
    { value: "Firbolg", label: "Firbolg" },
    { value: "Genasi (Air)", label: "Genasi (Air)" },
    { value: "Genasi (Earth)", label: "Genasi (Earth)" },
    { value: "Genasi (Fire)", label: "Genasi (Fire)" },
    { value: "Genasi (Water)", label: "Genasi (Water)" },
    { value: "Githyanki", label: "Githyanki" },
    { value: "Githzerai", label: "Githzerai" },
    { value: "Goliath", label: "Goliath" },
    { value: "Harengon", label: "Harengon" },
    { value: "Kenku", label: "Kenku" },
    { value: "Locathah", label: "Locathah" },
    { value: "Owlin", label: "Owlin" },
    { value: "Satyr", label: "Satyr" },
    { value: "Sea Elf", label: "Sea Elf" },
    { value: "Shadar-Kai", label: "Shadar-Kai" },
    { value: "Tabaxi", label: "Tabaxi" },
    { value: "Tortle", label: "Tortle" },
    { value: "Triton", label: "Triton" },
    { value: "Verdan", label: "Verdan" },
    { value: "knight", label: "knight" },
]

function CreateCharacter() {
    return(
        <>
        <p>Here is where you can create you're character!</p>
        <label>Your Characters Name</label>
        <input type="text"/> 
        <label>Race</label>
        <Select options={options} /> 
        <label>Your Characters Name</label>
        <input type="text"/> 


        <button type="submit">Create Character!</button>
        </>
    )
}

export default CreateCharacter;