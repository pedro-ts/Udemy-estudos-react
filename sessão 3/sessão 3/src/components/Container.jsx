const Container = ({children, myValue}) => {
  return (
    <div>
      {children}
      <p>Props: {myValue}</p>
    </div>
  )
}

export default Container
