const BASE_URL = "https://www.dnd5eapi.co";
const BASE_URL2 = "https://api.open5e.com";

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

export async function getAllRacesOpen5e() {
  const races = await fetch(BASE_URL2 + "/races/").then((response) =>
    response.json()
  );
  return Promise.all(
    races.results.map((index) =>
      fetch(BASE_URL2 + "/races/" + index.slug ).then((response) => response.json()),
    )
  ) 
} 
export async function getAllBackgroundsOpen5e() {
  const backgrounds = await fetch(BASE_URL2 + "/backgrounds/").then((response) =>
    response.json()
  );
  return Promise.all(
    backgrounds.results.map((index) =>
      fetch(BASE_URL2 + "/backgrounds/" + index.slug ).then((response) => response.json()),
    )
  ) 
} 
