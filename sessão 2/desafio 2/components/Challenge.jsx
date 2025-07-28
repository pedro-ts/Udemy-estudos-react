const Challenge = () => {
    let valor1 = 10;
    let valor2 = 20;
    const somar = () =>{
        let soma = valor1 + valor2;
        let resultado = document.getElementById("resultado");
        resultado.innerText = `A soma é ${soma}`;
    };
  return (
    <div>
        <p>Valor 1 é: {valor1}</p>
        <p>Valor 2 é: {valor2}</p>
        <button onClick={somar}>Somar</button>
        <p id='resultado'></p>
    </div>
  )
}

export default Challenge
