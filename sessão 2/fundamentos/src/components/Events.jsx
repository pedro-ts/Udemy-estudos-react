const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou Evento");
  };

  const handleRender = () => {
    let paragrafo = document.getElementById("blabla");
    return paragrafo.innerText = "oláaaaaa"
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>

      <div>
        <button onClick={()=> console.log("clicou")}>Clique aqui 2!</button>
      </div>

      <div>
        <button onClick={handleRender}>Clique aqui para renderizar mais html</button>
        <p id="blabla">Ops</p>
      </div>
    </div>
  );
};

export default Events;
