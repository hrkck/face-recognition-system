import React, {Component} from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                {/* <Logo/>
                <ImageLink/>
                <FaceRecognition/> */}
            </div>
        );
    }
}

export default App;
