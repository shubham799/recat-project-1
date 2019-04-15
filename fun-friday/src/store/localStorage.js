const STATE_KEY = '5+@+3'

export const saveState = (state)=>{
    try {
      //Saving rest of the state to session storage
      const serializedSessionState = JSON.stringify(state);
      sessionStorage.setItem(STATE_KEY, serializedSessionState)
    }catch(err){
      //Ignore write errors. else app will crash
    }
  }
  