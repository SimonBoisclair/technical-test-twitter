export default (
  state = "realDonaldTrump" ,
  action
)=>{
  switch(action.type){ 
    case "SELECT_POLITICIAN_SUCCEEDED" : {    
      return action.payload.twitterAccountName 
    } 
    case "SELECT_POLITICIAN_FAILED" : {    
      return action.payload.twitterAccountName 
    } 
    default : {
      return state
    }
  }
}