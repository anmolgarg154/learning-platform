let obj = {
  total: 0,
  isLogin: 'N',   // NOT logged in by default
  isProfile: {}
};
export function AppReducer(state=obj,action) {
  if(action.type === 'setLogin'){
    return{...state, isLogin: action.value}
  }
   return state;
 
}


