// JavaScript Document

// JavaScript Document
var data = [
  {
    "id": "1",
    "Organization": "Access Santa Cruz County Guide",
    "Notes": "Resources for people with special needs and physical challenges",
    "Website": "http://www.scaccessguide.com/social.htm",
    "Image": "http://www.scaccessguide.com/nav-images/header.jpg"
  },
  {
    "id": "2",
    "Organization": "Faith Community Resources Guide",
    "Notes": "for Homeless People and People in Need in Santa Cruz County",
    "Website": "http://afcsantacruz.org/resoguid.pdf",
    "Image": "http://afcsantacruz.org/images/logo2.jpg"
  },
  {
    "id": "3",
    "Organization": "Homeless Services Center Guide",
    "Notes": "Resources available to homeless and low-income individuals in the Santa Cruz and Monterey counties",
    "Website": "http://empowerment.scshelter.org/",
    "Image": "http://empowerment.scshelter.org/sites/default/files/HSC-color_logo_100.png"
  },
  {
    "id": 4,
    "Organization": "Housing Authority Resource Guide",
    "Notes": "List of schools, libraries and other resources in Santa Cruz County",
    "Website": "http://hacosantacruz.org/pdf/Landlords%20and%20Owner%20Forms/SC%20County%20Resource.pdf",
    "Image": "http://www.rentalhousingdeals.com/images/ha_images/416/416-logo.gif"
  },
  {
    "id": 5,
    "Organization": "Project Homeless Connect Resource Guide",
    "Notes": "Services available for homeless persons in the county",
    "Website": "http://www.phc-santacruz.org/information-for-homelessness/",
    "Image": "http://ih.constantcontact.com/fs158/1102955745694/img/25.gif?a=1112846627357"
  },
  {
    "id": 6,
    "Organization": "Santa Cruz Guia Gratis",
    "Notes": "In Spanish, a current list of resources for people living outside in Santa Cruz: meals, showers, toilets and support",
    "Website": "https://docs.google.com/document/d/1zFfrAd9m_zodTl7n4CrxgxhxFbz__RwuRXzwNja4J6g/edit?usp=sharing",
    "Image": ""
  },
  {
    "id": 7,
    "Organization": "Santa Cruz Free Guide",
    "Notes": "Current list of resources for people living outside in Santa Cruz: meals, showers, toilets and support",
    "Website": "https://docs.google.com/document/d/15sOPWmJLVxi0xlK6PIj1e5-pwCRaLGok8KpgXgNgV8A/edit?usp=sharing",
    "Image": ""
  },
  {
    "id": 8,
    "Organization": "Santa Cruz Public Community Information Database",
    "Notes": "A vast resource of information about resources in Santa Cruz County",
    "Website": "https://php.santacruzpl.org/cid/public/",
    "Image": ""
  },
  {
    "id": 9,
    "Organization": "Senior Network Services Resources Directory",
    "Notes": "Many resources for seniors",
    "Website": "http://www.seniornetworkservices.org/senior-resources-directory/",
    "Image": ""
  },
  {
    "id": 10,
    "Organization": "Student Support Services Resource Directory",
    "Notes": "Identify and connect with available community resources that exist to meet the needs of all children from birth to college.",
    "Website": "http://www.sccstudentresources.org/",
    "Image": ""
  },
  {
    "id": 11,
    "Organization": "Watsonville Guia Gratis",
    "Notes": "In Spanish, a current list of resources for people living outside in Watsonville: meals, showers, toilets and support",
    "Website": "https://docs.google.com/document/d/1hXFVNyrUVO5wL3WfQAtHfhZtiQOarni6lkVHmbvS6E4/edit?usp=sharing",
    "Image": ""
  },
  {
    "id": 12,
    "Organization": "Watsonville Free Guide",
    "Notes": "Current list of resources for people living outside in Watsonville: meals, showers, toilets and support",
    "Website": "https://docs.google.com/document/d/1PtOmX2znMleovEHQUBTkTUCaMExmIsHfhgPOy7-I1qU/edit?usp=sharing",
    "Image": ""
  }
]

function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="resourcesInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>resources</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "resourcesinnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';

           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			//output+='<h4>Address: <a href="#index">'+val.Address+'</h4></a>';
			//output+='<h4>Phone Number: <a href="tel:'+val.Phone+'">'+val.Phone+'</h4></a>';
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
 
 
  function listElements_resources (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#resourcesInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			//output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#resourcesctd').html(output);
	
	
	}

listElements_resources(data);

 
