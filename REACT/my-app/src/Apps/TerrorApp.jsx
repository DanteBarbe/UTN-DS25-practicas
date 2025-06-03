import './styles/styles.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { BookBlockGenre } from '../Components/BookBlockGenre'
import { Footer } from '../Components/Footer'


export const TerrorApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='genre-section'>
        {[
            {image: "/terror/soy_leyenda.jpg", title: "Soy leyenda", author: "Richard Matheson", description:'Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche. Para ellos, el auténtico monstruo es este hombre que lucha por subsistir en un nuevo orden establecido.' },
            {image: "/terror/luz_negra.webp", title: "Luz negra", author: "Pedro Berruezo", description:'Realidad y ficción se entremezclan, bañadas en una enigmática luz negra, tan oscura que parece un líquido espeso, en una trama que abarca varias eras clave de la humanidad. Todas ellas están marcadas por la amenaza de una entidad tan antigua como el propio universo, y que llega a nuestra realidad a través de objetos creados por los humanos. Uno de ellos es la novela Drácula, de Bram Stoker, cuya fama llega hasta la actualidad gracias a encarnaciones como la película muda Nosferatu, creada con intenciones ocultistas.' },
            {image: "/terror/la_caida_de_la_casa_usher.webp", title: "La caída de la Casa Usher", author: "Edgar Allan Poe, Ismael Pinteño Visuara", description:'«La caída de la Casa Usher» (1839) es uno de los relatos más reconocidos de Edgar Allan Poe, un clásico del género gótico que ha inspirado a autores como Shirley Jackson y Stephen King. La historia sigue al narrador mientras visita la mansión de su amigo Roderick Usher, un lugar deteriorado que refleja la ruina emocional y física de sus habitantes. La decadencia de la casa marcará también un final de pesadilla para el linaje de los dos hermanos.' },
            {image: "/terror/la_llamada_de_cthulhu.webp", title: "La llamada de Cthulhu", author: "François Baranger, H. P. Lovecraft", description:'Con esta novela, Lovecraft escribe en los años 20 del pasado siglo una de las historias más famosas de la literatura fantástica americana. Cthulhu, el Gran Antiguo que sueña y espera en el fondo de los negros abismos oceánicos, se convertirá por sí solo en el símbolo de todo el universo que crea el autor de Providence.' },
            {image: "/terror/la_chica_gris.webp", title: "La chica gris", author: "Antonio Runa", description:'Isaac Zarco, periodista e investigador de sucesos paranormales, no está pasando por su mejor momento. La muerte de su padre le ha afectado profundamente y ha acelerado su ruptura con Cosette, el amor de su vida. Fruto de esta profunda crisis duda de si sus habilidades psíquicas han sido reales alguna vez.' },
            {image: "/terror/ascension.webp", title: "Ascensión", author: "Nicholas Binge", description:'Una enorme montaña cubierta de nieve ha aparecido en el Océano Pacífico. Nadie sabe exactamente cuándo apareció, qué tan grande podría ser o cómo explicar su existencia. Cuando Harold Tunmore, un científico de fenómenos misteriosos, es contactado por una organización en la sombra para ayudar a investigar, no tiene idea de en qué se está metiendo mientras él y su equipo parten hacia la montaña.' }
        ].map((book, index) => (
            <BookBlockGenre key={index} {...book} />
        ))}
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default TerrorApp