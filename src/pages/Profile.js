import { useParams } from 'react-router'

import { useEffect, useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { getSpell } from '../database/ext/api';

import TestData from "../database/testData/chars.json"

function Character() {
  let params = useParams()

  var characterData = [];

  for (let i = 0; i < TestData.userCharacters.length; i++) {
    if (params.id == TestData.userCharacters[i].id) {
      characterData = TestData.userCharacters[i]
    }
  }

  return (
    <>
      <div class="row justify-content-md-center">
        <div class="col-md-8">
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
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Strength</Card.Title>
                  <Card.Text>
                    {characterData.Strength}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Inteligence</Card.Title>
                  <Card.Text>
                    {characterData.Inteligence}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Dexterity</Card.Title>
                  <Card.Text>
                    {characterData.Dexterity}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Wisdom</Card.Title>
                  <Card.Text>
                    {characterData.Wisdom}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Charisma</Card.Title>
                  <Card.Text>
                    {characterData.Charisma}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div class="col-md-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Constitution</Card.Title>
                  <Card.Text>
                    {characterData.Constitution}
                  </Card.Text>
                </Card.Body>
              </Card>
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
          {characterData.Weapons &&
            <>
              <div id="SpellContent" class="row">
                <div class="col-md-4">
                  <div>
                    <h4>Weapons</h4>
                    <Accordion>
                      <div>
                        {characterData.Weapons.map((weapon) => (
                          <div>
                            <Accordion.Item eventKey={weapon}>
                              <Accordion.Header>{weapon}</Accordion.Header>
                              <Accordion.Body>
                                {weapon}
                              </Accordion.Body>
                            </Accordion.Item>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                </div>
              </div>
            </>
          }
          {spellDataFull != null &&
            <>
              <div id="SpellContent" class="row">
                <div class="col-md-8">
                  <div>
                    <h4>Spells</h4>
                    <Accordion>
                      <div>
                        {spellDataFull.map((spell) => (
                          <div>
                            <Accordion.Item eventKey={spell.name}>
                              <Accordion.Header>{spell.name}</Accordion.Header>
                              <Accordion.Body>
                                <p>Range: {spell.range}</p>
                                <p>Casting time: {spell.casting_time}</p>
                                <p>Attack type: {spell.attack_type}</p>
                                <p>Duraction: {spell.duration}</p>
                                <p>Description: {spell.desc}</p>
                              </Accordion.Body>
                            </Accordion.Item>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                </div>
              </div>
            </>
          }


        </div>
      </div>
    </>
  )
}

export default Character;