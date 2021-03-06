const rankingsBody = document.querySelector('#rankings-table > tbody');

function loadRankings (){
    const request = new XMLHttpRequest();

    request.open('get', 'data/rankings.json');
    request.onload = () => {

        try {
            const json = JSON.parse(request.responseText);
            populateRankings(json);
        }
        catch (e) {
            console.warn("Could not load rankings");
        }
    }

    request.send();
}

function populateRankings(json){
    //Clears out existing table data
    while (rankingsBody.firstChild){
        rankingsBody.removeChild(rankingsBody.firstChild);
    }

    //populate table
    json.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell) =>{
            const td  = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);

            
        });

        rankingsBody.appendChild(tr);
    });


}

document.addEventListener("DOMContentLoaded",() => {
    loadRankings();
})
