

//WRAPPED PROGRAM IN SET TIME INTERVAL TO UPDATE EVERY SEC or 1000ms
setInterval(function() {
	date = new Date();
	let currentDay = date.getDay();
	//Create Day Array to use the number from the currentDay
	let dayList = ['Sunday', 'Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
	//Update currentDay with day from array
	currentDay = dayList[currentDay];
	//Get month day number
	let currentNumber = date.getDate();
	//for 1st 2nd or 3rd
	let sufixNum;
	if (currentNumber === 1 || currentNumber === 21 || currentNumber === 31) {
		sufixNum = 'st';
	} else if (currentNumber === 2 || currentNumber === 22) {
		sufixNum = 'nd';
	} else if (currentNumber === 3 || currentNumber === 23) {
		sufixNum = 'rd';
	} else {
		sufixNum = 'th';
	}
	//Get current month as number 0-11
	let currentMonth = date.getMonth();
	//month array - 0-11
	let monthList = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	//update current month
	currentMonth = monthList[currentMonth];
	//Get Full Year
	let currentYear = date.getFullYear();

	//Set Hours, Mins, and Secs
	let time = new Date();
	let hours = date.getHours();
	let mins = date.getMinutes();
	let seconds = date.getSeconds();
	let days = date.getDay();
	let daySection;
	
	//Add 0 in front of  numbers less then 10 to get 8:08:03 instead of 8:1:5
	mins = (mins <= 9) ? '0' + mins : mins;
	seconds = (seconds <= 9) ? '0' + seconds : seconds;
	hours = (hours >= 13) ? hours - 12 : hours;

	daySection = (hours >= 11) ? 'AM' : 'PM';

	

	//Progress Bar 
	let daysBar = document.getElementById('days-progress');
	daysBar.style.width = (days / 0.07) + '%';

	let secsBar = document.getElementById('secs-progress');
	secsBar.style.width = (seconds / 0.6) + '%';

	let minsBar = document.getElementById('mins-progress');
	minsBar.style.width = (mins / 0.6) + '%';

	let hourProg = date.getHours();
	let hoursBar = document.getElementById('hrs-progress');
	hoursBar.style.width = (hourProg / 0.24) + '%';

	
	//prints to document every 10ms
	//Date
	document.querySelector('#dayOut').textContent =  currentDay + " " + currentMonth + " " + currentNumber + sufixNum  + ' ' + currentYear;
	//Time
	document.querySelector('#timeOut').textContent = hours + ':' + mins + ':' + seconds +  ' ' + daySection;

}, 1000); //END OF SET INTERVAL
















console.log('connected');