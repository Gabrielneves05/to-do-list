import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="To Do Logo" />

            <form className={styles.newTaskForm}>
                <input placeholder="Adicionar nova tarefa" type="text"/>
                <button>
                    Criar Tarefa
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}