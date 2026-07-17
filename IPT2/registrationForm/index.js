const form = document.querySelector("form");
const outputTable = document.querySelector("#outputTable tbody");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const personName = document.getElementById("personName").value;
    const personAge = document.getElementById("personAge").value;
    const personBirthday = document.getElementById("personBirthday").value;
    const personAddress = document.getElementById("personAddress").value;
    const personEmail = document.getElementById("personEmail").value;
    const personStatus = document.getElementById("personStatus").value;
    const personsGender = document.querySelector('input[name="personsGender"]:checked');

    if (!personsGender) {
        alert("Please select a gender!");
        return;
    }

    const genderValue = personsGender.value;
    const selectedInterests = Array.from(document.querySelectorAll('input[name="personsInterests"]:checked'))
        .map(input => input.value)
        .join(", ") || "None";

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${personName}</td>
        <td>${personAge}</td>
        <td>${personBirthday}</td>
        <td>${personAddress}</td>
        <td>${personEmail}</td>
        <td>${personStatus}</td>
        <td>${genderValue}</td>
        <td>${selectedInterests}</td>
        <td>
            <button type="button" class="deleteButton">Delete</button>
        </td>
    `;

    row.querySelector(".deleteButton").addEventListener("click", function(){
        row.remove();
    });
    
    outputTable.appendChild(row);

    form.reset();
});