import { GoogleLogin } from "@leecheuk/react-google-login";
import FacebookLogin from "react-facebook-login";
export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div className="m-20 relative text-left">
      <div className="font-bold text-2lx">Login</div>
      <div className="border-2 p-5 m-10 align-center justify-center">
        <form action="/loginpost" method="post">
          {/* <input
            type="text"
            className="p-2 border-2 m-2"
            required
            placeholder="Enter username"
          />

          <input
            type="password"
            className="p-2 border-2 m-2"
            required
            placeholder="Enter password"
          />
          <button type="submit" className="bg-pink-100 m-2 p-2 border-2">
            Login
          </button> */}
          <GoogleLogin
            clientId="219484422994-khojuhu2f32djd9svfn454t3krkcp0pg.apps.googleusercontent.com"
            buttonText="Login with Google"
            isSignedIn={true}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </form>
      </div>
    </div>
  );
}
