import './style.scss';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxInput({initialTodos, count, setCount, todo, setTodo, index}) {

    function checked(value) {
        if(value) {
            todo[index].completed = true;
            setCount(count + 1);
        } else {
            todo[index].completed = false;
            setCount(count - 1);
        }
        setTodo([...todo]);
    }
    return(
        <Checkbox checked={todo[index].completed} onClick={(e) => checked(e.target.checked)}/>
    )
}