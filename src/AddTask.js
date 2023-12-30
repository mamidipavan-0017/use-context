import { useState} from "react";
import { useTasksDispatch } from './TasksContext';

export  const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useTasksDispatch()
    return(
        <>
            <input 
            placeholder="Enter the details"
            value={text}
            onChange={e => setText(e.target.value)} />
            <button onClick={() => {
                setText('')
                dispatch({
                    type: 'added',
                    id: nextId++,
                    text: text,
                })
            }}>
                Add Details
            </button>
        </>
    )
}

let nextId = 3;