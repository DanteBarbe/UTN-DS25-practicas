import './styles/styles.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { BookBlockGenre } from '../Components/BookBlockGenre'
import { Footer } from '../Components/Footer'


export const ScienceFictionApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='genre-section'>
        {[
            {image: "/science_fiction/metro_2033.jpg", title: "Metro 2033", author: "Dmitry Glukhovsky", description:'Año 2033, Moscú. Los supervivientes de la terrible guerra nuclear que ha devastado el mundo se han refugiado bajo tierra, en la red del metro. En cada una de las estaciones, convertidas en pequeñas ciudades Estado, sus habitantes se agrupan en torno a las más diversas ideologías, religiones o movidos por un único objetivo: impedir una invasión de las criaturas mutantes del exterior.' },
            {image: "/science_fiction/neuromante.webp", title: "Neuromante", author: "William Gibson", description:'Un hacker caído en desgracia, Case, es contratado para realizar el mayor hackeo de su vida en un mundo dominado por la cibertecnología y las inteligencias artificiales.' },
            {image: "/science_fiction/la_vieja_guardia.webp", title: "CTS La vieja guardia", author: "John Scalzi", description:'Tras haber vivido una vida relativamente tranquila en la Tierra y el mismo día en que cumplen sesenta y cinco años, 1.022 ancianos se enrolan en las Fuerzas de Defensa Coloniales, el ejército que lucha por la supervivencia de la humanidad en el universo. La vida en la Tierra transcurre sin demasiados contratiempos. Sin embargo, en el universo se está librando una guerra sin cuartel por los últimos planetas todavía deshabitados de la galaxia. El ejército que defiende la causa de la humanidad está formado por ancianos. Ancianos a los que se les da el cuerpo de un joven de veinte años.' },
            {image: "/science_fiction/1984.webp", title: "1984", author: "George Orwell", description:'En un mundo distópico controlado por el Gran Hermano, Winston Smith lucha contra la opresión y la manipulación de la verdad en una sociedad totalitaria.' },
            {image: "/science_fiction/el_fin_de_la_infancia.webp", title: "El fin de la infancia", author: "Arthur C. Clarke", description:'La llegada de los superseñores, una raza alienígena avanzada, transforma la Tierra en una utopía, pero a un costo inesperado para la humanidad.' },
            {image: "/science_fiction/la_guerra_de_los_mundos.webp", title: "La guerra de los mundos", author: "H. G. Wells", description:'La invasión de la Tierra por marcianos con tecnología avanzada pone a prueba la supervivencia de la humanidad en esta obra clásica de ciencia ficción.' },
        ].map((book, index) => (
            <BookBlockGenre key={index} {...book} />
        ))}
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default ScienceFictionApp