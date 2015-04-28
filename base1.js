function calculatesupply(age, numperday){
    var maxage=98;
    var totalneeded = (numperday*365)*(maxage-age);
    return [totalneeded, maxage];
}
var totalneededDom = document.getElementById("totalneeded")
var totalneeds = []
totalneeds.push(calculatesupply(25,5))
totalneeds.push(calculatesupply(30,4))
totalneeds.push(calculatesupply(35,3))

function putItInThePage(entry) {
    var newcontent = document.createElement('div');
    newcontent.innerHTML = "<p>You will need "+entry[0]+" to last you until the oldripe age of "+entry[1]+"</p>"
    totalneededDom.appendChild(newcontent)
}

function putItInConsole(entry) {
    var txtResult = "You are either "+entry[0]+" or "+entry[1]+""
    console.log(txtResult)
}
totalneeds.forEach(putItInThePage)