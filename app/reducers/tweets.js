export default (
  state = [],
  action
)=>{
  switch(action.type){
    case "SELECT_POLITICIAN_SUCCEEDED" : {   
      return action.payload.tweets
    }
    default : {
      return state
    }
  }
}