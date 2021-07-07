import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StarterSelector from "./StarterSelector";
import StarterShower from "./StarterShower";

const starterList = ['Bulbasaur', 'Charmander', 'Squirtle']
const imgList = ['bulbasaur.png', 'charmander.png', 'squirtle.png']

function App() {
    const [value, setValue] = useState('0');

    function handleChange(event) {
        setValue(event.target.value);
    }


    return (
        <div className="App">
            <header className="App-header">
                <StarterSelector pokLst={starterList} pokFun={handleChange}/>
                <StarterShower pokImg={imgList} poknum={value}/>

            </header>
        </div>
    );

}

export default App;
