var data = [
  { "id": "1",
    "Organization": "Food Not Bombs",
    "Address": "850 Front St, Santa Cruz, CA 95060",
    "Days": "Saturday, Sunday",
    "Hours": "4:00 PM",
    "Notes": "Vegan. In front of downtown US Post Office ",
    "Call": " (831)-515-8234",
    "Website": "http://www.santacruz.foodnotbombs.net/"
  },
  
  
  
  { "id": "2",
    "Organization": "Calvary Episcopal Church",
    "Address": "532 Center St, Santa Cruz, CA 95060",
    "Days": "Monday",
    "Hours": "6:00 PM",
    "Notes": "The Red Church meeting hall",
    "Call": "(831) 423-8787",
    "Website": "http://www.episcopalchurch.org"
  },
  {  "id": "3",
    "Organization": "Elm Street Mission",
    "Address": "117 Elm St, Santa Cruz, CA 95060",
    "Days": "Wenesday",
    "Hours": "7:00 AM",
    "Notes": "Must be there by 7:15am",
    "Call": "(831) 420-0543",
    "Website": "http://www.elmstreetmission.org/"
  },
  {  "id": "4",
    "Organization": "Elm Street Mission",
    "Address": "117 Elm St, Santa Cruz, CA 95060",
    "Days": "Friday, Saturday, Sunday",
    "Hours": "4:30 PM",
    "Notes": "Must be there by 4:45pm",
    "Call": "(831) 420-0543",
    "Website": "http://www.elmstreetmission.org/"
  },
  {  "id": "5",
    "Organization": "Elm Street Mission",
    "Address": "117 Elm St, Santa Cruz, CA 95060",
    "Days": "Sunday",
    "Hours": "10:30 AM",
    "Notes": "Must be there by 11am",
    "Call": "(831) 420-0543",
    "Website": "http://www.elmstreetmission.org/"
  },
  {  "id": "6",
    "Organization": "Homeless Garden Project",
    "Address": "Schaffer Rd. at Delaware Ave. Santa Cruz, CA 95060",
    "Days": "Tuesday-Friday",
    "Hours": "10:00 AM",
    "Notes": "Work for lunch program. In the soil of our urban farm and garden, people find the tools they need to build a home in the world",
    "Call": "(831) 426.3609",
    "Website": "http://www.homelessgardenproject.org/"
  },
  {  "id":"7",
    "Organization": "New Life Center",
    "Address": "137 Dakota St, Santa Cruz, CA 95067",
    "Days": "Sunday",
    "Hours": "1:00 PM",
    "Notes": "Meal distributed in San Lorenzo Park",
    "Call": "(831) 427-1007",
    "Website": "http://www.newlifesc.org/"
  },
  {  "id": "8",
    "Organization": "Pajaro Valley Loaves and Fishes",
    "Address": "150 2nd St, Watsonville, CA 95076",
    "Days": "Monday-Friday",
    "Hours": "12:00 PM",
    "Notes": "Community supported food pantry and kitchen to feed, serve, and support the hungry people of our community, including working poor families, migrant farm workers, and elderly, disabled, and homeless individuals.",
    "Call": "(831) 722-4144",
    "Website": "http://pvloavesandfishes.org/"
  },
  {  "id": "9",
    "Organization": "Saint Francis Soup Kitchen",
    "Address": "205 Mora St, Santa Cruz, CA 95060",
    "Days": "Monday-Friday",
    "Hours": "12:00 PM",
    "Notes": "Daily lunch is served with special care to serve our guests with kindness. Clothing available.",
    "Call": "(831) 459-6712",
    "Website": "http://www.stfrancissoupkitchen.org/"
  },
  {  "id": "10",
    "Organization": "Santa Cruz Revival",
    "Address": "137 Dakota St, Santa Cruz, CA 95067",
    "Days": "Satuday",
    "Hours": "7:30 AM",
    "Notes": "Exept 1st Saturday of the month. Breakfast served in San Lorenzo Park",
    "Call": "(831) 465-0616",
    "Website": "http://www.santacruzrevival.com/"
  },
  {  "id": "11",
    "Organization": "Second Harvest Food Bank Hotline",
    "Address": "",
    "Days": "Monday- Friday",
    "Hours": "8:30am - 4:30 PM",
    "Notes": "Connect with over 200 food distribution centers in Santa Cruz County for immediate and/or long-term food assistance resources",
    "Call": "(831) 662-0991",
    "Website": "https://www.shfb.org/foodconnection"
  }
]




function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="mealsInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>Meals</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "mealsinnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';

           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Phone Number: <a href="tel:'+val.Call+'">'+val.Call+'</h4></a>';
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
 
 
  function listElements_meals (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#mealsInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#mealsctd').html(output);
	
	
	}

listElements_meals(data);

 

