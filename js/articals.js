
//_the minText on html line 73.
//==============================
	document.getElementById('minText').innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.<br><br>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br><br>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. mollit anim id est laborum.  ";

//_the minText on html line 73.
//==============================
	document.getElementById('teameText').innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. ";

//_
//=====================
	var //_artecl 1
		texT_1 = document.getElementById('serText1'),
		//_artecl 2
		texT_2 = document.getElementById('serText2'),
		//_artecl 3
		texT_3 = document.getElementById('serText3'),
		//_artecl 4
		texT_4 = document.getElementById('serText4'),
		//_artecl 5
		texT_5 = document.getElementById('serText5'),
		//_artecl 6
		texT_6 = document.getElementById('serText6');

	texT_1.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";
	texT_2.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";
	texT_3.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";
	texT_4.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";
	texT_5.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";
	texT_6.innerHTML = "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et";

//===================================

	const clanetsDetea = [
		{
			name: "Ahmad",
			jop: "engner",
			photo: "img/membars/ahmad.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			name: "Fattema",
			jop: "Designer",
			photo: "img/membars/fatema.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			name: "Jafar",
			jop: "php developar",
			photo: "img/membars/jafar.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			name: "Marya",
			jop: "desinger",
			photo: "img/membars/marya.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			name: "Omneia",
			jop: "Web Desinger",
			photo: "img/membars/omneia.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			name: "Osama",
			jop: "Teame Leder",
			photo: "img/membars/osama.jpg",
			messeg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
	];

	/*======================================
	//_blog Array
	======================================*/
	var theText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

	const blogArry = [
		{
			imnImg: "img/blogs/works-1.jpeg",
			coicial: ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"],
			minText: theText ,
			theLink: "Lorem ipsum dolor sit amet,"
		},
		{
			imnImg: "img/blogs/works-2.jpeg",
			coicial: ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"],
			minText: theText ,
			theLink: "Lorem ipsum dolor sit amet,"
		},
		{
			imnImg: "img/blogs/works-4.jpeg",
			coicial: ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"],
			minText: theText ,
			theLink: "Lorem ipsum dolor sit amet,"
		},
		{
			imnImg: "img/blogs/works-5.jpeg",
			coicial: ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"],
			minText: theText ,
			theLink: "Lorem ipsum dolor sit amet,"
		},
		{
			imnImg: "img/blogs/works-6.jpeg",
			coicial: ["fa-facebook", "fa-twitter", "fa-instagram", "fa-youtube"],
			minText: theText ,
			theLink: "Lorem ipsum dolor sit amet,"
		}
	];
	/*======================================
	//_blog Array
	======================================*/





	//_clanetsBox
	//=============================
	var bigBox = document.getElementById("clanetsBox");

	function clanetsTemplet(clanets) {
		return '\
			<div class="clanets">\
				<img src="'+ clanets.photo +'" alt="">\
				<h3 class="clanetName">'+ clanets.name +'</h3>\
				<span class="clantJop">'+ clanets.jop +'</span>\
				<q id="clanetSeys" class="clanetSeys">'+ clanets.messeg +'</q>\
			</div>\
		'
	};


	bigBox.innerHTML = '<div class="resumeButtons"><i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i></div>' + clanetsDetea.map(clanetsTemplet).join("");




	//_minBlogBox
	//===================================
	var blogBox = document.getElementById("bigBlogbox");

	function blogStructer(blogs) {
		return '\
			<div id="minBlogBox" class="box">\
				<img src="'+ blogs.imnImg +'" alt="">\
				<div class="blogPadding">\
					<div class="mySocialIcons">\
						<a href="#"><i class="fa fa-facebook"></i></a>\
						<a href="#"><i class="fa fa-twitter"></i></a>\
						<a href="#"><i class="fa fa-instagram"></i></a>\
						<a href="#"><i class="fa fa-youtube"></i></a>\
					<div class="clearFix"></div>\
					</div>\
					<p class="plogPara">'+ blogs.minText +'</p>\
					<a href="#" class="blogLink">read more</a>\
				</div>\
			</div>\
		'
	}

	blogBox.innerHTML = blogArry.map(blogStructer).join("")


























	//===
