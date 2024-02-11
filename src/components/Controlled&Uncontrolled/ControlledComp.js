import React, { useState } from 'react'

const ControlledComp = () => {
    const[username, setUsername] = useState('')
    const inputHandler = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Name : ${username}`,)
    }
    return (
        <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "50%", margin: "auto" }}>
            <h2>Controlled Component</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>Name:</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <input type='text' name='username' value={username} onChange={inputHandler} />
                    <button style={{ width: "50%", margin: "auto", marginBottom:"20px" }} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ControlledComp;