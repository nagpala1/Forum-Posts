// function myFunction(times) {
// 	var i = 0;
// 	var val = 0.25;
// 	while (i < times){
// 		setTimeout(function() {
// 			loading(val);
// 		}, 500);
// 		i += 1;
// 		val += 0.25;
// 	}
// }



function fadeIn(item) {
	item.style.display = "inline";
	var op = 0.1;
	var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        item.style.opacity = op;
        op += 0.1;
    }, 20);
}

function flashImages(item){
	var counter = 0;
	var list = ['&copy 2017', "Anmol Nagpal", "nagpal. anmol96 @gmail. com"];
	var op = 0;
	var timer = setInterval(function() {
		item.style.opacity = op;
		op += 0.020;
		if (op > 0.9 && counter < list.length){
			counter += 1;
			if (counter == list.length){
				counter = 0;
			}
			item.innerHTML = list[counter];
			op = 0;
			item.style.opacity = 0;
		}
	}, 50);
}

function fadeInImages(item, opAmount, opIncrease, time) {
	var op = opIncrease;
	var timer = setInterval(function () {
        if (op >= opAmount){
            clearInterval(timer);
        }
        item.style.opacity = op;
        op += opIncrease;
    }, time);
}

function flashInImages(item) {
	var list = ["firstpic", "thirdpic", "fifthpic", "seventhpic", "ninthpic", "b1"];
	var list2 = ["secondpic", "fourthpic", "sixthpic", "eightpic", "tenthpic", "b2"];
	var counter = 0;
	var op = 0;
	var opIncrease = 0.1;
	var imagesUl = item.getElementsByTagName("ul")[0];
	var ulLis = imagesUl.getElementsByTagName("li")[0];
	var ulLis2 = imagesUl.getElementsByTagName("li")[1];
	var loaded = false;
	var timer = setInterval(function () {
        if (op > 0.9){
        	loaded = true;
        	opIncrease = 0.2;
        }
        if (op > 25){
        	counter += 1;
        	if (counter >= list.length){
        		counter = 0;
        	}
        	ulLis.setAttribute("class", list[counter]); 
        	ulLis2.setAttribute("class", list2[counter]);
        	op = 0.1;
        	loaded = false;
        }
        if (!loaded){
        	item.style.opacity = op;
        }
        op += opIncrease;
    }, 100);
}

function fadeOutImages(item, opAmount, opIncrease, time) {
	var op = opAmount;
	var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
        }
        item.style.opacity = op;
        op -= opIncrease;
    }, time);
}

function fadeOut(item) {
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0){
			clearInterval(timer);
			item.style.display = "none";
		}
        item.style.opacity = op;
        op -= 0.1;
    }, 20);
}

function moveTop(item, distance) {
	var top = 0;
	var timer = setInterval(function () {
        if (top >= distance){
            clearInterval(timer);
        }
        item.style.top = top + 'px';
        top += 10;
    }, 40);
}

function myTimer() {
	var myDate = setInterval(function(){
		var d = new Date();
		var t = d.toLocaleTimeString();
		document.getElementById("time").innerHTML = t;
		var div = document.getElementById("time");
		div.style.opacity = 1;
	}, 1000);
}

function loading() {
	window.onbeforeunload = function () {
  		window.scrollTo(0, 0);}
	var ul = document.getElementsByTagName("ul")[0];
	var div = document.getElementById("list1");
	var lis = ul.getElementsByTagName("li");
	var images = document.getElementById("images");
	var header = document.getElementsByTagName("header")[0];
	for (var i = 0; i < lis.length; i++){
		lis[i].setAttribute("class", "green");
	}
	lis[1].setAttribute("class", "orange");
	lis[2].setAttribute("class", "red");
	lis[3].setAttribute('class', 'purple');
	myTimer();
	fadeInImages(div, 0.8, 0.1, 100);
	fadeInImages(header, 0.8, 0.1, 100);
	moveTop(div, 100);
	// var body = document.body;
 //  	var height = Math.max(body.scrollHeight, body.offsetHeight);
 //  	var container = document.getElementById("container");
 //  	container.style.height = height + 'px';
  	var trans = document.getElementById("transparent");
  	var trans2 = document.getElementById("transparent2");
  	var blog = document.getElementById('blog');
  	fadeInImages(trans, 0.4, 0.1, 100);
  	fadeInImages(trans2, 0.4, 0.1, 100);
  	fadeInImages(blog, 1, 0.1, 100);

  	var flash = document.getElementById('flash');
  	var footer = flash.getElementsByTagName('h2')[0];
  	flashImages(footer);
  	flashInImages(images);
}

window.addEventListener("load", loading, false);


function Scroll(){
	var ul = document.getElementsByTagName("ul")[0];
	var ypos = window.pageYOffset;
	var images = document.getElementById("images");
	var about = document.getElementById("about");
	if (ypos > 105 && ul.style.opacity > 0.99) {
		fadeOut(ul);
	}
	if (ypos < 10 && ul.style.opacity < 0.1) {
		fadeIn(ul);
	}
	if (ypos > 500 && images.style.opacity > 0.79){
		fadeOutImages(images, 0.8, 0.1, 20);
	}
	if (ypos < 200 && images.style.opacity < 0.01){
		fadeInImages(images, 0.8, 0.1, 40);
	}
	if (ypos > 600 && about.style.opacity < 0.1){
		fadeInImages(about, 0.8, 0.1, 40);
	}
	if (ypos < 300 && about.style.opacity > 0.79){
		fadeOutImages(about, 0.8, 0.1, 20);
	}
}

window.addEventListener("scroll", Scroll, false);


