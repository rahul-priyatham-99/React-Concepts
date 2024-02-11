import { useState } from "react";

const Header = ({user, setUser}) => {
    const [flag, setFlag] = useState(false)
    const buttonHandler = () => {
        setFlag(!flag)
    }


    return (
        <div style={{display: "flex", border: "1px solid black" ,flexDirection: "row", justifyContent:"space-between"}}>
            <h2 style={{ marginLeft: "20px" }}>Header</h2>
            <div style={{display: "flex" ,flexDirection: "row", alignItems:"center"}}>
                <span style={{marginRight:"42px"}}><a href="/">Home</a></span>
                <span style={{ marginRight: "42px"}}><a href="/about">About</a></span>
                <span style={{ marginRight: "42px" }}><p>{flag ? 'Virat Kohli': user}</p></span>
                <button style={{ marginRight: "20px" }} onClick={buttonHandler}>Change the user</button>
            </div>
        </div>
    )
}

export default Header;