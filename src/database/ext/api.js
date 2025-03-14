const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
    response.json()
  );
  console.log("Spelldata", spellIndexes)
  return Promise.all(
    spellIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}

export async function getSpell(Spells) {
  return Promise.all(
    Spells.map((data) =>
      fetch(BASE_URL + "/api/2014/spells/" + data.index).then((response) => response.json())
    )
  );
}

export async function getAllEquipment() {
  const equipmentIndexes = await fetch(BASE_URL + "/api/equipment").then((response) =>
    response.json()
  );
  console.log("Weapondata", equipmentIndexes)
  return Promise.all(
    equipmentIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}


export async function getEquipment(name) {
  try {
    const response = await fetch(BASE_URL + "/api/equipment");
    const data = await response.json();
    const equipment = data.results;

    //console.log("Equipments", equipment)

    const matchedEquipment = equipment.filter(
      (equipment) => equipment.name.toLowerCase().includes(name.toLowerCase())
    );

    if (matchedEquipment && matchedEquipment.length > 0) {
      return Promise.all(
        matchedEquipment.map((data) =>
          fetch(BASE_URL + "/api/2014/equipment/" + data.index).then((response) => response.json())
        )
      );
    } else {
      return null;
    }

  } catch (error) {
    console.error("Error fetching equipment:", error);
    return null;
  }
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

export async function getMonster(name) {
  try {
    const response = await fetch(BASE_URL + "/api/monsters");
    const data = await response.json();
    const monsters = data.results;

    //console.log("Monsters", monsters)

    const matchedMonsters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(name.toLowerCase())
    );

    if (matchedMonsters && matchedMonsters.length > 0) {
      return Promise.all(
        matchedMonsters.map((data) =>
          fetch(BASE_URL + "/api/2014/monsters/" + data.index).then((response) => response.json())
        )
      );
    } else {
      return null;
    }

  } catch (error) {
    console.error("Error fetching monster:", error);
    return null;
  }
}

