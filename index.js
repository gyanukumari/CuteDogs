function giveMeMoreDogs(){
    document.getElementById("content").innerHTML="<p>Please wait while html is loading</p>";
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://dog.ceo/api/breeds/image/random');
    xhr.send();
    
    xhr.onload = function(){
        var response=xhr.response;
        response=JSON.parse(response);
        console.log(response.message);
        document.getElementById("content").innerHTML='<img src="'+response.message+'" alt="Demo">';
      };
    xhr.onerror = function(){
        alert("request failed");
    };
}    
    document.getElementById("myBtn").addEventListener(
    "click",giveMeMoreDogs);
    giveMeMoreDogs();
