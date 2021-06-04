import MainPage from './components/MainPage';

const App = props => {
    return (
        <div>
            {props.state &&
            <div>Count: {props.state.counter}</div>
            }
            <div>
                <MainPage state={props.state} addCounter={props.addCounter}/>
            </div>
        </div>
    );
}

export default App;
