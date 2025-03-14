import { getMonster } from '../database/ext/api';
import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function MonsterSearch() {
    const [monsterName, setMonsterName] = useState("");
    const [monsterData, setMonsterData] = useState(null);
    const [result, setResult] = useState("");

    function searchMonster() {
        if (!monsterName.trim()) {
            setResult("Please enter a monster name.");
            return;
        }

        setResult("Searching...");

        getMonster(monsterName).then(data => {
            console.log(data)
            if (data && data.length > 0) {
                setMonsterData(data);
                setResult(""); // Clear the message when data is found
            } else {
                setMonsterData(null);
                setResult("Monster not found.");
            }
        }).catch(error => {
            console.error("Error fetching monster!:", error);
            setResult("Error fetching data. Please try again.");
        });
    }

    return (
        <>
            <h1>Monster Search</h1>
            <input
                type="text"
                id="monsterInput"
                placeholder="Enter a monster name"
                value={monsterName}
                onChange={(e) => setMonsterName(e.target.value)}
            />
            <button id="searchButton" onClick={searchMonster}>Search</button>
            <br/>
            {result || (monsterData ?
                <>
                    <div id="monsterResult" class="row">
                        <div class="col-md-8">
                            <div>
                                <Accordion>
                                    <div>
                                        {monsterData.map((monsterData) => (
                                            <div>
                                                <Accordion.Item eventKey={monsterData.name}>
                                                    <Accordion.Header>{monsterData.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        HP: {monsterData.hit_points}<br />
                                                        Size: {monsterData.size}<br />
                                                        Type: {monsterData.type}<br />
                                                        XP: {monsterData.xp}<br />
                                                        Alignment: {monsterData.alignment}<br />
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </> : result)}
        </>
    );
}

export default MonsterSearch;