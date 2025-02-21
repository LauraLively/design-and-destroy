import { useParams } from 'react-router'

import CharacterData from "../database/testData/chars.json"

function Character() {
    let params = useParams()

    var characterData = [];
    

    for(let i = 0; i < CharacterData.userCharacters.length; i++){
        if(params.id == CharacterData.userCharacters[i].id){
            console.log("yes", params.id, CharacterData.userCharacters[i].id)
            characterData = CharacterData.userCharacters[i]
            console.log(characterData)
        }
    }

    return(
        <>
        <h1>Your Character:</h1>
        <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterName">Name</label>
                <p>{characterData.Name}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterClass">Class</label>
                <p>{characterData.Class}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="characterRace">Race</label>
                <p>{characterData.Race}</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Character;