import React,{useState,useEffect} from 'react';

import CharacterData from "../database/testData/chars.json"


function CharacterViewPage() {
    // To use laterrrrr
    // const [data,setData]=useState([]);
    // const getData= async ()=>{
    //     await fetch('chars.json'
    //     ,{
    //         headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }
    //     }
    //     )
    //       .then(function(response){
    //         console.log("response", response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log("myjson", myJson.userCharacters);
    //         setData(myJson.userCharacters[0])
    //       });
    // }
    // useEffect(()=>{
    //     getData()
    // },[])

    console.log("CharacterData", CharacterData)

    const CharData=CharacterData.userCharacters.map((character) =>{
        return(
            <div>
                <p>{character.id}</p>
                <p>{character.Name}</p>
            </div>
        )
    })
    return(
        <>
            <div>
                <h1>Select a Character below to view more about it</h1>
                {CharData}
            </div>
        </>
    )

}

export default CharacterViewPage;