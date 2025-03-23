import { getAllRaces } from '../database/ext/api';
import { useState, useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function Races() {

    const [races, setRaces] = useState([]);
    const [result, setResult] = useState(<Spinner animation="border" variant="warning" />);
        
        useEffect(() => {
            getAllRaces()
            .then((data) => {
                setRaces(data);
                setResult(false);
            })
        }, []);

    return (
        <>
            {result || (races ?
                <>
                    <div id="racesResult" class="row">
                        <div class="col-md-8">
                            <div>
                                <Accordion>
                                    <div>
                                        {races.map((races) => (
                                            <div>
                                                <Accordion.Item key={races.name} eventKey={races.name}>
                                                    <Accordion.Header>{races.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <strong>Speed:</strong> {races.speed}<br />
                                                        {races.ability_bonuses && (
                                                            <>
                                                                <strong>Ability Bonuses:</strong>
                                                                <ul>
                                                                    {races.ability_bonuses.map((bonus) => (
                                                                        <li key={bonus.ability_score.name}>{bonus.ability_score.name}: {bonus.bonus}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        <strong>Alignment:</strong> {races.alignment}<br />
                                                        <strong>Age:</strong> {races.age}<br />
                                                        <strong>Size:</strong> {races.size} - {races.size_description}<br />
                                                        <strong>Language:</strong> {races.language_desc}<br />
                                                        {races.traits && (
                                                            <>
                                                                <strong>Traits:</strong>
                                                                <ul>
                                                                    {races.traits.map((trait) => (
                                                                        <li key={trait.name}>{trait.name}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {races.subraces && (
                                                            <>
                                                                <strong>Subraces:</strong>
                                                                <ul>
                                                                    {races.subraces.map((subrace) => (
                                                                        <li key={subrace.name}>{subrace.name}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
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


export default Races;