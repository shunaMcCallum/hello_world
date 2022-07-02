import React, { useState } from 'react';
import UserSelect from '../components/UserSelect';
import CountryContainer from './CountryContainer';

const UserContainer = () => {
  
    const [users, setUsers] = useState([{
        name: "Shuna",
        email: "shuna.shuna@shuna.com",
        countries_studied: []
        },
        {
            name: "Sushi",
            email: "sushi@meow.com",
            countries_studied: []
        }]);
    
    const [selectedUser, setSelectedUser] = useState(null);
    
    
    const onUserSelect = (user) => {
        setSelectedUser(user);
    }

    const addCountryStudied = (country) => {
        selectedUser.countries_studied.push(country);
    }

    const removeCountryStudied = (country) => {
        const array = []
        for (let item of selectedUser.countries_studied) {
            if (item.name !== country.name.common) {
                array.push(item)
            }
        }
        selectedUser.countries_studied = array;
    }

    return (
        <div>
            <UserSelect users={users} onUserSelect={onUserSelect} />
            {selectedUser ? <CountryContainer selectedUser={selectedUser} addCountryStudied={addCountryStudied} /> : null}
        </div>
    )
}

export default UserContainer;