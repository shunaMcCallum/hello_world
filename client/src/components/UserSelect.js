import React from 'react';
import { Link } from "react-router-dom";

const UserSelect = ({users, onUserSelect, logIn}) => {
  
    const handleSelect = (event) => {
        const chosenIndex = event.target.value;
        const chosenUser = users[chosenIndex];
        onUserSelect(chosenUser);
    }


    const userItems = users.map((user, index) => {
        return <option key={index} value={index}>{user.name}</option>
    })

    return (
        <div>
            <div className='select-button'>
                <select onChange={handleSelect}>
                    <option selected disabled value="">Select a User</option>
                    {userItems}
                </select>
            </div>
            <div>
                {/* <button onClick={logIn}>Log in</button> */}
                <Link to="/User">Log in</Link>
            </div>
        </div>
    )
}


export default UserSelect;