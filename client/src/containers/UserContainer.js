import React, { useState } from 'react';
import UserSelect from '../components/UserSelect';
import CountryContainer from './CountryContainer';

// user container renders first on web page - once user has been selected, the country container renders

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

    // a button renders with the countries list which allows the user to note that they have studied a country
    // this function adds the country to a list of countries studied in the user's account so they can track what they've studied
    const addCountryStudied = (country) => {
        selectedUser.countries_studied.push(country);
    }

    // this function does the opposite of the above - another button renders allowing the user to remove a country from their studied list
    const removeCountryStudied = (country) => {
        const array = []
        for (let item of selectedUser.countries_studied) {
            if (item.name.common !== country.name.common) {
                array.push(item)
            }
        }
        selectedUser.countries_studied = array;
    }
    
    return (
        <div>
            <UserSelect users={users} onUserSelect={onUserSelect} />
            {selectedUser ? <CountryContainer selectedUser={selectedUser} addCountryStudied={addCountryStudied} removeCountryStudied={removeCountryStudied} /> : null}
        </div>
    )
}

export default UserContainer;