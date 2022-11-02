function load_data() {
			
    request = new XMLHttpRequest();
    // document.getElementById("ajax_str").innerHTML += "<br>Step 1";

    request.open("GET", "https://catfact.ninja/fact", true);

    // document.getElementById("ajax_str").innerHTML += "<br>Step 2";

    request.onreadystatechange = function() {
        // document.getElementById("ajax_str").innerHTML += "<br>current ready state: " + request.readyState;

        if (request.readyState == 4 && 
            request.status == 200) 
        {
            // bingo!  time to use the data
            console.log("data is ready"); 

            theData = request.responseText;
            console.log("what is the data" + theData);  
            document.getElementById("ajax_str").innerHTML += "<br>The response is: " + theData;
            
        }
        else if (request.readyState == 4 && request.status != 200) 
        {
        //    document.getElementById("ajax_str").innerHTML += "<br>Request failed!";
           console.log("request failed"); 
        }
    
    }
    console.log("sending request"); 
    // document.getElementById("ajax_str").innerHTML += 
    //         "<br>Sending request";
    request.send();
}

fetch("https://catfact.ninja/fact")
  .then(function (response) {
    return response.json(); 
  }).then(function (obj) {
    let json = JSON.stringify(obj); 
    console.log(typeof obj); 
    console.log(json); 
    let string = document.getElementById("fetch_str"); 
    string.innerHTML = "The response is: " + json; 
  }).catch(function (error) {
    console.error("Something went wrong somewhere"); 
    console.error(error); 
}); 

load_data(); 