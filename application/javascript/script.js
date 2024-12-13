function adicionarNovaTarefa(){
    let campoTarefa = document.getElementById('inputTarefa');
    let task = campoTarefa.value.trim();
    
    if (task == '') {
        campoTarefa.style.background = ' red';
        let errorMessage = 'Campo inválido 😢';
        document.getElementById('resposta').innerText = errorMessage;   

    }else{
        campoTarefa.style.border = ' 1px solid green';
        let successMessage = 'Tarefa adicionada com sucesso!😍';
        campoTarefa.value = "";

        document.getElementById('resposta').innerText = successMessage;
        let taskList = document.getElementById('divListaTarefas');
        taskList.classList.add('.active');

        let listaTarefas = document.getElementById('listatarefas');
        let listaItem = document.createElement('li');
        listaItem.textContent = task;
        listaTarefas.appendChild(listaItem);
    }  
    
}

