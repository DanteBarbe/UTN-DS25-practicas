import './styles/styles.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { BookBlockGenre } from '../Components/BookBlockGenre'
import { Footer } from '../Components/Footer'


export const LiteraryApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='genre-section'>
        {[
            {image: "/literary/cien_años_de_soledad.jpg", title: "Cien años de soledad", author: "Gabriel García Márquez", description:'La historia de la familia Buendía en el pueblo ficticio de Macondo, una obra maestra del realismo mágico que explora temas de soledad, amor y destino.' },
            {image: "/literary/don_quijote_de_la_mancha.jpg", title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", description:'La historia de un hidalgo que pierde la cordura y decide convertirse en caballero andante, acompañado por su fiel escudero Sancho Panza.' },
            {image: "/literary/orgullo_y_prejuicio.webp", title: "Orgullo y prejuicio", author: "Jane Austen", description:'Una novela romántica que explora las complejidades del amor, la familia y las diferencias sociales en la Inglaterra del siglo XIX.' },
            {image: "/literary/crimen_y_castigo.webp", title: "Crimen y castigo", author: "Fiódor Dostoyevski", description:'La lucha moral de un joven estudiante que comete un asesinato y enfrenta las consecuencias psicológicas y éticas de su acto.' },
            {image: "/literary/el_gran_gatsby.webp", title: "El gran Gatsby", author: "F. Scott Fitzgerald", description:'Una crítica de la sociedad estadounidense de los años 20, centrada en la vida de Jay Gatsby y su obsesión por recuperar el amor perdido.' },
            {image: "/literary/madame_bovary.webp", title: "Madame Bovary", author: "Gustave Flaubert", description:'La trágica historia de Emma Bovary, una mujer atrapada en un matrimonio aburrido que busca escapar a través de relaciones amorosas y el lujo.' },
        ].map((book, index) => (
            <BookBlockGenre key={index} {...book} />
        ))}
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default LiteraryApp