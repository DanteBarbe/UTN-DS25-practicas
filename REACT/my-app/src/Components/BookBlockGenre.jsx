import './styles/bookblock.css'

export const BookBlockGenre = (props) => {
  return (
    <>
      <article>
        <h2>{props.title}</h2>
        <img src={props.image} width="150" height="200" />
        <h5>{props.author}</h5>
        <p>{props.description}</p>
      </article>
    </>
  )
}
