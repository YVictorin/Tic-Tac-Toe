import { useState } from "react"

export default function Sqaure() {
    const [value, setValue] = useState("");

    function handleClick() {
        setValue("X")
    }

    return (
        <button onClick={handleClick} className="square">{value}</button>
    )
}