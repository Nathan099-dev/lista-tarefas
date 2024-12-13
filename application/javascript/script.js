function adicionarNovaTarefa(){
    const campoTarefa = document.getElementById('inputTarefa');
    const task = campoTarefa.value.trim();
    
    if (task == '') {
        campoTarefa.style.background = ' red';
        const errorMessage = 'Campo inválido 😢';
        document.getElementById('resposta').innerText = errorMessage;  
        errorMessage = "";

    }else{
        campoTarefa.style.border = ' 1px solid green';
        const successMessage = 'Tarefa adicionada com sucesso!😍';
        campoTarefa.value = "";

        document.getElementById('resposta').innerText = successMessage;

        let divListaTarefas = document.querySelector('.divListaTarefas');
        divListaTarefas.style.display = 'block';

        let listaTarefas = document.querySelector('#listaTarefas');
        let adicionarNovaTarefa = document.createElement('li');
        listaTarefas.style.display = 'block';
        listaTarefas.textContent = task;
        listaTarefas.appendChild(adicionarNovaTarefa);
    }  
    
}

