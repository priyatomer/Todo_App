import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo,removeTodo,deleteTodo} from './actions/index'
import {useSelector,useDispatch} from "react-redux"

function App() {

  const[inputData,setInputData]=useState('');
  const list=useSelector((state)=>state.todoReducers.list);
  const dispatch=useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <h1>Add your List Items</h1>

        <div className='addItems'>

          <input type="text" placeholder=" Add Items......" 
          value={inputData}
          onChange={(event)=>
           setInputData( event.target.value)
          }
          />
          <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData),
            setInputData(''))}></i>
        </div>

        <div className="showItems">
          {
            list.map((elem)=>{
              return(
                <div className="eachItems" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                <i className="fa fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                </div>
                  </div>
              )
            
            })
          }
        

        </div>

      </div>
    </div>
  );
}

export default App;
