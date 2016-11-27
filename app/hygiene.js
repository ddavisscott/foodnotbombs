var data = [
  { "id":"1",
    "Organization": "Homeless Services Center",
    "Address": "115A Coral St, Santa Cruz, CA 95060",
    "Notes": "Showers & toilets",
    "Hours": "10am-1:30pm",
    "Days": "Monday-Sunday",
    "Call": "(831) 458-6020"
  },
  { "id":"2",
    "Organization": "St. Francis Soup Kitchen",
    "Address": "205 Mora St, Santa Cruz, CA 95060",
    "Notes": "Showers & Toilet",
    "Hours": "11am-12:30pm",
    "Days": "Monday-Friday",
    "Call": "(831) 459-6712"
  },
  { "id":"3",
    "Organization": "Locust-Cedar Public Garage",
    "Address": "124 Locust St, Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "6am-10pm",
    "Days": "Monday-Sunday",
    "Call": ""
  },
  { "id":"4",
    "Organization": "Louden Nelson Community Center",
    "Address": "301 Center St, Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "9am-9:30pm",
    "Days": "Monday-Friday",
    "Call": ""
  },
  { "id":"5",
    "Organization": "Portapotty",
    "Address": "Corner of Front and Laurel St",
    "Notes": "Toilets",
    "Hours": "24/7",
    "Days": "Monday-Sunday",
    "Call": ""
  },
  {
	"id":"6",
	"Organization": "Portapotty",
    "Address": "Corner of Cedar and Lincoln St.",
    "Notes": "Toilets",
    "Hours": "10pm-6am",
    "Days": "Nightly",
    "Call": ""
  },
  {
	  "id":"7",
    "Organization": "Portapotty",
    "Address": "Parking lot Cedar/Center/Mission St.",
    "Notes": "Toilets",
    "Hours": "10pm-6am",
    "Days": "Nightly",
    "Call": ""
  },
  {
	  "id":"8",
    "Organization": "Santa Cruz City Hall",
    "Address": "809 Center St., Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "8am-5pm",
    "Days": "Monday-Friday",
    "Call": ""
  },
  {
	  "id":"9",
    "Organization": "Santa Cruz Public Library",
    "Address": "224 Church St., Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "10am-7pm",
    "Days": "Monday-Thursday",
    "Call": ""
  },
  {
	  "id":"10",
    "Organization": "Santa Cruz Public Library",
    "Address": "224 Church St., Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "10am-5pm",
    "Days": "Fiday-Saturday",
    "Call": ""
  },
  {
	  "id":"11",
    "Organization": "Santa Cruz Public Library",
    "Address": "224 Church St., Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "1pm-5pm",
    "Days": "Sunday",
    "Call": ""
  },
  {
	  "id":"12",
    "Organization": "Soquel-Front St. Public Garage",
    "Address": "601 Front St., Santa Cruz, CA 95060",
    "Notes": "Toilets",
    "Hours": "6am-10pm",
    "Days": "Monday-Sunday",
    "Call": ""
  }
];





function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="hygieneInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';

			output+='<h1>Hygiene</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "hygieneinnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';
           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Hours: '+val.Hours+'</h4>';
			output+='<h4>Days: '+val.Days+'</h4>';
			//output+='<h4>Phone Number: <a href="tel:'+val.Call+'">'+val.Call+'</h4></a>';
			output+='<h4>Description: '+val.Notes+'</h4>';
			//output+='<h4>Website: '+val.Website+'</h4><br/>';
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


function listElements_hygiene (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#hygieneInner'+val.id+'" data-transition="slideup">';
			output+='<h2>'+ val.Organization + '</h2>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#hygienectd').html(output);
	
	
	}

listElements_hygiene(data);






