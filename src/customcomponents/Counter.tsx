import React, {useState} from "react";

export default function Counter(props: React.HTMLAttributes<any>) {

    const [count, setCount] = useState<number>(0);

    function onPlusClick() {
        setCount((prevCount) => prevCount + 1);
    }

    function onMinusClick() {
        setCount(count - 1 );
    }

    return (
        <div className="container">
            <div className="m-4">
                <h4>Counter</h4>
                <div className="mt-2">
                    <input type="text" readOnly
                             placeholder="Enter count" name="name"
                             value={count}
                /></div>
                <div>
                    <div className="border m-2 d-inline-block px-2" onClick={() => onPlusClick()}><b>+</b></div>
                    <div className="border m-2 d-inline-block px-2" onClick={() => onMinusClick()}><b>-</b></div>
                </div>
            </div>
        </div>
    );
}