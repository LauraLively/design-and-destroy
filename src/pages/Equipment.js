import { getEquipment } from '../database/ext/api';
import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

function EquipmentPage() {
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentData, setEquipmentData] = useState(null);
  const [result, setResult] = useState("");

  function searchEquipment() {
    if (!equipmentName.trim()) {
      setResult("Please enter an equipment name.");
      return;
    }

    setResult(<Spinner animation="border" variant="warning" />);

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
                          {equipmentData.cost.quantity && (
                            <>
                              <strong>Cost:</strong> {equipmentData.cost.quantity}{equipmentData.cost.unit}<br />
                            </>
                          )}
                          {equipmentData.damage && (
                            <>
                              <strong>Damage:</strong> {equipmentData.damage.damage_dice}<br />
                            </>
                          )}
                          {equipmentData.damage.damage_type.name && (
                            <>
                              <strong>Damage Type:</strong> {equipmentData.damage.damage_type.name}<br />
                            </>
                          )}
                          {equipmentData.range && (
                            <>
                              <strong>Range:</strong><br />
                              <strong>Normal -</strong> {equipmentData.range.normal}<br />
                              {equipmentData.range.long && (<>Long - {equipmentData.range.long}</>)}<br />
                            </>
                          )}
                          {equipmentData.properties && (
                            <>
                              <strong>Properties:</strong>
                              <ul>
                                {equipmentData.properties.map((property) => (
                                  <li key={property.name}>{property.name}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          <strong>Category:</strong> {equipmentData.equipment_category.name}<br />
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