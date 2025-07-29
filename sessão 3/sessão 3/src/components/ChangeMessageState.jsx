const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi", "ola", "Oi", "tudo bem?"];
  return (
    <div>
      {messages.map((msg) => (
        <button onClick={() => handleMessage(msg)}>{msg}</button>
      ))}
    </div>
  )
}

export default ChangeMessageState
