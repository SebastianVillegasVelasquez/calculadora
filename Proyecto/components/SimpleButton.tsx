import React from "react";

export const SimpleButton = ({changeFunction, textButton, style}) => {

    interface ButtonProps {
        changeFunction: () => void;
        textButton: string;
        style: object;
    }

    return (
        <div>
            <button
                onClick={() => {
                changeFunction(textButton)
            }} style={style}>
                {textButton}
            </button>
        </div>
)
}