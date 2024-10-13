let visor = document.getElementById("visor");

const adicionarNoVisor = visor => visor.value += value;

const calcular = () => 
    {try{visor.value = eval(visor.value)} catch(error){visor.value = "erro"};
}

const limpaVisor = () => visor.value = "";



