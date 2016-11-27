// JavaScript Document
var data = [
  {
    "id": "1",
    "Organization": "Monarch Services",
    "Service": "Empower individuals, families and our community to take action against violence and abuse",
    "Address": "1509 Seabright Ave., Santa Cruz, CA 95062",
    "Phone": "(831) 425-4030",
    "Hotline": "(888) 900-4232",
    "Website": "http://www.monarchscc.org/"
  },
  {
    "id": "2",
    "Organization": "Monarch Services",
    "Service": "Empower individuals, families and our community to take action against violence and abuse",
    "Address": "233 East Lake Ave., Watsonville, CA 95076",
    "Phone": "(831) 722-4532",
    "Hotline": "(888) 900-4232",
    "Website": "http://www.monarchscc.org/"
  },
  {
    "id": "3",
    "Organization": "Planned Parenthood",
    "Service": "Family planning services, including STD testing and abortions",
    "Address": "398 South Green Valley Rd, Watsonville, CA 95076",
    "Phone": "(831) 724-7525",
    "Hotline": "",
    "Website": "https://www.plannedparenthood.org/health-center"
  },
  {
    "id": "4",
    "Organization": "Planned Parenthood",
    "Service": "Family planning services, including STD testing and abortions",
    "Address": "1119 Pacific Ave. #200, Santa Cruz, CA 95060",
    "Phone": "(831) 426-5550",
    "Hotline": "",
    "Website": "https://www.plannedparenthood.org/health-center"
  },
  {
    "id": "5",
    "Organization": "Santa Cruz Women's Health Center",
    "Service": "Improving the health of patients and the community, and advocate the feminist goals of social, political, and economic equality",
    "Address": "250 Locust St, Santa Cruz, CA 95060",
    "Phone": "(831) 427-3500",
    "Hotline": "",
    "Website": "https://www.schealthcenters.org/"
  },
  {
    "id": "6",
    "Organization": "Walnut Ave. Family & Women's Center",
    "Service": "Strengths-based, supportive programs in childcare, youth development, parenting, domestic violence awareness & prevention, and advocacy",
    "Address": "303 Walnut Ave, Santa Cruz, CA 95060",
    "Phone": "(831) 426-3062",
    "Hotline": "(866) 269-2559",
    "Website": "www.wawc.org"
  }
]


function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="womenInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>Women</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "womeninnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';

           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Phone Number: <a href="tel:'+val.Phone+'">'+val.Phone+'</h4></a>';
			output+='<h4>Description: '+val.Service+'</h4>';
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
 
 
  function listElements_women (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#womenInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#womenctd').html(output);
	
	
	}

listElements_women(data);

 
