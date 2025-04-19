function generateTable() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const output = document.getElementById("output");

    // Validate input
    if (
        isNaN(start) || isNaN(end) ||
        start < 2 || start > 10 ||
        end < 2 || end > 10
    ) {
        alert("Please enter numbers between 2 and 10");
        output.innerHTML = ""; // Clear table if any
        return;
    }

    // Create table
    let tableHTML = "<table>";
    for (let i = 1; i <= start; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= end; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    output.innerHTML = tableHTML;
}
