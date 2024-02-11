import React, { useRef } from 'react'

const UncontrolledComp = () => {
    const inputRef = useRef(null)
    console.log("inputRef:", inputRef)
    const submitHandler = () => {
        alert(`Name : ${inputRef.current.value}`)
    }

    return (
        <div style={{border:"1px solid black", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width:"50%", margin:"auto" }}>
            <h2>Uncontrolled Component</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>Name:</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <input type='text' name='username' ref={inputRef} />
                    <button style={{ width: "50%", margin: "auto", marginBottom: "20px" }} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UncontrolledComp;