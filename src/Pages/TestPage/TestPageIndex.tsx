import React, { useState } from 'react'
import { LitTextInput } from '../../customComponents/Inputs/LitTextInput'

export const TestPageIndex = () => {

    const [val, setVal] =  useState("");

    const onChangeHandler = (val: any) => {
        setVal(val.target.value)
    }


  return (
    <>
    <LitTextInput value={val} onChangeHandler={onChangeHandler} />
    
    </>
  )
}
