<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
    </head>
    <style>
    html {
    height: 100%;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

        #wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20rem;
}

        #result {
    font-size: 5em;
    text-align: center;
    transition-property: transform;
    transition-duration: 1s;
}
</style>
<body>
<div class="container">
    <h1>Days until birthday calculator</h1>
<p>Enter your birthdate to calculate how many days until your next birthday!</p>
<form class="row">
    <div class="col-sm-10">
    <input class="form-control" type="date" name="birthdate" placeholder="Birthdate, e.g. 1983-07-15"/>
    </div>
    <div class="col-sm-2">
    <input type="submit" class="btn btn-primary" value="Calculate"/>
    </div>
    </form>
    <div id="wrapper">
    <div id="result"></div>
    </div>
    </div>

    <script>
var result = document.getElementById("result");
var form = document.forms[0];

var rotation = 0;
form.addEventListener("submit", function(e) {
    var bd = new Date(form.birthdate.value);

    form.birthdate.value = "";

    var days = calculateDaysUntilNextBirthday(bd);
    result.innerHTML = days;

    e.preventDefault();     // Stop the form from being sent to the server (otherwise our scripts don't get the chance to run)

    // Add a nice effect
    rotation += 720;
    result.style.transform = "rotate(" + rotation + "deg)";
});

function calculateDaysUntilNextBirthday(bd) {
    var birthdateDayOfYear = dayOfYear(bd);
    var currentDayOfYear = dayOfYear(new Date());
    var days = 0;
    if(birthdateDayOfYear > currentDayOfYear) {
        console.log("Birthday this year still to come");
        days = birthdateDayOfYear - currentDayOfYear;
    } else {
        console.log("Birthday already passed");
        days = (isLeapYear(bd.getFullYear() + 1) ? 366 : 365) - currentDayOfYear + birthdateDayOfYear;
    }
    return days;
}

// Ripped from https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
function dayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date.getTime() - start.getTime();
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

// Ripped from https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
function isLeapYear(year)  {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
</script>

</body>
</html>