export default async (payload) => {   
  let url = `http://localhost:4040/tweets?twitterAccountName=${payload.twitterAccountName}`
  let method = "GET" 
  try{
    let response = await fetch(url,{method})
    let textResponse = await response.text() 
    let parsedResponse = JSON.parse(textResponse)  
    return parsedResponse 
  }catch(err){ 
    return {errors : ["Can't reach SIMON_API"]} 
  }
} 