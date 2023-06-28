import React from 'react';

const UserCard = ({ userData }) => {
    return (
        <div>
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <button>Make Admin</button>
            {
                userData.admin ?
                    ""
                    :
                    <button>Delete User</button>
            }
        </div>
    );
};

export default UserCard;