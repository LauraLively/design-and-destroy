import { useEffect, useState } from "react";
import { getAllEquipment } from "../database/ext/api";

import Accordion from 'react-bootstrap/Accordion';

import EquipmentCard from "../components/Equipment/equipmentCard";
import "../components/Equipment/styles.css"

function EquipmentPage () {
    //Loading stuff doesnt work but its not breaking it so I am pushing lol
    const [isLoading, setIsLoading] = useState(true);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      console.log("during", isLoading)
        getAllEquipment()
          .then(setEquipment)
          .then(setIsLoading(false));
          console.log("during", equipment)
    }, []);
    console.log("after", isLoading)

    return (
        <>
            <p>List of all equipment:</p>
            {isLoading == true && <p>Loading...</p>}
            <Accordion>
                  <div>
                    {equipment.map((weapon) => (
                    <div>
                    <Accordion.Item eventKey={weapon.index}>
                      <Accordion.Header>{weapon.name}</Accordion.Header>
                      <Accordion.Body>
                      </Accordion.Body>
                    </Accordion.Item>
                    </div>
                    ))}
                  </div>
            </Accordion>
        </>
    )
}

export default EquipmentPage;