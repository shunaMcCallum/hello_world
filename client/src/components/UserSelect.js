// import React from 'react';


const UserSelect = ({users, onUserSelect}) => {
  
    const handleSelect = (event) => {
        const chosenIndex = event.target.value;
        const chosenUser = users[chosenIndex];
        onUserSelect(chosenUser);
    }

// const UserSelect = ({ users, onUserSelect }) => {

//     const handleSelect = (event) => {
//         const chosenIndex = event.target.value;
//         const chosenUser = users[chosenIndex];
//         onUserSelect(chosenUser);
//     }


//     const userItems = users.map((user, index) => {
//         return <option key={index} value={index}>{user.name}</option>
//     })


    return (
        <select onChange={handleSelect}>
            <option selected disabled value="">Select a User</option>
            {userItems}
        </select>
    )
}

//     return (
//         <>
//             <header>
//                 <h1 className="airways">
//                     Hello, World!
//                 </h1>
//             </header>

//             <div className='select-button'>
//                 <select onChange={handleSelect}>
//                     <option selected disabled value="">Select a User</option>
//                     {userItems}
//                 </select>
//             </div>

//         </>
//     )
// }


// export default UserSelect;