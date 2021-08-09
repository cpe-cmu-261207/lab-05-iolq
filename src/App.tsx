import React from 'react';
import { useState } from 'react'
import Footer from './footer';
import Header from './header';
import Todo from './todo';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [todo,setTodo] = useState("");

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    setTodo(ev.key)
    console.log(ev.key)
  }

  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
      <Header></Header>
      {/* <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by ...</span>
      </div>
        <span className='text-gray-400 italic my-2 text-xl'>by Wipawee Wattanatchariya 630612190</span>
      </div> */}

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>
      <Todo></Todo>
      {/* <div className='mx-auto max-w-4xl'> */}

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={onKeyDownCallback} ></input>
        {/* <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl' 
            type="text"
            onKeyDown={onKeyDownCallback}
            id='input'></input>
          <button className='border border-gray-400 w-8 font-bold'>+</button>
        </div>
        </div> */}

        {/* tasks section */}
        <div>
          {/* task example */}
        {/* <div> */}
          {/* Please convert this into a task component */}
          <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am a task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div>

          {/* another task example */}
          <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am another task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div>

        </div>
      </div>

        {/* </div> */}
      {/* </div> */}

      {/* footer section */}
      <p className='text-center text-gray-400'> ... </p>
      <Footer></Footer>
      {/* <p className='text-center text-gray-400'> copyright © 2021  </p> */}
    </div>
  );
}