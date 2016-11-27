// JavaScript Document
var data = [
  { "id":"1",
    "Organization": "Pets of the Homeless",
    "Notes": "Free emergency local veterinarian services, pet food and pet supplies. This national organization has special agreements with local veterinarians county-wide!",
    "Address": "",
    "Call": "775-841-7463",
    "Website": "petsofthehomeless.org"
  },
  { "id":"2",
    "Organization": "Salvation Army",
    "Notes": "Pet food, pet supplies, food, programs, disaster services",
    "Address": "721 Laurel St, Santa Cruz, CA 95060",
    "Call": "831-426-8365",
    "Website": "http://www.salvationarmyusa.org/usn/plugins/gdosCenterSearch?mode=query_2&lat=36.974&lng=-122.031&code=US&query=santa%20cruz%20ca"
  }
]

function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="petsInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='><h1>Pets</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "petsinnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';

           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Phone Number: <a href="tel:'+val.Call+'">'+val.Call+'</h4></a>';
			output+='<h4>Description: '+val.Notes+'</h4>';
			output+='<a href="'+val.Website+'" data-role="button"> Visit Website</a><br/>';
			
			
            


			
			output+='</div>'; // end of the content 
			
			output+='<div data-role="footer" data-position="fixed" >';
 			output+='<div data-role="navbar">';
    		output+='<ul>';
			output+=' <li><a href="#" data-rel="back" class="ui-btn-active" >Back</a></li>';
	        output+='<li><a href="#Home" >Home</a></li>';
    		output+='</ul>';
			output+='</div><!-- /navbar -->';
		    output+='</div>';

			
			output+='</div>'; // end of footer
			
			
			
			$(document.body).append(output);
			
			
			// Google map will be shown when #index page is triggered
$(document).on('pageshow', '#index', function (e, data) {

    setTimeout(function () {
        // This is the minimum zoom level that we'll allow
        var minZoomLevel = 12;

        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: minZoomLevel,
            center: new google.maps.LatLng(38.50, -90.50),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }, 1);
});
			
			
	 });//go through eacn element
		
	
}
    
 innerpage (data);	
 
 
  function listElements_pets (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#petsInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#petsctd').html(output);
	
	
	}

listElements_pets(data);

 
