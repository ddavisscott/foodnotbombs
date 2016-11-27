// JavaScript Document


var data = [
  {
    "id": "1",
    "Organization": "Alanon & Alateen",
    "Notes": "Fellowship of relatives and friends of alcoholics who share their experience, strength, and hope in order to solve their common problems. We believe alcoholism is a family illness and that changed attitudes can aid recovery.",
    "Address": "",
    "Call": "(831) 462-1818",
    "Hotline": "",
    "Website": "https://www.ncwsa.org/d23/"
  },
  {
    "id": "2",
    "Organization": "Alcoholics Anonymous",
    "Notes": "A group of alcoholics staying sober and helping other alcoholics to achieve sobriety. The only requirement for membership is a desire to stop drinking. There are no dues or fees for A.A. membership; we are self-supporting through our own contributions.",
    "Address": "",
    "Call": "(831) 475-5782",
    "Hotline": "(831) 475-5782",
    "Website": "http://aasantacruz.org/"
  },
  {
    "id": "3",
    "Organization": "Freedom Women''s Center",
    "Notes": "Faith-based, non-profit, residential discipleship and recovery program for women with life-controlling problems, including (but not limited to) drug and alcohol abuse",
    "Address": "109 Green Valley Rd, Freedom, CA 95019",
    "Call": "(831) 724-2898",
    "Hotline": "",
    "Website": "http://teenchallengemb.org/our-centers/freedom-womens-center/"
  },
  {
    "id": "4",
    "Organization": "Gemma",
    "Notes": "Community recovery services for drug/alchol recovery, sober living, domestic abuse, and many more programs",
    "Address": "716 Ocean Ave., Santa Cruz, CA 95060",
    "Call": "(831) 423-2003",
    "Hotline": "",
    "Website": "http://www.encompasscs.org/CRS"
  },
  {
    "id": "5",
    "Organization": "Janus of Santa Cruz",
    "Notes": "Treating dependency and addiction to alcohol, marijuana, meth, cocaine, barbiturates, codeine, heroin and other opiates, Oxycodone (Oxycontin) and Vicodin",
    "Address": "",
    "Call": "(866) 526-8772",
    "Hotline": "",
    "Website": "http://www.janussc.org/"
  },
  {
    "id": "6",
    "Organization": "Narcanon of Northern California",
    "Notes": "a holistic approach to drug and alcohol recovery in a beautiful, serene setting",
    "Address": "262 Gaffey Rd., Watsonville, CA 95076",
    "Call": "(831) 768-7190",
    "Hotline": "",
    "Website": "http://www.narconon.org/"
  },
  {
    "id": "7",
    "Organization": "Santa Cruz Narcotics Anonymous",
    "Notes": "Fellowship of men and women for whom drugs had become a major problem. We are recovering addicts who meet regularly to help each other stay clean. This is a program of complete abstinence from all drugs. There is only one requirement for membership, the desire to stop using.",
    "Address": "",
    "Call": "(831) 429-7436",
    "Hotline": "",
    "Website": "http://scnapi.org/"
  },
  {
    "id": "8",
    "Organization": "New Life Community Services of Santa Cruz",
    "Notes": "Residential, inpatient, outpatient, day treatment services for individuals and families supporting transition into society living meaningful, productive lives",
    "Address": "707 Fair Ave., Santa Cruz, CA 95060",
    "Call": "(888) 474-6758",
    "Hotline": "",
    "Website": "http://www.newlifesc.org/"
  },
  {
    "id": "9",
    "Organization": "Pajaro Men''s Center",
    "Notes": "Faith-based, non-profit, residential discipleship and recovery program for men with life-controlling problems, including (but not limited to) drug and alcohol abuse",
    "Address": "111 Railroad Ave, Royal Oaks, CA 95076",
    "Call": "(831) 722-2074",
    "Hotline": "",
    "Website": "http://teenchallengemb.org/our-centers/pajaro-mens-center/"
  },
  {
    "id": "10",
    "Organization": "Santa Cruz Residential Recovery",
    "Notes": "Comprehensive treatment program focuses on behavior and attitude change, learning responsibility and coping with the tasks of living drug and alcohol free everyday. No one refused services due to lack of ability to pay.",
    "Address": "125 Rigg St., Santa Cruz, CA 95060",
    "Call": "(831) 423-3890",
    "Hotline": "",
    "Website": "crs@encompasscs.org"
  },
  {
    "id": "11",
    "Organization": "The Camp Recovery Center",
    "Notes": "Delivering the highest quality of chemical dependency treatment to adolescents and adults, embracing the values of integrity, responsibility, respect, accountability, and excellence",
    "Address": "3192 Glen Canyon Rd., Scotts Valley, CA 95066",
    "Call": "(855) 598-3895",
    "Hotline": "",
    "Website": "http://www.camprecovery.com/"
  }
]



function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="recoveryInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>Recovery</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "recoveryinnerctd">';
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
 
 
  function listElements_recovery (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#recoveryInner'+val.id+'" data-transition="slideup">';
			output+='<h4>'+ val.Organization + '</h4>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		//console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#recoveryctd').html(output);
	
	
	}

listElements_recovery(data);

 
