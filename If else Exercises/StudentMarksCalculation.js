var a;
var b;
var c;
var result = 0;
var avg = 0;

function Calculate() {
    a = parseInt(form1.txtNum1.value);
    b = parseInt(form1.txtNum2.value);
    c = parseInt(form1.txtNum3.value);
    result = a+b+c;
    avg = result/3;

    document.write("The total is :" + "<b>" + result + "<b>" + "<br/>");
    document.write("The Avg is :" + "<b>" + avg + "<b>" + "</br>");

    if(avg > 50) {
        document.write("The Grade is :" + "<b>" + "Pass" + "<b>");
    }
    else {
        document.write("The Grade is :" + "<b>" + "Fail" + "<b>")
    }
}