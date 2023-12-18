import {useState} from 'react';
import {Greet} from "../wailsjs/go/main/App";
import GlobalKeySetting from './components/GlobalKeySetting';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <div style={{
                height: '24px',
                background: '#999',
                // @ts-ignore
                '--wails-draggable': 'drag'
            }}></div>
            <GlobalKeySetting />
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button className="btn" onClick={greet}>Greet</button>
            </div>
        </div>
    )
}

export default App
