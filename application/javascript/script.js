function adicionarNovaTarefa(){
    //pega o valor digitado pelo usuário
    const campoTarefa = document.getElementById('inputTarefa');
    const task = campoTarefa.value.trim();

    // verifica se o input da aplicação não está vazio
    if (task == '') {
        campoTarefa.style.background = ' red'
        let errorMessage = 'Campo inválido 😢';
        document.getElementById('resposta').innerText = errorMessage;



    }else{
        campoTarefa.style.borderColor = 'green'
        let successMessage = 'Tarefa adicionada com sucesso!😍';
        
        document.getElementById('resposta').innerText = successMessage;
    }

    //Adiciona uma nova tarefa (li) dentro da lista (ul)
    let taskList = document.getElementById('listaTarefas');
    let newTask = document.createElement('li')
    newTask.textContent = task;
    taskList.appendChild(task);
}

