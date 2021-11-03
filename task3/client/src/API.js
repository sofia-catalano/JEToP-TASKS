/*
 * API calls
 */

async function showWeather(info) {
  try{
    const response = await fetch(`api/weather?city=${info.city}&date=${info.date}` );
    try{
      const weather = await response.json();
      if (response.ok) {
        return weather;
    } else {
        throw `Error in loading data`; 
      }
    }catch(err){
      throw `Cannot parse server response`; 
    }
  }catch(err){
    throw `Cannot comunicate with server`; 
  }
  
}




export default showWeather;