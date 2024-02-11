import React, { PureComponent } from "react";

class UserCount extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            countValue: 10
        }
    }

    // shouldComponentUpdate(newProps, newState) {
    //     if (newState.countValue !== this.state.countValue){
    //         return true;
    //     } 
    //     return false;
    // }

    incrementUserCount = () => {
        this.setState((state) => ({ countValue: state.countValue + 1 }))
    }
    render() {
        console.log("child component renders")
        return (
            <div style={{textAlign:"center"}}>
                <h1>Regular class component</h1>
                {/* <div>We have fetched {this.state.countValue} users</div> */}
                <div>We have fetched {this.props.users.length} users</div>
                <button style={{marginTop: "10px"}} onClick={this.incrementUserCount}>Increment</button>
            </div>
        )
    }
}


export default UserCount;