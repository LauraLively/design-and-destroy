import { getEquipment } from '../database/ext/api';
import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';

function EquipmentPage() {
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentData, setEquipmentData] = useState(null);
  const [result, setResult] = useState("");

  function searchEquipment() {
    if (!equipmentName.trim()) {
      setResult("Please enter an equipment name.");
      return;
    }

    setResult("Searching...");

    getEquipment(equipmentName).then(data => {
      console.log(data)
      if (data && data.length > 0) {
        setEquipmentData(data);
        setResult(""); // Clear the message when data is found
      } else {
        setEquipmentData(null);
        setResult("Equipment not found.");
      }
    }).catch(error => {
      console.error("Error fetching equipment:", error);
      setResult("Error fetching data. Please try again.");
    });
  }

  return (
    <>
      <h1>Equipment Search</h1>
      <input
        type="text"
        id="equipmentInput"
        placeholder="Enter an equipment name"
        value={equipmentName}
        onChange={(e) => setEquipmentName(e.target.value)}
      />
      <button id="searchButton" onClick={searchEquipment}>Search</button>
      <br />
      {result || (equipmentData ?
        <>
          <div id="equipmentResult" class="row">
            <div class="col-md-8">
              <div>
                <Accordion>
                  <div>
                    {equipmentData.map((equipmentData) => (
                      <Accordion.Item key={equipmentData.name} eventKey={equipmentData.name}>
                        <Accordion.Header>{equipmentData.name}</Accordion.Header>
                        <Accordion.Body>
                          Cost: {equipmentData.cost.quantity}{equipmentData.cost.unit}<br />
                          Damage: {equipmentData.damage.damage_dice}<br />
                          Damage Type: {equipmentData.damage.damage_type.name}<br />
                          Range:<br />
                          Normal - {equipmentData.range.normal}<br />
                          {equipmentData.range.long && (<>Long - {equipmentData.range.long}</>)}<br />
                          {equipmentData.properties && (
                            <>
                              Properties:
                              <ul>
                                {equipmentData.properties.map((property) => (
                                  <li key={property.name}>{property.name}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          Category: {equipmentData.equipment_category.name}<br />
                        </Accordion.Body>
                      </Accordion.Item>
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

export default EquipmentPage;