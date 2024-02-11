import React, { useState } from "react";

const Users = ({ users }) => {
    console.log("Child 2 rendered")
    return (
        users.map((user) => {
            return (
                <div style={{ marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <p>{user.first_name}</p>
                    <p>{user.email}</p>
                    <img style={{ width: "60px", height: "60px" }} key={user.id} src={user.avatar} alt="user-id" />
                </div>
            )
        })
    )
}

const UserMemo = React.memo(Users)
export default UserMemo;