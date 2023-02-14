//your code here
var btn = document.getElementById("swap");
var app = document.getElementById("app");

var isDark = false;
function swapTheme(){
	if(!isDark){
		app.style.backgroundColor = 'black' 
		isDark = true;
	}
	else {
		app.style.backgroundColor = 'white'
		isDark = false;
	}
}

btn.addEventListener('click',swapTheme)

