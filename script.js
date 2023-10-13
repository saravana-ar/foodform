document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("userForm");
    const userInfoTable = document.getElementById("userInfoTable").getElementsByTagName('tbody')[0];

    userForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.getElementById("gender").value;
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;
        const foodChoices = [];
        const checkboxes = document.getElementsByName("foodChoice");
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                foodChoices.push(checkbox.value);
            }
        }
        const newRow = userInfoTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = gender;
        cell6.innerHTML = state;
        cell7.innerHTML = country;
        cell8.innerHTML = foodChoices.join(", ");
        userForm.reset();
    });
});
