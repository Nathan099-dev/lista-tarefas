function adicionarNovaTarefa(){
    let taskField = document.getElementById('inputTarefa');
    let task = taskField.value;

    let message = document.getElementById('resposta');

    if (task == "") {
        alert('Adicione uma Tarefa');
        taskField.style.border = '1px solid red';
        document.textContent = message;
    }

    let lista = document.querySelector('ul');
    lista.createElement('li');


    taskField.value = ""

}

