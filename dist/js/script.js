// ++++++++++++++++++    world data +++++++++++++++++++++++++++++++++++++++++++++++++++++
$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=IN',
  dataType: 'json',
  success: function(data) {
    $(document).ready(function(){
   $(".total_india_case").text(data.countrydata[0].total_cases)
   $(".total_india_death").text(data.countrydata[0].total_deaths)
   $(".total_india_recovered").text(data.countrydata[0].total_recovered)
   $(".total_india_active").text(data.countrydata[0].total_active_cases)
   $(".total_india_active_today").text(data.countrydata[0].total_new_cases_today)
   $(".total_india_deaths_today").text(data.countrydata[0].total_new_deaths_today)
   $(".test").text((data.countrydata[0].total_new_deaths_today+data.countrydata[0].total_new_cases_today))
});
  }
});


// ++++++++++++++++++++++++++++ india   ++++++++++++++++++++++++++++++++++++++++++++++++++++++
$.ajax({
  url: 'https://api.rootnet.in/covid19-in/stats/latest',
  dataType: 'json',
  success: function(res) {
    $(document).ready(function(){
        $("#s").text(res.data.regional[0].loc);
        $("#s1").text(res.data.regional[0].totalConfirmed);
        $("#s2").text(res.data.regional[0].deaths);
        $("#s3").text(res.data.regional[0].discharged);
        $("#s4").text((res.data.regional[0].totalConfirmed-res.data.regional[0].deaths));
        $("#total").text(res.data.summary.total);
    });
}
});

// ++++++++++++++++++++++++++++++++++++ WORLD today data ++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("global_confirmed").innerHTML = myArr["cases"];
    document.getElementById("global_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("global_deaths").innerHTML = myArr["deaths"];
    document.getElementById("global_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("global_active").innerHTML =myArr["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("global_critical").innerHTML = myArr["critical"];
    document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/all?yesterday=flase", true);
xmlhttp.send();




// ++++++++++++++++++++++++++++++++++++ WORLD yesterday data ++++++++++++++++++++++++++++++++++++
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var myArry = JSON.parse(this.responseText);
    document.getElementById("yesterday_confirm").innerHTML = myArry["cases"];
    document.getElementById("yesterday_confirmcase").innerHTML = "+" + myArry["todayCases"] + "  yesterday";
    document.getElementById("yesterday_deaths").innerHTML = myArry["deaths"];
    document.getElementById("yesterday_deathcase").innerHTML = "+" + myArry["todayDeaths"] + "  yesterday";
    document.getElementById("yesterday_recovered").innerHTML = myArry["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("yesterday_active").innerHTML =myArry["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("yesterday_critical").innerHTML = myArry["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
 
  }
  };
  xhttp.open("GET", "https://disease.sh/v2/all?yesterday=true", true);
  xhttp.send();
}




// +++++++++++++++++   ASIA yesterday data +++++++++++++++++++++++++++++++++++++++++
function LoadAsia() {
  var asiaxhttp = new XMLHttpRequest();
  asiaxhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var asia = JSON.parse(this.responseText);
    document.getElementById("asia_yesterday_confirm").innerHTML = asia["cases"];
    document.getElementById("asia_yesterday_confirmcase").innerHTML = "+" + asia["todayCases"] + "  yesterday";
    document.getElementById("asia_yesterday_deaths").innerHTML = asia["deaths"];
    document.getElementById("asia_yesterday_deathcase").innerHTML = "+" + asia["todayDeaths"] + "  yesterday";
    document.getElementById("asia_yesterday_recovered").innerHTML = asia["recovered"] ;
    // document.getElementById("global_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("asia_yesterday_active").innerHTML =asia["active"];
    // document.getElementById("global_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("asia_yesterday_critical").innerHTML = asia["critical"];
    // document.getElementById("yesterday_tests").innerHTML = myArry["tests"];
     // document.getElementById("asia_yesterday_tests").innerHTML = asia["tests"];
 
  }
  };
  asiaxhttp.open("GET", "https://disease.sh/v2/continents/asia?yesterday=true", true);
  asiaxhttp.send();
}



// +++++++++++++++++++++++++ ASIA today ++++++++++++++++++++++++++++++++++++++++++++++++
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("asia_confirmed").innerHTML = myArr["cases"];
    document.getElementById("asia_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("asia_deaths").innerHTML = myArr["deaths"];
    document.getElementById("asia_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("asia_active").innerHTML =myArr["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("asia_critical").innerHTML = myArr["critical"];
    // document.getElementById("global_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/continents/asia?yesterday=false", true);
xmlhttp.send();






var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("india_confirmed").innerHTML = myArr["cases"];
    document.getElementById("india_confirmed_today").innerHTML = "+" + myArr["todayCases"] + "  today";
    document.getElementById("india_deaths").innerHTML = myArr["deaths"];
    document.getElementById("india_deaths_today").innerHTML = "+" + myArr["todayDeaths"] + "  today";
    document.getElementById("india_recovered").innerHTML = myArr["recovered"] ;
    // document.getElementById("asia_recover_today").innerHTML = "+" + myArr["todayRecover"] + "  today";
    document.getElementById("india_active").innerHTML =myArr["active"];
    // document.getElementById("asia_recovered").innerHTML = myArr["recovered"] ;
    document.getElementById("india_critical").innerHTML = myArr["critical"];
    document.getElementById("india_tests").innerHTML = myArr["tests"];
 
  }
};
xmlhttp.open("GET", "https://corona.lmao.ninja/v2/countries/india?yesterday=false", true);
xmlhttp.send();










// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myArr = JSON.parse(this.responseText);
//     document.getElementById("america").innerHTML = myArr["cases"];

//   }
// };
// xmlhttp.open("GET", "https://disease.sh/v2/continents/north%20america?yesterday=false", true);
// xmlhttp.send();








 








