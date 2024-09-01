import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="To Do Logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder="Adicionar nova tarefa" type="text" value={title} onChange={onChangeTitle}/>
                <button>
                    Criar Tarefa
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}