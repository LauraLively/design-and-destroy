import React from 'react';
import Select from 'react-select';
import { useEffect, useState } from "react";
import { getAllClasses } from '../../database/ext/api';
import { getAllRaces } from '../../database/ext/api';

// const options = [
//     { value: "Dragonborn", label: "Dragonborn" },
//     { value: "Dwarf", label: "Dwarf" },
//     { value: "Elf", label: "Elf" },
//     { value: "Gnome", label: "Gnome" },
//     { value: "Half-Elf", label: "Half-Elf" },
//     { value: "Half-Orc", label: "Half-Orc" },
//     { value: "Halfling", label: "Halfling" },
//     { value: "Human", label: "Human" },
//     { value: "Tiefling", label: "Tiefling" },
//     { value: "Aarakocra", label: "Aarakocra" },
//     { value: "Aasimar", label: "Aasimar" },
//     { value: "Changeling", label: "Changeling" },
//     { value: "Deep Gnome", label: "Deep Gnome" },
//     { value: "Duergar", label: "Duergar" },
//     { value: "Eladrin", label: "Eladrin" },
//     { value: "Fairy", label: "Fairy" },
//     { value: "Firbolg", label: "Firbolg" },
//     { value: "Genasi (Air)", label: "Genasi (Air)" },
//     { value: "Genasi (Earth)", label: "Genasi (Earth)" },
//     { value: "Genasi (Fire)", label: "Genasi (Fire)" },
//     { value: "Genasi (Water)", label: "Genasi (Water)" },
//     { value: "Githyanki", label: "Githyanki" },
//     { value: "Githzerai", label: "Githzerai" },
//     { value: "Goliath", label: "Goliath" },
//     { value: "Harengon", label: "Harengon" },
//     { value: "Kenku", label: "Kenku" },
//     { value: "Locathah", label: "Locathah" },
//     { value: "Owlin", label: "Owlin" },
//     { value: "Satyr", label: "Satyr" },
//     { value: "Sea Elf", label: "Sea Elf" },
//     { value: "Shadar-Kai", label: "Shadar-Kai" },
//     { value: "Tabaxi", label: "Tabaxi" },
//     { value: "Tortle", label: "Tortle" },
//     { value: "Triton", label: "Triton" },
//     { value: "Verdan", label: "Verdan" },
//     { value: "knight", label: "knight" },
// ]

function CreateCharacter() {
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);

    useEffect(() => {
        getAllClasses().then(setClasses);

        getAllRaces().then(setRaces);
    }, []);

    var classesOpt = [];
    classes.forEach((value) =>{
        classesOpt.push({
            key: value.name,
            value: value.index,
            label: value.name
        })
    })
    var racesOpt = [];
    races.forEach((value) =>{
        racesOpt.push({
            key: value.name,
            value: value.index,
            label: value.name
        })
    })
    console.log("classes", classes);

    return(
        <>
        <h2 className="text-center">Character Creator</h2>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="characterName">Character Name</label>
                <input type="text" className="form-control" id="characterName" aria-describedby="CharacterName" placeholder="Character Name"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="characterClass">Character Class</label>
                <Select options={classesOpt} className="form-control" id="characterClass" aria-describedby="CharacterClass" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="characterRace">Character Race</label>
                <Select options={racesOpt} className="form-control" id="characterRace" aria-describedby="CharacterRace" />
              </div>
            </div>
          </div>
          <p></p>
          <h3 className="text-center">Helper stuff</h3>
          <div className="row">
            <div className="text-center col-md-8">
                <p>This is a Barbarian</p>
            </div>            
          </div>
        <p></p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* <p>Here is where you can create you're character!</p>
        <label>Your Characters Name</label>
        <input type="text"/> 
        <label>Race</label>
        <Select options={options} /> 
        <label>Your Characters Name</label>
        <input type="text"/> 


        <button type="submit">Create Character!</button> */}
        </>
    )
}

export default CreateCharacter;