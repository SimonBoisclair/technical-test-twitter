export default (
  state = "",
  action
)=>{ 
  switch(action.type){ 
    case "SELECT_POLITICIAN_REQUESTED" : {  return "" }
    case "SELECT_POLITICIAN_SUCCEEDED" : {  return "" }
    case "SELECT_POLITICIAN_FAILED" : { return `Failed to get ${action.payload.name}'s tweets` }
    default : { return state }
  }
}