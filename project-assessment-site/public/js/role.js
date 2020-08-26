function roleLine(role) {
    return "<tr class='rolesRow'>" +
        `<td class='roleId'>${role.id}</td>` +
        `<td class='roleName'>${role.name}</td>` +
        "</tr>"
}

function displayRoles(roles) {
    if (roles.length === 3) {
        let rolesTable = "<table class='rolesTable'>" +
            "<thead><tr>" +
            "<td>#</td>" +
            "<td>Name</td>" +
            "</tr></thead>";

        roles.forEach(role => rolesTable += roleLine(role));

        document.getElementById("roles").innerHTML = rolesTable
            + "</table>" +
            "<h1 style='color: green'>Passed roles test</h1>";
    }
}

const rolesUrl = "http://" + window.location.hostname + "/role/"
fetch(rolesUrl)
    .then(response => response.json())
    .then(data => displayRoles(data));
