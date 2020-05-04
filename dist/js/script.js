
// unofficial data india 
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




$.ajax({
  url: 'https://api.covid19india.org/state_district_wise.json',
  dataType: 'json',
  success: function(res) {
    $(document).ready(function(){
        // $("#district").text([0].districtData[0].district);
        // $("#s1").text(res.data.regional[0].totalConfirmed);
        // $("#s2").text(res.data.regional[0].deaths);
        // $("#s3").text(res.data.regional[0].discharged);
        // $("#s4").text(res.data.regional[0].totalConfirmed -deaths-discharged);
        // console.log(res.Andaman and Nicobar Islands)
    });
}
});







$.ajax({
  url: 'https://corona.lmao.ninja/v2/all?yesterday=false',
  dataType: 'json',
  success: function(data) {
    $(document).ready(function(){
    // $(".world").text(cases)

   // $(".total_india_case").text(data.countrydata[0].total_cases)
   // $(".total_india_death").text(data.countrydata[0].total_deaths)
   // $(".total_india_recovered").text(data.countrydata[0].total_recovered)
   // $(".total_india_active").text(data.countrydata[0].total_active_cases)
   // $(".total_india_active_today").text(data.countrydata[0].total_new_cases_today)
   // $(".total_india_deaths_today").text(data.countrydata[0].total_new_deaths_today)
   // $(".test").text((data.countrydata[0].total_new_deaths_today+data.countrydata[0].total_new_cases_today))
});
  }
});







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










var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("america").innerHTML = myArr["cases"];

  }
};
xmlhttp.open("GET", "https://disease.sh/v2/continents/north%20america?yesterday=false", true);
xmlhttp.send();








 








