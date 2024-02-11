import { add, edit, remove } from "./const"

const initialState={Todo:[
    {id:0,description:'Go_to_the_beach',isDone:true},
    {id:1,description:'Go_Shopping',isDone:true},
    {id:2,description:'Eat_Korean_food',isDone:false}
]}

export const TodoReducer=(state=initialState,action)=>{

switch (action.type) {
    case add:
        return {...state,Todo:[...state.Todo,{...action.payload,id:state.Todo.length}]}

     case remove:
        return {...state,Todo:state.Todo.filter((el)=>el.id!==action.payload)}

    case edit : 
    return   {...state,Todo: state.Todo.map((el) =>el.id === action.payload.id ? { ...el, description: action.payload.description } : el),};  

    default:
        return state
}
        


}
