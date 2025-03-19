import { getAllClasses } from '../database/ext/api';
import { useState, useEffect } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function Classes() {

    const [classes, setClasses] = useState([]);
    const [result, setResult] = useState(<Spinner animation="border" variant="warning" />);
    
    useEffect(() => {
        getAllClasses()
        .then((data) => {
            setClasses(data);
            setResult(false);
        })
    }, []);

    return (
        <>
            {result || (classes ?
                <>
                    <div id="classesResult" class="row">
                        <div class="col-md-8">
                            <div>
                                <Accordion>
                                    <div>
                                        {classes.map((classes) => (
                                            <div>
                                                <Accordion.Item key={classes.name} eventKey={classes.name}>
                                                    <Accordion.Header>{classes.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        Hit Die: {classes.hit_die}<br />
                                                        {classes.proficiency_choices && (
                                                            <>
                                                                Class Choices:
                                                                <ul>
                                                                    {classes.proficiency_choices.map((proficiency_choice) => (
                                                                        <li key={proficiency_choice.desc}>{proficiency_choice.desc}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {classes.starting_equipment_options && (
                                                            <>
                                                                Starting Equipement Choices:
                                                                <ul>
                                                                    {classes.starting_equipment_options.map((starting_equipment_option) => (
                                                                        <li key={starting_equipment_option.desc}>{starting_equipment_option.desc}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {classes.starting_equipment && (
                                                            <>
                                                                Starting Equipment:
                                                                <ul>
                                                                    {classes.starting_equipment.map((starting_equipment) => (
                                                                        <li key={starting_equipment.equipment.name}>{starting_equipment.equipment.name} - {starting_equipment.quantity}</li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {classes.proficiencies && (
                                                            <>
                                                                Proficiencies:
                                                                <ul>
                                                                    {classes.proficiencies.map((proficiency) => (
                                                                        <li key={proficiency.name}>{proficiency.name}</li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {classes.saving_throws && (
                                                            <>
                                                                Saving throws:
                                                                <ul>
                                                                    {classes.saving_throws.map((saving_throw) => (
                                                                        <li key={saving_throw.name}>{saving_throw.name}</li>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                        {classes.spellcasting && (
                                                            <>
                                                                Spell Casting:<br/>
                                                                Ability - {classes.spellcasting.spellcasting_ability.name}
                                                                <ul>
                                                                    {classes.spellcasting.info.map((infoitem) => (
                                                                        <li key={infoitem.name}>
                                                                            {infoitem.name}
                                                                            <ul>
                                                                                <li>
                                                                                    {infoitem.desc}
                                                                                </li>
                                                                            </ul>
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


export default Classes;