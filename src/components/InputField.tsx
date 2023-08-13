import React , { useRef }from "react";
import "./styles.css";

interface Props {
    todo: string, 
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleInput: (e: React.FormEvent) => void,
}

const InputField = ({todo, setTodo, handleInput}: Props) => {
    const inputref = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) =>{
            handleInput(e);
            inputref.current?.blur();
        }}>
            <input type="input" 
            ref={inputref}
            value={todo}
            onChange={(e)=> {setTodo(e.target.value)}}
            placeholder="Enter a task" 
            className="input_box"></input>
            <button type="submit" className="input_btn">GO</button>

        </form>
    );
};


export default InputField;