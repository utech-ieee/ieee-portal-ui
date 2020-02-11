import Auth from "../components/auth-interface";
import Input from "../components/form-input";

const Login = () => (
    <div>
      <Auth title="Login" buttonvalue="Login">
        <Input className="test" type="text" placeholder="Student ID#" label="Student Id"/>
        <Input type="password" placeholder="Password" label="Password"/>
      </Auth>



      <style jsx>{`
        div{
          width: 100vw;
          height: 100vh;
          background-color: #00629b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  		`}</style>
    </div>
);

export default Login;
