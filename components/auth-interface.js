const Auth = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.children}

        <input type="submit" value={props.buttonvalue}/>
        <p className="descriptor">{props.message}</p>

        <style jsx>{`
		  div {
            width: 20%;
            background-color: white;
            border-radius: 5px;
            padding:20px;
            display: flex;
            flex-direction: column;
          }
          h1{
              color: #585555;
              padding: 10px;
              align-self: center;
          }

          input[type=submit]{
              background-color: #00629b;
              color: white;
              padding: 5px 10px 5px 10px;
              font-size: 1.2rem;
              border: none;
              align-self: center;
          }
		`}</style>

    </div>
);

export default Auth;