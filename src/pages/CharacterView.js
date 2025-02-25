import { useParams } from 'react-router'

import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import { getSpell } from '../database/ext/api';

import CharacterData from "../database/testData/chars.json"

function Character() {
    let params = useParams()

    var characterData = [];
    
    for(let i = 0; i < CharacterData.userCharacters.length; i++){
        if(params.id == CharacterData.userCharacters[i].id){
            characterData = CharacterData.userCharacters[i]
        }
    }

    // var spellArr = [];

    // console.log("Length", characterData.Spells.length)
    // if(characterData.Spells){
    //   for(let i = 0; i < characterData.Spells.length; i++){
    //   console.log("in")
    //   spellArr += getSpells(characterData.Spells[i])
    //   }
    //   characterData.Spells = spellArr;
    // }
    // console.log("Length", characterData.Spells)

    return(
        <>
        <h1>Your Character:</h1>
        <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <h4 >Name</h4>
                <p>{characterData.Name}</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <h4 >Class</h4>
                <p>{characterData.Class}</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <h4 >Race</h4>
                <p>{characterData.Race}</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <h4 >SubClass</h4>
                <p>{characterData.Subclass}</p>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <h4>Strength</h4>
                <p>{characterData.Strength}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <h4>Inteligence</h4>
                <p>{characterData.Inteligence}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <h4>Dexterity</h4>
                <p>{characterData.Dexterity}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <h4>Wisdom</h4>
                <p>{characterData.Wisdom}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <h4>Charisma</h4>
                <p>{characterData.Charisma}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <h4>Constitution</h4>
                <p>{characterData.Constitution}</p>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
              <div>
                <h4>Languages</h4>
                <div>{characterData.Languages.map(language => <p>{language}</p>)}</div>
              </div>
            </div>         
        </div>
        <div class="row">
            <div class="col-md-4">
              <div>
                <h4>Weapons</h4>
                <div>{characterData.Weapons.map(weapon => <p>{weapon}</p>)}</div>
              </div>
            </div>         
        </div>
        {characterData.Spells &&
        <>
        <div class="row">
            <div class="col-md-4">
              <div>
                <h4>Spells</h4>
                <Accordion>
                <div>{characterData.Spells?.map(spell => 
                  <div>
                  <Accordion.Item eventKey={spell.Name}>
                    <Accordion.Header>{spell.Name}</Accordion.Header>
                    <Accordion.Body>
                      {spell.Name}
                    </Accordion.Body>
                  </Accordion.Item>
                  
                  </div>

                  )}</div>
                  </Accordion>
              </div>
            </div>         
        </div>
        </>
        }
        </>
    )
}

// async function getSpells(Spells) {
//   const [spell, setSpell] = useState([]);

//     console.log("innnn")
//     useEffect(() => {
//             getSpell(Spells[i].url)
//               .then(setSpell)
//         }, []);
 

//   return spell;
// }

export default Character;