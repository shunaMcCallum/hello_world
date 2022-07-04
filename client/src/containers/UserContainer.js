// import React, { useState, useEffect } from 'react';
// import UserSelect from '../components/UserSelect';
// import Home from './Home';
// import UserService from '../services/UserService';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // user container renders first on web page - once user has been selected, the country container renders

// const UserContainer = () => {

    // const [users, setUsers] = useState([]);
    // const [selectedUser, setSelectedUser] = useState(null);

    // fetches users from database
    // useEffect(() => {
    //     UserService.getUsers()
    //         .then((data) => {
    //             setUsers(data);
    //         })
    // }, []);

    // sets the selected user - links through to user select component
    // const onUserSelect = (user) => {
    //     setSelectedUser(user);
    // }


    // a button renders with the countries list which allows the user to note that they have studied a country
    // this function adds the country to a list of countries studied in the user's account so they can track what they've studied
//     const addCountryStudied = (country) => {
//         selectedUser.countries_studied.push(country)
//         UserService.putUser(selectedUser._id, { countries_studied: selectedUser.countries_studied });
//     }

//     // this function does the opposite of the above - another button renders allowing the user to remove a country from their studied list
//     const removeCountryStudied = (country) => {
//         const array = []
//         for (let item of selectedUser.countries_studied) {
//             if (item.name.common !== country.name.common) {
//                 array.push(item)
//             }
//         }
//         selectedUser.countries_studied = array;
//         UserService.putUser(selectedUser._id, { countries_studied: selectedUser.countries_studied });
//     }

//     return (
//         <div>
//             {selectedUser ? <Home selectedUser={selectedUser} addCountryStudied={addCountryStudied} removeCountryStudied={removeCountryStudied} /> : <UserSelect users={users} onUserSelect={onUserSelect} />}
//         </div>
//     )
// }

    // // a button renders with the countries list which allows the user to note that they have studied a country
    // // this function adds the country to a list of countries studied in the user's account so they can track what they've studied
    // const addCountryStudied = (country) => {
    //     selectedUser.countries_studied.push(country)
    //     UserService.putUser(selectedUser._id, { countries_studied: selectedUser.countries_studied })
    //     UserService.getUsers()
    //         .then((data) => {
    //             setUsers(data)
    //         });
    // }

    // // this function does the opposite of the above - another button renders allowing the user to remove a country from their studied list
    // const removeCountryStudied = (country) => {
    //     const array = []
    //     for (let item of selectedUser.countries_studied) {
    //         if (item.name.common !== country.name.common) {
    //             array.push(item)
    //         }
    //     }
    //     selectedUser.countries_studied = array;
    //     UserService.putUser(selectedUser._id, { countries_studied: selectedUser.countries_studied });
    //     UserService.getUsers()
    //         .then((data) => {
    //             setUsers(data)
    //         });
    // }

//     return (
//         <>

//             <div>
//                 < Home selectedUser={selectedUser} addCountryStudied={addCountryStudied} removeCountryStudied={removeCountryStudied} />} : <UserSelect users={users} onUserSelect={onUserSelect} />
//             </div>



//         </>
//     )
// }

// export default UserContainer;