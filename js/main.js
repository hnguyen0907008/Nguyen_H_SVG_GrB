(() => {
	console.log('hello from js');
	let toggleButton = document.querySelector(".switch-text");
		myHeading = document.querySelector("h1");
		//svgImg2 works here, butdoesn't work with many elements
		//svgImg2= document.querySelector("#badge2"); 
		allSVG = document.querySelectorAll(".svg");

	function changeText(){
		myHeading.textContent = "what's up?";
	}

	function logSVG(){
		console.log(this.id); //this = current element, #id = change to other stuff
	}

	//function changeSize(){}

	toggleButton.addEventListener("click", changeText);
	//looping allSVG
	allSVG.forEach(item => item.addEventListener("click", logSVG));
	
})();