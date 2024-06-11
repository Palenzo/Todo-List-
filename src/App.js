import React, { useState } from 'react';
import TodoList from './functionaltodo';
import ClassTodo from './classtodo';

function App() {
    const [list, setList] = useState([
        {id: 1, value : "Buy Milk"}, 
        {id: 2, value : "Buy Eggs"},
        {id: 3, value : "Buy Bread"} 
    ]);
    const addItem = (item) => {
         const trimmedItem = item.trim();
         if(trimmedItem === ''){
            return;
         }
        setList([...list, { id: Math.random(), value: item }]);
        
    };
    const deleteItem = (id) => {
        setList(list.filter(item => item.id !== id));
    };

    const editItem = (index, newValue) => {
        const updatedList = [...list];
        updatedList[index].value = newValue;
        setList(updatedList);
    };
    const handleEditItem = (index) => {
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            editItem(index, editedTodo);
        }
    };

    return (
        <div>
            <br />
            <div
                    style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        fontSize: "3rem", 
                        fontWeight: "bolder", 
                    }} 
                > 
                    FUNCTIONAL TODO LIST 
                </div>
                <hr />
            

            <TodoList list={list} addItem={addItem} deleteItem={deleteItem} editItem={handleEditItem} />
        
            <ClassTodo />
            
        </div>
    );
}

export default App;
