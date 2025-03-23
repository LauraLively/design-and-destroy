import React from 'react';
import Select from 'react-select';
import { useEffect, useState } from "react";
import { getAllClasses } from '../../database/ext/api';
import { getAllRaces } from '../../database/ext/api';
import { getAllRacesOpen5e } from '../../database/ext/api';
import { getAllBackgroundsOpen5e } from '../../database/ext/api';
import { ReactComponent as BarbarianIco } from '../../assets/icons/barbarian.svg';
import { ReactComponent as BardIco } from '../../assets/icons/bard.svg';
import { ReactComponent as ClericIco } from '../../assets/icons/cleric.svg';
import { ReactComponent as DruidIco } from '../../assets/icons/druid.svg';
import { ReactComponent as FighterIco } from '../../assets/icons/fighter.svg';
import { ReactComponent as MonkIco } from '../../assets/icons/monk.svg';
import { ReactComponent as PaladinIco } from '../../assets/icons/paladin.svg';
import { ReactComponent as RangerIco } from '../../assets/icons/ranger.svg';
import { ReactComponent as RogueIco } from '../../assets/icons/rogue.svg';
import { ReactComponent as SorcererIco } from '../../assets/icons/sorcerer.svg';
import { ReactComponent as WarlockIco } from '../../assets/icons/warlock.svg';
import { ReactComponent as WizardIco } from '../../assets/icons/wizard.svg';

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
    const [races2, setRaces2] = useState([]);
    const [backgrounds, setBackgrounds] = useState([]);
    const [barbarianColor, setBarbarianColor] = useState('#E7623E');
    const [bardColor, setBardColor] = useState('#AB6DAC');
    const [clericColor, setClericColor] = useState('#91A1B2');
    const [druidColor, setDruidColor] = useState('#7A853B');
    const [fighterColor, setFighterColor] = useState('#7F513E');
    const [monkColor, setMonkColor] = useState('#51A5C5');
    const [paladinColor, setPaladinColor] = useState('#B59E54');
    const [rangerColor, setRangerColor] = useState('#507F62');
    const [rogueColor, setRogueColor] = useState('#555752');
    const [sorcererColor, setSorcererColor] = useState('#992E2E');
    const [warlockColor, setWarlockColor] = useState('#7B469B');
    const [wizardColor, setWizardColor] = useState('#2A50A1');

    const [size, setsize] = useState('3');

    useEffect(() => {
        getAllClasses().then(setClasses);
        getAllRaces().then(setRaces);
        getAllRacesOpen5e().then(setRaces2);
        getAllBackgroundsOpen5e().then(setBackgrounds);
    }, []);

    var classesOpt = [];
    classes.forEach((value) =>{
        classesOpt.push({
            key: value.name,
            value: value.index,
            label: value.name
        })
        console.log("classesname", value.name)
    })
    var racesOpt = [];
    races.forEach((value) =>{
        racesOpt.push({
            key: value.name,
            value: value.index,
            label: value.name
        })
    })
    var races2Opt = [];
    races2.forEach((value) =>{
        races2Opt.push({
            key: value.name,
            value: value.slug,
            label: value.name
        })
        console.log("races2opt", races2Opt);
    })
    var backgroundsOpt = [];
    backgrounds.map((value) =>{
        backgroundsOpt.push({
          key: value.name,
          value: value.slug,
          label: value.name
        })
    })
    console.log("classes", classes);
    console.log("getAllRacesOpen5e", races2);
    console.log("getAllBackgroundsOpen5e", backgrounds);

    return(
        <>
        <h2 class="text-center">Character Creator</h2>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterName">Character Name</label>
                <input type="text" class="form-control" id="characterName" aria-describedby="CharacterName" placeholder="Character Name"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterClass">Character Class</label>
                <Select options={classesOpt} class="form-control" id="characterClass" aria-describedby="CharacterClass" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterRace">Character Race</label>
                <Select options={races2Opt} class="form-control" id="characterRace" aria-describedby="CharacterRace" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterRace">Character Backgrounds</label>
                <Select options={backgroundsOpt} class="form-control" id="characterBackground" aria-describedby="CharacterBackground" />
              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h3 class="text-center">Helper stuff</h3>
          <div class="row">
            <div class="text-center col-md-12">
                <BarbarianIco fill={barbarianColor} width={size + 'em'} height={size + 'em'}/>
                <BardIco fill={bardColor} width={size + 'em'} height={size + 'em'}/>
                <ClericIco fill={clericColor} width={size + 'em'} height={size + 'em'}/>
                <DruidIco fill={druidColor} width={size + 'em'} height={size + 'em'}/>
                <FighterIco fill={fighterColor} width={size + 'em'} height={size + 'em'}/>
                <MonkIco fill={monkColor} width={size + 'em'} height={size + 'em'}/>
                <PaladinIco fill={paladinColor} width={size + 'em'} height={size + 'em'}/>
                <RangerIco fill={rangerColor} width={size + 'em'} height={size + 'em'}/>
                <RogueIco fill={rogueColor} width={size + 'em'} height={size + 'em'}/>
                <SorcererIco fill={sorcererColor} width={size + 'em'} height={size + 'em'}/>
                <WarlockIco fill={warlockColor} width={size + 'em'} height={size + 'em'}/>
                <WizardIco fill={wizardColor} width={size + 'em'} height={size + 'em'}/>
            </div>            
          </div>
        <p></p>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <p>&nbsp;</p>

        </>
    )
}

export default CreateCharacter;