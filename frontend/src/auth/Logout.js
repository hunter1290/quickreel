import {GoogleLogout} from 'react-google-login'



// const clientId = process.env.GOOGLE_CLIENT_ID;
const clientId = '1083364487049-876c0qc973fc5a0pjatqnh59pc9nkf7s.apps.googleusercontent.com'

const onSuccess = (res)=>{
    console.log(res);
    localStorage.clear();
}
const onFailure =(res)=>{
    console.log(res);
}

const Logout = ()=>{
    return(
        <div id='LogoutButton'>

            <GoogleLogout
                      clientId={clientId}
                      buttonText={"Logout"}
                      onLogoutSuccess ={onSuccess}
            />
        </div>
    )
}

export default Logout;
