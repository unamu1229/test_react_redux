import React, {useState, useRef, useEffect} from 'react';
import {connect} from "react-redux";

function Test(props) {

    const [selected, setSelected] = useState('karakara');

    console.log(props.todos);
    const count = props.todos.length;

    const prevCountRef = useRef();
    useEffect(() => {
       prevCountRef.current = count;
    });
    if (prevCountRef.current !== count) {
        setSelected('karakara');
        prevCountRef.current = count;
    }

    return (
        <>
        <select name="hoge" value={selected} onChange={(e) => {setSelected(e.target.value)}}>
            <option value="karakara">karakara</option>
            <option value="nununu">nununu</option>
            <option value="rarara">rarara</option>
        </select>
        <h1>{props.todos.length}</h1>
        </>
    );

}

const mapStateToProps = state => {
    return {
        todos:state.todos.list
    }
};

export default connect(mapStateToProps)(Test);