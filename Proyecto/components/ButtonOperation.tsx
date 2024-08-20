import React, { useState } from 'react'
import {Pressable} from 'react-native'
export const ButtonOperation = ({setContador, longPress, textButton, style}) => {

    interface ButtonProps {
        setContador: () => void;
        longPress?: () => void;
        textButton: string;
        style: object;
    }

  return (
    <div>
        <Pressable onPress={setContador} onLongPress={longPress} >
            <button style={style}>
                {textButton}
            </button>
        </Pressable>
    </div>
  )
}
