import { useState } from "react";
import Axios from 'axios';

const Jokes = () => {

    const [joke, setJoke] = useState('');

    const generate = () => {
        Axios.get('https://v2.jokeapi.dev/joke/Any?type=single').then((response) => { setJoke(response.data.joke) }).catch((error) => { console.log(error); });
    }

    return (
        <div className="container p-3">
            <div className="card bg-success text-light text-center p-3">
                <h6 className="fw-bolder">Random Quotes Generator</h6>
                <button onClick={generate} className="btn btn-light text-success w-50 mx-auto my-3">Click to Generate Quote</button>
                <p>{joke}</p>
            </div>
        </div>
    );
}

export default Jokes;