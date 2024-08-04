let target = "Kathmandu"
const fetchedData = async()=>{
    try{
        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=ef644cdec39a48629e124631240408&q=${target}`
        );
        const data = await res.json();
        console.log(res);
    }catch(error){
        console.log(error);
    }
};

fetchedData();