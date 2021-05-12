window.addEventListener("load",showFunc);
        
function showFunc(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://www.hpb.health.gov.lk/api/get-current-statistical",false);
    ajax.send();
            
    var obj = JSON.parse(ajax.responseText);
    document.getElementById("time").innerHTML = "Last Updated"+" "+obj.data.update_date_time;
    document.getElementById("Confirmed").innerHTML = obj.data.local_new_cases;
    document.getElementById("total").innerHTML = obj.data.local_total_cases;
    document.getElementById("totaldeaths").innerHTML = obj.data.local_deaths;
    document.getElementById("newdeaths").innerHTML = obj.data.local_new_deaths;
    document.getElementById("newdeaths").innerHTML = obj.data.local_new_deaths;
    document.getElementById("recovered").innerHTML = obj.data.local_recovered;
}