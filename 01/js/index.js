let visor = document.getElementById("visor");

function adicionarNoVisor(value){
    visor.value += value;
}

function calcular(){
    try{
    visor.value = eval(visor.value);
    } catch(error){
        visor.value = "Erro"
    }
}

function limpaVisor() {
    visor.value = "";

}