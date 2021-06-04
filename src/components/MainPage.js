import React from 'react';

const MainPage = props => {
    return (
        <div>
            {props.state &&
            <div>
                {props.state.counter}
            </div>}
            <button onClick={() => {
                props.addCounter(1);
            }
            }>
                Add 1
            </button>
        </div>

    );
}
export default MainPage;