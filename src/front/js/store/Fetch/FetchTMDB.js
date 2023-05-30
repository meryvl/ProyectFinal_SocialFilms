
export const fetchTMDB=(url,state)=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=> {
        console.log(res.results)
        state(res.results)
    }).catch((err=> console.log(err)))

    
}



