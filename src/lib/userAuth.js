  async function userAuth() {
    console.log(myToken)
    const  myToken = localStorage.getItem(myToken)

    try {
       fetch(`https://strangers-things.herokuapp.com/api/2004-UNF-HY-WEB-PT/users/me`
      ,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': myToken
        }});
        userAuth(true);
       }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);

  } 