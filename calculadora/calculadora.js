function calculadora() {
    const operacao = Number (prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - Subtração(-)\n 3 - multiplicação(*)\n 4 - divisãoReal (%)\n 5 - divisãoInteira (/)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!')
        calculadora();

    } else {

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2){
        alert('Erro - parâmetros inválidos!')
        calculadora();
    } else {function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function subtração() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function multiplicação() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function divisãoInteira() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação();
    }
    
    function divisãoReal() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperação();
    }
    
    function pontenciação() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a  ${n2} é igual a${resultado}`)
        novaOperação();
    }
    
    function novaOperação() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
        if (opcao == 1) {
            calculadora();
        } else (opcao) == 2;{
    
        alert('Até mais"') }
    }}
    
    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function subtração() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function multiplicação() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperação();
    }
    
    
    function divisãoInteira() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperação();
    }
    
    function divisãoReal() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperação();
    }
    
    function pontenciação() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a  ${n2} é igual a${resultado}`)
        novaOperação();
    }
    
    function novaOperação() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    
        if (opcao == 1) {
            calculadora();
        } else (opcao) == 2;{
    
        alert('Até mais"') }
    }
        
    
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtração();
    } else if (operacao == 3) {
        multiplicação();
    } else if (operacao == 4) {
        divisãoReal();
    } else if (operacao == 5) {
        divisãoInteira();
    } else if (operacao == 6) {
        pontenciação();
    }}

let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperação();
}


function subtração() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperação();
}


function multiplicação() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperação();
}


function divisãoInteira() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperação();
}

function divisãoReal() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
    novaOperação();
}

function pontenciação() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a  ${n2} é igual a${resultado}`)
    novaOperação();
}

function novaOperação() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

    if (opcao == 1) {
        calculadora();
    } else (opcao) == 2;{

    alert('Até mais"') }
}
    

if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtração();
} else if (operacao == 3) {
    multiplicação();
} else if (operacao == 4) {
    divisãoReal();
} else if (operacao == 5) {
    divisãoInteira();
} else if (operacao == 6) {
    pontenciação();
}

}

calculadora();