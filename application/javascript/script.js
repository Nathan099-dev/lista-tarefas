function adicionarNovaTarefa(){
    //pega o valor digitado pelo usuário
    const campoTarefa = document.getElementById('inputTarefa');
    const task = campoTarefa.value;

    // verifica se o input da aplicação não está vazio
    if (campoTarefa == '') {
        let errorMessage = 'Digite uma tarefa para adicioná-la a sua lista';
        document.getElementById('resposta').innerText = errorMessage;

    }else{
        let successMessage = 'Tarefa adicionada com sucesso';
        document.getElementById('resposta').innerText = successMessage;
    }

    //Adiciona uma nova tarefa (li) dentro da lista (ul)
    let taskList = document.getElementById('listaTarefas');
    let newTask = document.createElement('li')
    newTask.textContent = task;
    taskList.appendChild(task)
}

