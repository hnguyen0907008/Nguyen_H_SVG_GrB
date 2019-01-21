(() => { 
	//things we work with
	//this is a 1 to 1 connection (select 1 elm)
	var badge = document.querySelector('badge');
	//what do we want it to do
	//this is a one to many selection
	var allTheBadges = document.querySelectorAll('.isabadge');

	//what we want it to do
	function logMyId(){
		//logMyId: function name
		//log some stuff to the dev tools
		console.log(this.id);
		//debugger; => function is fine
	}
	//how we want to do that => click
	//1 to 1 event handling
	badge.addEventListener("click", logMyId);

	allTheBadges.forEach(currentbadge => currentbadge.addEventListener('click', logMyId))

})();