export const Child = ({handleClick, message}) => {
    return (
        <div style={{border:"1px solid black", width: "50%", margin:"auto", padding:"20px 20px", textAlign:"center"}}>
            <h3>Child component {message} </h3>
            <button onClick={handleClick}>
                Click here
            </button>
        </div>
    )
}