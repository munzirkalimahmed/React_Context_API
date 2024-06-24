import React, {useContext} from "react";
import { ConterContext } from "../context/counter";

const Counter = () => {
    const counterContext = useContext(ConterContext);
    return(
        <div>
            <button onClick={() => counterContext.setCount(counterContext.count+1)}>Increment</button>
            <button onClick={() => counterContext.setCount(counterContext.count-1)}>Decrement</button>
        </div>
    );
};

export default Counter;