window.addEventListener("load",showFunc);

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
        
function showFunc(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","https://www.hpb.health.gov.lk/api/get-current-statistical",false);
    ajax.send();
            
    var obj = JSON.parse(ajax.responseText);
    document.getElementById("time").innerHTML = "Last Updated"+" "+obj.data.update_date_time;
    // document.getElementById("Confirmed").innerHTML = obj.data.local_new_cases;
    // document.getElementById("total").innerHTML = obj.data.local_total_cases;
    // document.getElementById("totaldeaths").innerHTML = obj.data.local_deaths;
    // document.getElementById("newdeaths").innerHTML = obj.data.local_new_deaths;
    // document.getElementById("recovered").innerHTML = obj.data.local_recovered;

    const obj1 = document.getElementById("Confirmed");
    animateValue(obj1, 0,obj.data.local_new_cases, 2500);

    const obj2 = document.getElementById("total");
    animateValue(obj2, 0,obj.data.local_total_cases, 2500);

    const obj3 = document.getElementById("totaldeaths");
    animateValue(obj3, 0,obj.data.local_deaths, 2500);

    const obj4 = document.getElementById("newdeaths");
    animateValue(obj4, 0,obj.data.local_new_deaths, 2500);

    const obj5 = document.getElementById("recovered");
    animateValue(obj5, 0,obj.data.local_recovered, 2500);
}