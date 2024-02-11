import { Child } from "./Child";

export const Parent = () => {
    const handleClick =() => {
        console.log("function written in parent component")
    }
    return (
        <div>
            <h3 style={{textAlign: "center"}}>Parent component</h3>
            <Child message ="passed from parent" handleClick={handleClick}/>
        </div>
    )
}