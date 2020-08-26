function personLine(person) {
    return "<tr class='peopleRow'>" +
        `<td class='personId'>${person.id}</td>` +
        `<td class='personFirstName'>${person.firstName}</td>` +
        `<td class='personlastName'>${person.lastName}</td>` +
        `<td class='personAge'>${person.age}</td>` +
        `<td class='personRole'>${person.role}</td>` +
        "</tr>"
}

function displayPeople(people) {
    if (people.length === 3) {
        let peopleTable = "<table class='peopleTable'>" +
            "<thead><tr>" +
            "<td>#</td>" +
            "<td>First</td>" +
            "<td>Last</td>" +
            "<td>Age</td>" +
            "<td>Role</td>" +
            "</tr></thead>";

        people.forEach(person => peopleTable += personLine(person));

        document.getElementById("people").innerHTML = peopleTable
            + "</table>" +
            "<h1 style='color: green'>Passed people test</h1>";
    }
}
const personUrl = "http://" + window.location.hostname + "/person/"
fetch(personUrl)
    .then(response => response.json())
    .then(data => displayPeople(data));
