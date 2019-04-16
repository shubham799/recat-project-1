const STATE_KEY = '5+@+3'

export const loadState = ()=>{
  try {

    /*
     *  Removing location data from local storage if available previously.
     *  Refer : https://bakeway.atlassian.net/browse/BWEB-835?focusedCommentId=11145&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-11145
     *
     *  // NOTE: This code for removing location key from local storage can be removed after
     *  after few months.
     */
    const serializedSessionState = sessionStorage.getItem(STATE_KEY);
    let stateObject

    if(serializedSessionState ){
      const jsonSession = JSON.parse(serializedSessionState);
      stateObject = {
        registerdUsers: jsonSession.registerdUsers,
      }
    }
    return stateObject;
  }catch (err){
    return undefined
  }
}


export const saveState = (state)=>{
    try {
      //Saving rest of the state to session storage
      const serializedSessionState = JSON.stringify(state);
      sessionStorage.setItem(STATE_KEY, serializedSessionState)
    }catch(err){
      //Ignore write errors. else app will crash
    }
  }
  