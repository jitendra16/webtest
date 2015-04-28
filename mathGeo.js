var ageDom = document.getElementById("age")
var ages = []
ages.push(calculateage(1992,2015))
ages.push(calculateage(1984,2015))
ages.push(calculateage(1999,2015))

function putItInThePage(entry) {
    var newcontent = document.createElement('div');
    newcontent.innerHTML = "<p>You are either "+entry[0]+" or "+entry[1]+"</p>"
    ageDom.appendChild(newcontent)
}

function putItInConsole(entry) {
    var txtResult = "You are either "+entry[0]+" or "+entry[1]+""
    console.log(txtResult)
}

ages.forEach(putItInThePage)
function getCircumference()
{
	var inputBox = document.getElementById("circumference-value").value;
	var intValue = parseFloat(inputBox);
	if (intValue == 'NaN'){
		return;
	}
	var circumference = 2 * (Math.PI * intValue);
	document.getElementById("circumference-result").innerHTML = "The circumference of a circle"+circumference;
	
}

function getArea()
{
	var inputBox = document.getElementById("area-value").value;
	var intValue = parseFloat(inputBox);
	if (intValue == 'NaN'){
		return;
	}
	var area = Math.PI*intValue*intValue;
	document.getElementById("area-result").innerHTML ="The area of a circle is " +area;
	//return area;
}
function getArea()
{
	var inputBox = document.getElementById("area-value").value;
	var intValue = parseFloat(inputBox);
	if (intValue == 'NaN'){
		return;
	}
	var area = Math.PI*intValue*intValue;
	document.getElementById("area-result").innerHTML ="The area of a circle is " +area;
	//return area;
}
function getcelsiustoFa()
{
	var inputBox = document.getElementById("celsiustoFa-value").value;
	var intValue = parseFloat(inputBox);
	if (intValue == 'NaN'){
		return;
	}
	var celsiustoFa = (intValue*9)/5+32;
	document.getElementById("celsiustoFa-result").innerHTML =inputBox+"°C is"+celsiustoFa;
	//return area;
}
function getfahrenheittoCe()
{
	var inputBox = document.getElementById("fahrenheittoCe-value").value;
	var intValue = parseFloat(inputBox);
	if (intValue == 'NaN'){
		return;
	}
	var fahrenheittoCe = (intValue*2)+30;
	document.getElementById("fahrenheittoCe-result").innerHTML = inputBox+"°f is"+fahrenheittoCe;
	//return area;
}
function calculateage(birth, current){
    var age = current - birth;
    return [age, age - 1];
}
function calculatesupply(age, numperday){
    var maxage=98;
    var totalneeded = (numperday*365)*(maxage-age);
    return [totalneeded, maxage];
}


