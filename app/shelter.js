var i= 0;
var data = [
 {
	 "id":"1",
   "Organisation": "River Street Shelter",
   "Address": "115C Coral St, Santa Cruz, CA 95060",
   "Notes": "32-bed emergency shelter for homeless adult men and women",
   "Call": "831-459-6644",
   "Website": "http://www.encompasscs.org/community-support-services/river-street-emergency-shelter",
   
   
 },
 {
	"id":"2", 
   "Organisation": "Grace Harbor Womans Shelter",
   "Address": "111 Railroad Ave, Royal Oaks, CA 95076",
   "Notes": "Assist homeless women, children and families to obtain stable housing through temporary shelter and services. Emergency shelter, meals, clothing, showers",
   "Call": "831-498-0557",
   "Website": "http://teenchallengemb.org/our-centers/grace-harbor/",
   "Image": "http://teenchallengemb.org/2014/wp-content/uploads/2014/08/center-gh.jpg"
 },
 {
	 "id":"3",
   "Organisation": "Grace Harbor Mens Shelter",
   "Address": "111 Railroad Ave, Royal Oaks, CA 95076",
   "Notes": "Assist homeless men to obtain stable housing through temporary shelter and services. Emergency shelter, meals, clothing, showers",
   "Call": "831-498-0557",
   "Website": "http://teenchallengemb.org/our-centers/grace-harbor/",
   "Image": "http://teenchallengemb.org/2014/wp-content/uploads/2014/08/center-gh.jpg"
 },
 {
	"id":"4",
   "Organisation": "Pajaro Rescue Mission",
   "Address": "115 Brennan St., Watsonville, CA 95076",
   "Notes": "Transitional housing, emergency shelter, case management",
   "Call": "831-724-9576",
   "Website": "http://www.pvshelter.org/",
   "Image": "http://pvshelter.org/wp-content/uploads/2015/03/pv-logo.png"
 }
];
 
 
 
 
 
 
 
 
 
 
/* the folowing function generates the info pages for each shelter within the shelter.json file*/

 function innerpage (data){
	
	
		var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="ShelterInner'+val.id+'" data-position="fixed">';
			
			output+='<div data-role="header">';
		    output +='<img src="images/Banner.png" height="100%" width="100%"/>';

			output+='<h1>Shelter</h1>';
			output+='</div>';//end of header
			output+='<div data-role="content" id= "shelterinnerctd">';
			output+='<div style="width: 100%; height: 100%; position: relative;">';
           	output+='</div>';
			output+='<h2>'+val.Organisation+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Phone Number: '+val.Call+'</h4>';
			output+='<h4>Description: '+val.Notes+'</h4>';
			output+='<a href="'+val.Website+'" data-role="button"> Visit Website</a><br/>';
			output+='</a>';
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
			
			
	 });//go through eacn element
	 
	 
	 
	 
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
		
	
}
    
 innerpage (data);	
 
 
 
 
 function listElements_shelter (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#ShelterInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organisation + '</h4>';
			output+='<p>'+ val.Call + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#shelterctd').html(output);
	
	
	}

listElements_shelter(data);









 
