

function MonsterSearch() {
    const monsterInput = document.getElementById('monsterInput')
    const searchButton = document.getElementById('searchButton')
    const monsterResult = document.getElementById('monsterResult')

    searchButton.addEventListener("click", () => {
        const monsterName = monsterInput.value.toLowerCase();
        if(monsterName) {
            searchMonster(monsterName)
        }else {
            monsterResult.innnerHtml = "Please enter a monster name.";
        }
    })


    return(
        <>
        <h1>Monster Search</h1>
        <input type="text" id="monsterInput" placeholder="Enter a monster name"/>
        <button id="searchButton">Search</button>
        <div id="monsterResult"></div>
        </>
    );
}

function searchMonster(Name) {

}

export default MonsterSearch;

