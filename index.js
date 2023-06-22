const button = document.querySelector('.button-add-task') //botão
const input = document.querySelector('.input-task') // input
const listaCompleta = document.querySelector('.list-tasks');

//array de itens vazia
let minhaListaDeItens = []

//funcao para adicionar
function adicionarTarefa(){
    //o push guarda dentro da variavel
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });
    mostrarTarefas()
}

//funcao para mostrar
function mostrarTarefas(){
    //variavel de nova lista vazia
  let novaLi = ''

    //acessa por vez "forEach", (tarefa) é uma variavel no parametro => instancia
    minhaListaDeItens.forEach((item, posicao) => {
        //cria uma nova li em cima da que ja existe
        novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
        <span id="tarefa">${item.tarefa}</span>
        <div class="end">
        <button id="concluido" onclick="concluirTarefa(${posicao})"><i class="fi fi-br-check"></i></button>
        <button id="excluir" onclick="deletarItem(${posicao})"><i class="fi fi-rr-trash-xmark"></i></button>
        </div>
        </li>
        `
    })

    //lista completa com as li
    listaCompleta.innerHTML = novaLi;
}


function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
    mostrarTarefas()
}
function deletarItem(posicao) {
    // Mostra um alerta de confirmação
    var confirmacao = confirm("Tem certeza que deseja apagar o item?");

    // Verifica se o usuário confirmou a ação
    if (confirmacao) {
        // splice permite deletar um item do array
        minhaListaDeItens.splice(posicao, 1);
        mostrarTarefas();
    }
}

function temaClaro() {
    document.body.style.backgroundImage = "url('fundo.claro.png')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
  }
  
  function temaEscuro() {
    document.body.style.backgroundImage = "url('fundo.escuro.png')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
  }
  
//evento de quando clicar
button.addEventListener('click', adicionarTarefa)
