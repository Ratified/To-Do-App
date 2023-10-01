const form = document.querySelector('.input-div');
const input = document.querySelector('#todo-input');
const submitBtn = document.querySelector('#addBtn');
const tasks = document.querySelector('.tasks');

console.log(form, input, submitBtn);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const toDos = document.createElement('div');
    toDos.classList.add('todos');
    toDos.innerHTML =  `<button class="todoBtn"></button><p>${inputValue}</p> <img src="./images/icon-cross.svg" class="del" alt="Delete" id="delete">`;
    tasks.insertBefore(toDos, tasks.firstChild);
    input.value = '';

    const deleteBtns = toDos.querySelectorAll('.del');
    const todoBtn = toDos.querySelector('.todoBtn');
    
    toDos.addEventListener('click', () => {
        toDos.classList.toggle('completed');
        todoBtn.classList.toggle('check');
    });

    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', (event) => {
            const parentTodo = event.target.closest('.todos');
            parentTodo.remove();
        });
    });
});
