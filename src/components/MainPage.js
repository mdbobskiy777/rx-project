import React from 'react';

const MainPage = props => {
    return (
        <div>
            {props.state && <div>{JSON.stringify(props.state.users)}</div>}
            {props.state && <div>{props.state.totalUsersCount}</div>}
            <div>
                <button onClick={()=>{props.getUsers(1, 20)}}>get users</button>
            </div>
        </div>

    );
};

export default MainPage;