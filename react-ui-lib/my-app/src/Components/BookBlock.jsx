import './styles/bookblock.css'

export const BookBlock = (props) => {
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
