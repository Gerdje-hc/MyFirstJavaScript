document.write("Tafel van vermenigvuldiging");

document.write("<table>");

for (var d = 1; d <= 10; d++) {
    document.write("<tr>");

    for (var t = 1; t <= 10; t++) {
        document.write("<td>");
        document.write(d*t);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");




document.write("Fizz Buzz oefening");

for (var i = 1; i<100; i++) {

    if (i % 3 === 0) {
        document.write("Fizz");
    }
    if (i%5 === 0) {
        document.write("Buzz");
    }
    if(i % 3 !== 0 && i % 5 !== 0)
        document.write(i.toString());
    document.write("<br/>");




}









