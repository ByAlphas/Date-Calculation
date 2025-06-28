function calculateDateDifference() {
    var startDate = new Date(document.getElementById("start-date").value);
    var endDate = document.getElementById("end-date").value;

    if (document.getElementById("start-date").value === "" || (endDate === "" && !document.getElementById("today-date").checked)) {
        document.getElementById("result").innerHTML = "Oops! Please enter valid dates.";
        return;
    }

    if (document.getElementById("today-date").checked) {
        endDate = new Date();
    } else {
        endDate = new Date(endDate);
    }

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        document.getElementById("result").innerHTML = "Invalid dates entered.";
        return;
    }

    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffYears = endDate.getFullYear() - startDate.getFullYear();
    var diffMonths = endDate.getMonth() - startDate.getMonth();
    var diffDays = endDate.getDate() - startDate.getDate();

    if (diffDays < 0) {
        var daysInLastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        diffMonths--;
        diffDays += daysInLastMonth;
    }
    if (diffMonths < 0) {
        diffYears--;
        diffMonths += 12;
    }

    var result = "";
    if (isNaN(diffYears) || isNaN(diffMonths) || isNaN(diffDays)) {
        result = "Invalid dates entered.";
    } else {
        result = "Time between dates: ";
        if (diffYears > 0) {
            result += diffYears + " year(s), ";
        }
        if (diffMonths > 0) {
            result += diffMonths + " month(s), ";
        }
        if (diffDays > 0) {
            result += diffDays + " day(s)";
        }
    }

    document.getElementById("result").innerHTML = result;
}

function toggleEndDate() {
    var todayCheckbox = document.getElementById("today-date");
    var endDateInput = document.getElementById("end-date");

    if (todayCheckbox.checked) {
        endDateInput.value = "";
        endDateInput.disabled = true;
    } else {
        endDateInput.disabled = false;
    }
}
