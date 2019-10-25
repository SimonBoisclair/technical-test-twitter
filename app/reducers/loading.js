export default (
  state = false,
  action
)=>{
  switch(action.type){ 
    case "SELECT_POLITICIAN_REQUESTED" : {  return true }
    case "SELECT_POLITICIAN_SUCCEEDED" : {  return false }
    case "SELECT_POLITICIAN_FAILED" : {  return false }
    default : { return state }
  }
}