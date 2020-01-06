import React, {useState} from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [onOff, setToggle] = useState(false);
    const [fruit, setFruit] = useState('banana');

    return (
        <>
            <div>
                <p>You clicked {count} times </p>
                <button onClick={() => setCount(count + 1)}>
                    click me
                </button>
            </div>
            <div>
                <p>You clicked {onOff ? 'on' : 'off'}</p>
                <button onClick={() => setToggle(!onOff)}>
                    click me
                </button>
            </div>
            <div>
                <p>You like {fruit}</p>
                <input type="text" onChange={(e) => setFruit(e.target.value)}/>
            </div>
        </>
    );
}

export default Example;