import Auth from "../components/auth-interface";
import Input from "../components/form-input";

const Register = () => (
    <div>
      <Auth title="Register" buttonvalue="Sign Up">
        <Input className="test" type="text" placeholder="Student ID#" label="Student Id"/>
        <Input type="text" placeholder="First Name" label="Password"/>
        <Input type="text" placeholder="Last Name" label="Password"/>
        <Input type="text" placeholder="Email" label="Password"/>
        <Input type="Password" placeholder="Password" label="Password"/>
        <Input type="password" placeholder=" Confirm Password" label="Password"/>
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

export default Register;
