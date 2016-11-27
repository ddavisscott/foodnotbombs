var i= 0;
var data = [
  {
    "id": 1,
    "Organization": "Beach Flats Community Center",
    "Address": "133 Leibrandt Ave.,Santa Cruz, CA 950"
  },
  {
    "id": 2,
    "Organization": "Caffee Pergolesi",
    "Address": "418 Cedar Street, Santa Cruz, CA 95060"
  },
  {
    "id": 3,
    "Organization": "Firefly Coffee House",
    "Address": "131 A Front St., Santa Cruz, CA 95060"
  },
  {
    "id": 4,
    "Organization": "Louden Nelson Community Center",
    "Address": "301 Center St., Santa Cruz, CA 95060"
  },
  {
    "id": 5,
    "Organization": "Aptos Branch Library",
    "Address": "7695 Soquel Ave., Aptos, CA 95003"
  },
  {
    "id": 6,
    "Organization": "Capitola Branch Library",
    "Address": "2005 Wharf Rd., Capitola, CA 95010"
  },
  {
    "id": 7,
    "Organization": "Santa Cruz Public Library",
    "Address": "224 Church St., Santa Cruz, CA 95060"
  },
  {
    "id": 8,
    "Organization": "Branciforte Branch Library",
    "Address": "230 Gault St., Santa Cruz, CA 95062"
  },
  {
    "id": 9,
    "Organization": "Garfield Park Branch Library",
    "Address": "705 Woodrow Ave., Santa Cruz, CA 95060"
  },
  {
    "id": 10,
    "Organization": "Live Oak Branch Library",
    "Address": "2380n Portolla Ave., Santa Cruz, CA 95060"
  },
  {
    "id": 11,
    "Organization": "Starbucks Mission St.",
    "Address": "2202 Mission St., Santa Cruz, CA 95060"
  },
  {
    "id": 12,
    "Organization": "Starbucks East Cliff",
    "Address": "21620 E Cliff Dr., Santa Cruz, CA 95062"
  },
  {
    "id": 13,
    "Organization": "Starbucks Pacific Ave.",
    "Address": "1335 Pacific Ave., Santa Cruz, CA 95060"
  },
  {
    "id": 14,
    "Organization": "99 Botles of Beer",
    "Address": "110 Walnut Ave, Santa Cruz, CA 95060"
  }
];
 
 
 
 
 
 
 
 
 
 
/* the folowing function generates the info pages for each internet within the internet.json file*/

 function innerpage (data){
	
	
		var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="internetInner'+val.id+'" data-position="fixed">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>internet</h1>';
			output+='</div>';//end of header
			output+='<div data-role="content" id= "internetinnerctd">';
			output+='<div style="width: 100%; height: 100%; position: relative;">';

           	output+='</div>';
			output+='<h2>'+val.Organization+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			


			
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
 
 
 
 
 function listElements_internet (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#internetInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#internetctd').html(output);
	
	
	}

listElements_internet(data);









 
