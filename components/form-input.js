const Input = (props) => (
    <div className="input-wrapper">
        {/* <p>{props.label}</p> */}
        <input type={props.type} placeholder={props.placeholder} required/>

        <style jsx>{`
        div{
            margin: 10px;
        }

        input{
            width: 100%;
            height: 30px;
            box-sizing:border-box;
            padding: 10px 5px;
            align-self: center;
        }
		`}</style>
    </div>
);

export default Input;