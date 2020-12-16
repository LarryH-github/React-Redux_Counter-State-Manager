import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //'useSelector' lets us select what to use from the store (passed down through 'Provider')
import { increment, decrement, signIn, signOut } from './actions'; //again, don't need to include 'index.js' in path as webpack automatically looks for it

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(increment(5))}>+5</button>

            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(decrement(5))}>-5</button>

            <h1>Sign In/Out</h1>
            <button onClick={() => dispatch(signIn())}>Sign In</button>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
            {isLogged ? <h3>This line is only visible when signed in.</h3> : ''}
        </div>
    );
}

export default App;
