const Sidebar = props => (
    <div>
        <h1>{props.title}</h1>
            <ul>
                {props.children}
            </ul> 

            <style jsx>{`
                div{
                    width: 20%;
                    height: 100vh;
                    background-color: #00629b ;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: left;
                }

                
                ul{
                    list-style:none;
                }
            `}</style>   
    </div>

)

export default Sidebar;