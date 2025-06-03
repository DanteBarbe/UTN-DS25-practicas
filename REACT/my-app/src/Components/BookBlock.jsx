import './styles/bookblock.css'

export const BookBlock = (props) => {
  // Si el componente es usado desde HomeApp, se espera que props.fromHomeApp sea true
  return (
    <>
      <article>
        <h2>{props.genre}</h2>
        <img src={props.image} width="150" height="200" />
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
        <p>{props.description}</p>
      </article>
    </>
  )
}
