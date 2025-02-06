import Sqaure from "./Sqaure"

export default function Board() {
    return (
        <div className="board">
        <div className="board-row">
            <Sqaure/>
            <Sqaure/>
            <Sqaure/>
        </div>

        <div className="board-row">
            <Sqaure/>
            <Sqaure/>
            <Sqaure/>
        </div>

        <div className="board-row">
            <Sqaure/>
            <Sqaure/>
            <Sqaure/>
        </div>
        </div>
    )
}