const baseurl = "https://new-bookstore-backend.herokuapp.com";

const headerconfig = { 
    headers: {  
    'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('token')
    }
}
function getService(urlPostfix, headerconfig) {   

    console.log(urlPostfix, headerconfig);
    return new Promise (function(resolve, reject) {
      var resolved = axios.get(baseurl+urlPostfix, headerconfig);
      resolve(resolved);
    })
  
  }

  function postService(urlPostfix, data, headerconfig) {   

    console.log(urlPostfix,data, headerconfig);
    return new Promise (function(resolve, reject) {
      var resolved = axios.post(baseurl+urlPostfix, data, headerconfig);
      resolve(resolved);
    })
  
  }
  function putService(urlPostfix, data, headerconfig) {   

    console.log(urlPostfix, data, headerconfig);
    return new Promise (function(resolve, reject) {
      var resolved = axios.put(baseurl+urlPostfix, data, headerconfig);
      resolve(resolved);
    })
  
  }
  
 
  
  function deleteService(urlPostfix, data, headerconfig) {   
  
    console.log(urlPostfix, data, headerconfig);
    return new Promise (function(resolve, reject) {
      data.headers = headerconfig.headers
      var resolved = axios.delete(baseurl+urlPostfix, data, headerconfig);
      resolve(resolved);
    })
  
  }