import './style.scss';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Swal from 'sweetalert2';


export default function EditDelete({initialTodos, setTodo, index, setCount, count}) {


    function editHandler() {
        Swal.fire({
            title: 'Enter editing text',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            inputValue: initialTodos[index].title,
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then((result) => {
            if (result.isConfirmed && result.value) {
              initialTodos[index].title = result.value;
              setTodo([...initialTodos]);
            }
          })
    }


    function deleteHandler() {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                if(initialTodos[index].completed) {
                    initialTodos.splice(index, 1);
                    setCount(count - 1);
                } else {
                    initialTodos.splice(index, 1);
                }
               
                setTodo([...initialTodos]);
              Swal.fire(
                'Deleted!',
                'Your todo has been deleted.',
                'success'
              )
            }
          })  
    }
    return(
        <div>
            <IconButton variant='plain' sx={{
                    '&:active': {
                        color: 'red'
                    },
                    cursor: 'pointer'
                }} onClick={() => editHandler()}>
                <EditIcon />
            </IconButton>

            <IconButton variant='plain' sx={{
                    '&:active': {
                        color: 'red'
                    },
                    cursor: 'pointer'
                }} onClick={() => deleteHandler()}>
                <DeleteForeverIcon />
            </IconButton>
            
            
        </div>
    )
}