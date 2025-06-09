import { useState } from "react";
//리턴문에 태그를 작성시 jsx

//나만의 커스텀 훅
function useToggle(initialValue) {
    const [value, setValue] =useState(initialValue)

    const toggle = () => {
       setValue(!value) //true <=> false flase면 true이고 initialValue는 true
    }
    return [value, toggle]
}

export default useToggle;
