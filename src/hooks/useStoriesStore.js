import{useSelector, useDispatch}from'react-redux'
import { deletestorie,addNewStorie } from '../store/stories/storiesCalendar';

const useStoriesStore=()=>{
    const dispatch = useDispatch();
    const{stories}=useSelector(state=>state.stories);

    const onDeleteStorie =(id)=>{
        dispatch(deletestorie(id))
    }
    const onAddNewStorie =(newStorie)=>{
        dispatch(addNewStorie(newStorie))
    }


    return{
        stories,
        onDeleteStorie,
        onAddNewStorie
    }
}
export default useStoriesStore;