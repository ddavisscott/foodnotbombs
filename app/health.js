var data = [
 { "id":"1",
   "Organisation": "Santa Cruz County Behavioral Health",
   "Address": "1400 Emeline Ave # K, Santa Cruz, CA 95060",
   "Notes": "The Mental Health and Substance Abuse services division provides a wide range of prevention and treatment options for Santa Cruz County adults, children and their families.",
   "Call": "831-454-4170",
   "Website": "http://www.santacruzhealth.org/",
   
 },
 {
	 "id":"2",
   "Organisation": "Dientes Community Dental Clinic",
   "Address": "1830 Commercial Way, Santa Cruz, CA 95065",
   "Notes": "Affordable dental care accepting Medi-Cal, sliding scale fees for uninsured patients.",
   "Call": "831-464-5409",
   "Website": "http://dientes.org/contact/",
 },
 {
	 "id":"3",
   "Organisation": "Dientes Community Dental Clinic",
   "Address": "1430 Freedom Blvd. Suite C, Watsonville, CA 95076",
   "Notes": "Affordable dental care accepting Medi-Cal, sliding scale fees for uninsured patients.",
   "Call": "831-621-2560",
   "Website": "http://dientes.org/contact/",
 },
 {
	 "id":"4",
   "Organisation": "Dominican Mobile Wellness Clinic",
   "Address": "",
   "Notes": "High-quality, affordable health care for $15 per visit",
   "Call": "831-713-8751",
   "Website": "https://www.dignityhealth.org/dominican/about-us/community-benefits/mobile-wellness-clinic",
 },
 {
	 "id":"5",
   "Organisation": "Emergency Health Services",
   "Address": "1080 Emeline Avenue, Santa Cruz, CA 95060",
   "Notes": "Emergency services",
   "Call": "831-454-4120",
   "Website": "http://www.santacruzhealth.org/HSAHome/HSADivisions/PublicHealth/EmergencyMedicalServices.aspx",
 },
 {
	 "id":"6",
   "Organisation": "Health Care Benefit Information Santa Cruz",
   "Address": "",
   "Notes": "Apply and receive health benefits",
   "Call": "831-454-2515",
   "Website": "",
 },
 {
	 "id":"7",
   "Organisation": "Health Care Benefit Information Watsonville",
   "Address": "",
   "Notes": "Apply and receive health benefits",
   "Call": "831-763-8568",
   "Website": "",
 },
 {
	 "id":"8",
   "Organisation": "Homeless Persons Health Project",
   "Address": "115-A Coral St., Santa Cruz, CA 95060",
   "Notes": "Health services for homeless or marginally housed youth, adults, and families with children.",
   "Call": "831-454-2080",
   "Website": "http://www.santacruzhealth.org/HSAHome/HSADivisions/ClinicServices/HomelessPersonsHealthProject.aspx",
 },
 {
	 "id":"9",
   "Organisation": "Salud Para La Gente",
   "Address": "204 E Beach St, Watsonville, CA 95076",
   "Notes": "4 full-time clinics provide health services in Watsonville, Santa Cruz, and Seaside",
   "Call": "831)-728-0222",
   "Website": "http://splg.org/",
 },
 {
	 "id":"10",
   "Organisation": "Santa Cruz Emeline Health Center",
   "Address": "1080 Emeline Ave., Santa Cruz, CA 95060",
   "Notes": "Same day appointments on a limited basis for established clinic adult and pediatric patients with urgent medical problems",
   "Call": "831)-454-4100",
   "Website": "http://www.santacruzhealth.org/HSAHome/HSADivisions/ClinicServices/PrimaryCareandUrgentCareServices.aspx",
 },
 {
	 "id":"11",
   "Organisation": "Watsonville Crestview Health Center",
   "Address": "9 Crestview Dr, Watsonville, CA 95076",
   "Notes": "Emergency services",
   "Call": "831-763-8400",
   "Website": "http://www.santacruzhealth.org/HSAHome/HSAServicesA-Z.aspx#clinics",
 },
 {
	"id":"12",
   "Organisation": "Five Branches University ",
   "Address": "200 7 th Ave Santa Cruz Ca 95962",
   "Notes": "Traditional Chinese medicine (TCM) and integrative healthcare",
   "Call": "831-476-8211",
   "Website": "http://www.fivebranches.edu/health-centers/149",
 }
];



function innerpage (data){
	
	
			var output = "";
	$.each(data, function(key,val){
			
			output += '<div data-role="page"';
			output+= 'id="HealthInner'+val.id+'" data-position="fixed class ="innerpage">';
			
			output+='<div data-role="header">';
			 output +='<img src="images/Banner.png" height="100%" width="100%"/>';
			output+='<h1>Health</h1>';
			output+='</div>';// end of the header
			output+='<div data-role="content" id= "healthinnerctd">';
            output+='<div style="width: 100%; height: 100%; position: relative;">';
           
           	output+='</div>';
			output+='<h2>'+val.Organisation+'</h2>';
			output+='<h4>Address: '+val.Address+'</h4>';
			output+='<h4>Phone Number: <a href="tel:'+val.Call+'">'+val.Call+'</h4></a>';
			output+='<h4>Description: '+val.Notes+'</h4>';
			output+='<a href="'+val.Website+'" data-role="button"> Visit Website</a><br/>';
			output+='</div>'; // end of content 
			
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
            center: new google.maps.LatLng(36.99, -122.05),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }, 1);
});
			  
			
	 });//go through eacn element
		
	
}
    
 innerpage (data);	

 




function listElements_health (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#HealthInner'+val.id+'" data-transition="slideup">';
			output+='<h2>'+ val.Organisation + '</h2>';
			output+='<p>'+ val.Address + '</p>';

			
			output+='</li>';
		
	 });//go through eacn element
		output+='</ul>';
	$('#healthctd').html(output);
	
	
	}

listElements_health(data);

/*function listElements_support (data){
	var output ='<ul data-role ="listview" data-filter ="true">';
	
	$.each(data, function(key,val){
			output+='<li>'
			output+='<a href="#" data-transition="slideup">';
			output+='<h2>'+ val.firstName + '</h2>';
			output+='<p>'+ val.lastName + '</p>';

			
			output+='</li>';
		console.log (val.firstName);	
	 });//go through eacn element
		output+='</ul>';
	$('#supportctd').html(output);
	
	
	}

listElements_support(data);


*/



