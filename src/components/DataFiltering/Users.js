import React, {useState, useEffect} from "react";
const Users = () => {
    const [users, setUsers] = useState([])
    const [fdata, setFdata] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([])
    const fetchUsers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
    }
    const searchHandler = (e) => {
        e.preventDefault();
        setFdata(e.target.value);
        const filteredData = users.filter((user) => {
            return user.name.includes(fdata);
        })
        setFilteredUsers(filteredData);
    }
    useEffect(() => {
        if(fdata.length === 0){
            fetchUsers();
        }
    }, [fdata])
    return (
        <div> 
            <h1>Users</h1>
            <input type="text" value={fdata} onChange={searchHandler}/>
            <br/>
            {filteredUsers.map((user) => {
                return (
                    <div style={{border: "1px solid black", width: "30%", margin: "auto", marginBottom: "10px"}} key={user?.id}>
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                        <p>Website: {user?.website}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Users;