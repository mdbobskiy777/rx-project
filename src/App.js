import MainPage from './components/MainPage';
import {getUsers} from "./store/store";

const App = props => {
    return (
        <div>
            <MainPage state={props.state} getUsers={props.getUsers}/>
        </div>
    );
}

export default App;
