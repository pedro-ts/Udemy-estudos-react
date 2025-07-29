import Styles from '../components/CarDetails.module.css';

const CarDetails = ({nome, cor}) => {
  return (
    <>
      <h1 className={Styles.titulo}>{nome}</h1>
      <p className={Styles.cor}>Cor: {cor}</p>
      <br/>
    </>
  )
}

export default CarDetails
