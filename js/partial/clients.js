// document.getElementById("myList").appendChild(node);
var clientsSlider = $(".clients-slider");

var clients = [
	{url: 'http://pitechnologies.net', image: 'images/client/pitechnologies.png'},
	{url: 'http://www.q8intouch.com', image: 'images/client/q8intouch.jpg'},
	{url: 'https://www.jeep.com.eg', image: 'images/client/jeep-7-logo-png-transparent.png'},
	{url: 'http://www.alqaseemgypsum.com.sa', image: 'images/client/alqaseem.png'},
	{url: 'https://www.avis.com.sa', image: 'images/client/avis.png'},
	{url: 'https://te.eg/wps/portal/te/Personal', image: 'images/client/tedata.jpg'},
	{url: 'http://rakam1.world', image: 'images/client/etisalat_sport_logo.png'},
	{url: 'http://www.eprisma.net', image: 'images/client/eprisma.png'},
]

clients.forEach(function(item, index){

	clientsSlider.append(`
		<div class="client-logo">
	        <a href="${item.url}" target="_blank">
	            <img src="${item.image}" alt="">
	        </a>
	    </div>
	`)

})
