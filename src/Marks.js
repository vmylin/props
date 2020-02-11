import React from "react";

export function Marks(props) {
    return (
        <div>
            <ul>
                <li>{props.physics}</li>
                <li>{props.chemistry}</li>
                <li>{props.biology}</li>
            </ul>
        </div>
    );
}

export default Marks;