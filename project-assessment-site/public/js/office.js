function officeLine(office) {
    return "<tr class='officesRow'>" +
        `<td class='officeId'>${office.id}</td>` +
        `<td class='officeName'>${office.country}</td>` +
        `<td class='officeName'>${office.city}</td>` +
        "</tr>"
}

function displayOffices(offices) {
    if (offices.length === 4) {
        let officesTable = "<table class='officesTable'>" +
            "<thead><tr>" +
            "<td>#</td>" +
            "<td>Country</td>" +
            "<td>City</td>" +
            "</tr></thead>";

        offices.forEach(office => officesTable += officeLine(office));

        document.getElementById("offices").innerHTML = officesTable
            + "</table>" +
            "<h1 style='color: green'>Passed offices test</h1>";
    }
}

const officesUrl = "http://" + window.location.hostname + ":8084/office/"
fetch(officesUrl)
    .then(response => response.json())
    .then(data => displayOffices(data));

