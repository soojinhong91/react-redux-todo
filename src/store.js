import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

{
  /* ver2 

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

   
  //Using createReducer allows to mutate states. But in this case NEVER return. Return always creates new states 
  
  //Here, .push mutates state + .filter creates new state 
  
 
 const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

*/
}

{
  /* ver1
  const ADD = "ADD";
  const DELETE = "DELETE";

  const addToDo = (text) => {
    return {
      type: ADD,
      text,
    };
  };

  const deleteToDo = (id) => {
    return {
      type: DELETE,
      id: parseInt(id),
    };
  }; 

  const reducer = (state = [], action) => {
    switch (action.type) {
      case addToDo.type:
        return [{ text: action.payload, id: Date.now() }, ...state];
      case deleteToDo.type:
        return state.filter((toDo) => toDo.id !== action.payload);
      default:
        return state;
    }
  };
*/
}

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
