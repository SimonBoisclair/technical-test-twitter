const GET = async (payload) => {   
  let url = `http://localhost:4040/tweets?twitterAccountName=${payload.twitterAccountName}`
  let method = "GET" 
  let parsedResponse
  try{
    let response = await fetch(url,{method})
    let textResponse = await response.text() 
    parsedResponse = JSON.parse(textResponse)   
  }catch(err){   
    parsedResponse = {errors : ["Can't reach SIMON_API"]}
  } 
  console.log("Response from GET TWEET",parsedResponse)
  return parsedResponse
}

export default {
  GET,
} 