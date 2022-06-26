import './style.scss';
import TextField from '@mui/material/TextField';

export default function SearchTodo({initialTodos, todo, setTodo}) {

    function searchHandler(e) {
        todo = initialTodos.filter((item) => item.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        setTodo([...todo]);
    }

    return(
        <div className='search-todo'>
             <TextField onInput={(e) => searchHandler(e)}
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
            />
        </div>
    )
}