const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
    const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
      response.json()
    );
    return Promise.all(
      spellIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
}

export async function getSpell(SpellUrl) {
  const spellData = await fetch(BASE_URL + "/api/2014/spells/" + SpellUrl).then((response) =>
    response.json()
  );
  console.log("Spelldata", spellData)
  return (spellData);
}

export async function getAllClasses() {
  const classIndexes = await fetch(BASE_URL + "/api/classes").then((response) =>
    response.json()
  );
  return Promise.all(
    classIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}

export async function getAllRaces() {
  const raceIndexes = await fetch(BASE_URL + "/api/races").then((response) =>
    response.json()
  );
  return Promise.all(
    raceIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}


export async function getAllMonsters() {
    const monsterIndexes = await fetch(BASE_URL + "/api/monsters").then((response) =>
      response.json()
    );
    return Promise.all(
      monsterIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
}
