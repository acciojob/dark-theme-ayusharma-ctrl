//your code here
var btn = document.getElementById("swap");
var app = document.getElementById("app");

var isDark = false;
function swapTheme(){
	if(!isDark){
		app.style.backgroundColor = 'black' 
		isDark = true;
		app.className = 'night'
		btn.className  = 'button_night'
	}
	else {
		app.style.backgroundColor = 'white'
		isDark = false;
		app.className = 'day'
		btn.className  = 'button_day'
	}
}

btn.addEventListener('click',swapTheme)

