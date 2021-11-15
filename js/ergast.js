input = document.getElementById('year');
input.placeholder = "Year";
input = document.getElementById('round');
input.placeholder = "Round";

async function doAPICall(year, round){
    result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
                .catch((e)=>{console.error(e);alert("Bad Inputs!!!")})
                    .finally(console.log("API request is Over"))

    const driverStandings = await result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    tbody = document.getElementById('table-body');
    tbody.innerHTML = ""

    for(person of driverStandings){
        tr= document.createElement('tr')
        tbody.appendChild(tr)
        
        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.position
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.wins
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.Driver.givenName
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.Driver.familyName
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.Driver.dateOfBirth
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.Driver.nationality
        tr.appendChild(td)

        td = document.createElement("td")
        td.scope = "row"
        td.innerHTML = person.Constructors[0].name
        tr.appendChild(td)
    }
}


handleSubmit=()=>{
    let inputYear = document.getElementById('year').value;
    let inputRound = document.getElementById('round').value;
    let response = doAPICall(inputYear, inputRound);
    // alert(response);
}