

function makePromiseCall(methodtype, url, async = true, data , header){
  console.log(url);
  return new Promise(function(resolve,reject){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if(xhttp.status == 200 && xhttp.status < 300) {
        //console.log(xhttp.responseText);
        resolve(xhttp.responseText);
      }
      else if(xhttp.status >= 400){
        reject({
          status: xhttp.status,
          statusText: xhttp.statusText
        });
        console.log("xhttp failed");
      }
    };
     xhttp.open(methodtype,url, async);
    if (data) {
      console.log(JSON.stringify(data));
      console.log(data)
      xhttp.setRequestHeader("Content-Type", "application/json");
      if(header){
        console.log("hi");
        xhttp.setRequestHeader('x-access-token',localStorage.getItem("Accesstoken"));
      }
      xhttp.send(JSON.stringify(data));
  } else xhttp.send();
  //xhttp.open(methodtype,url, async);
 console.log(methodtype + " request sent to the server");
  });
}
