export const getUser =(setState)=>{
    return(
		fetch('https://3001-meryvl-proyectfinalsoci-tq751cqfvcf.ws-eu97.gitpod.io/users', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(resp => {
              console.log(resp.ok); // will be true if the response is successfull
              return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            console.log(data); //this will print on the console the exact object received from the server
            setState(data);
            
          })
          .catch(error => {console.log(error);}));  //Error handling
      };