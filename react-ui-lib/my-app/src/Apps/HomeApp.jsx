import {SearchBar} from '../Components/SearchBar';
import '../App.css';
import Book from '../Components/Book';
import Layout from '../Components/Layout';
import { useState } from 'react';
import AddBookButton from '../Components/addBookButton';

export const booksData = [
{
    id: 1,
    image: "/literary/cien_años_de_soledad.jpg",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    description: 'La historia de la familia Buendía en el pueblo ficticio de Macondo, una obra maestra del realismo mágico que explora temas de soledad, amor y destino.',
    genre: 'novela'
  },
  {
    id: 2,
    image: "/literary/don_quijote_de_la_mancha.jpg",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    description: 'La historia de un hidalgo que pierde la cordura y decide convertirse en caballero andante, acompañado por su fiel escudero Sancho Panza.',
    genre: 'novela'
  },
  {
    id: 3,
    image: "/literary/orgullo_y_prejuicio.webp",
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    description: 'Una novela romántica que explora las complejidades del amor, la familia y las diferencias sociales en la Inglaterra del siglo XIX.',
    genre: 'novela'
  },
  {
    id: 4,
    image: "/literary/crimen_y_castigo.webp",
    title: "Crimen y castigo",
    author: "Fiódor Dostoyevski",
    description: 'La lucha moral de un joven estudiante que comete un asesinato y enfrenta las consecuencias psicológicas y éticas de su acto.',
    genre: 'novela'
  },
  {
    id: 5,
    image: "/literary/el_gran_gatsby.webp",
    title: "El gran Gatsby",
    author: "F. Scott Fitzgerald",
    description: 'Una crítica de la sociedad estadounidense de los años 20, centrada en la vida de Jay Gatsby y su obsesión por recuperar el amor perdido.',
    genre: 'novela'
  },
  {
    id: 6,
    image: "/literary/madame_bovary.webp",
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    description: 'La trágica historia de Emma Bovary, una mujer atrapada en un matrimonio aburrido que busca escapar a través de relaciones amorosas y el lujo.',
    genre: 'novela'
  },
  {
    id: 7,
    image: "/science_fiction/metro_2033.jpg",
    title: "Metro 2033",
    author: "Dmitry Glukhovsky",
    description: 'Año 2033, Moscú. Los supervivientes de la terrible guerra nuclear que ha devastado el mundo se han refugiado bajo tierra, en la red del metro. En cada una de las estaciones, convertidas en pequeñas ciudades Estado, sus habitantes se agrupan en torno a las más diversas ideologías, religiones o movidos por un único objetivo: impedir una invasión de las criaturas mutantes del exterior.',
    genre: 'cienciaficcion'
  },
  {
    id: 8,
    image: "/science_fiction/neuromante.webp",
    title: "Neuromante",
    author: "William Gibson",
    description: 'Un hacker caído en desgracia, Case, es contratado para realizar el mayor hackeo de su vida en un mundo dominado por la cibertecnología y las inteligencias artificiales.',
    genre: 'cienciaficcion'
  },
  {
    id: 9,
    image: "/science_fiction/la_vieja_guardia.webp",
    title: "CTS La vieja guardia",
    author: "John Scalzi",
    description: 'Tras haber vivido una vida relativamente tranquila en la Tierra y el mismo día en que cumplen sesenta y cinco años, 1.022 ancianos se enrolan en las Fuerzas de Defensa Coloniales, el ejército que lucha por la supervivencia de la humanidad en el universo. La vida en la Tierra transcurre sin demasiados contratiempos. Sin embargo, en el universo se está librando una guerra sin cuartel por los últimos planetas todavía deshabitados de la galaxia. El ejército que defiende la causa de la humanidad está formado por ancianos. Ancianos a los que se les da el cuerpo de un joven de veinte años.',
    genre: 'cienciaficcion'
  },
  {
    id: 10,
    image: "/science_fiction/1984.webp",
    title: "1984",
    author: "George Orwell",
    description: 'En un mundo distópico controlado por el Gran Hermano, Winston Smith lucha contra la opresión y la manipulación de la verdad en una sociedad totalitaria.',
    genre: 'cienciaficcion'
  },
  {
    id: 11,
    image: "/science_fiction/el_fin_de_la_infancia.webp",
    title: "El fin de la infancia",
    author: "Arthur C. Clarke",
    description: 'La llegada de los superseñores, una raza alienígena avanzada, transforma la Tierra en una utopía, pero a un costo inesperado para la humanidad.',
    genre: 'cienciaficcion'
  },
  {
    id: 12,
    image: "/science_fiction/la_guerra_de_los_mundos.webp",
    title: "La guerra de los mundos",
    author: "H. G. Wells",
    description: 'La invasión de la Tierra por marcianos con tecnología avanzada pone a prueba la supervivencia de la humanidad en esta obra clásica de cienciaficcion.',
    genre: 'cienciaficcion'
  },
  {
    id: 13,
    image: "/terror/soy_leyenda.jpg", 
    title: "Soy leyenda", 
    author: "Richard Matheson", 
    description:'Robert Neville es el único superviviente de una guerra bacteriológica que ha asolado el planeta y convertido al resto de la humanidad en vampiros. Su vida se ha reducido a asesinar el máximo número posible de estos seres sanguinarios durante el día, y a soportar su asedio cada noche. Para ellos, el auténtico monstruo es este hombre que lucha por subsistir en un nuevo orden establecido.',
    genre:'terror'
  },
  {
    id: 14,
    image: "/terror/luz_negra.webp", 
    title: "Luz negra", 
    author: "Pedro Berruezo",
    description:'Realidad y ficción se entremezclan, bañadas en una enigmática luz negra, tan oscura que parece un líquido espeso, en una trama que abarca varias eras clave de la humanidad. Todas ellas están marcadas por la amenaza de una entidad tan antigua como el propio universo, y que llega a nuestra realidad a través de objetos creados por los humanos. Uno de ellos es la novela Drácula, de Bram Stoker, cuya fama llega hasta la actualidad gracias a encarnaciones como la película muda Nosferatu, creada con intenciones ocultistas.',
    genre:'terror'
  },
  {
    id: 15,
    image: "/terror/la_caida_de_la_casa_usher.webp",
    title: "La caída de la Casa Usher",
    author: "Edgar Allan Poe, Ismael Pinteño Visuara",
    description:'«La caída de la Casa Usher» (1839) es uno de los relatos más reconocidos de Edgar Allan Poe, un clásico del género gótico que ha inspirado a autores como Shirley Jackson y Stephen King. La historia sigue al narrador mientras visita la mansión de su amigo Roderick Usher, un lugar deteriorado que refleja la ruina emocional y física de sus habitantes. La decadencia de la casa marcará también un final de pesadilla para el linaje de los dos hermanos.',
    genre:'terror'
  },
  {
    id: 16,
    image: "/terror/la_llamada_de_cthulhu.webp",
    title: "La llamada de Cthulhu",
    author: "François Baranger, H. P. Lovecraft",
    description:'Con esta novela, Lovecraft escribe en los años 20 del pasado siglo una de las historias más famosas de la literatura fantástica americana. Cthulhu, el Gran Antiguo que sueña y espera en el fondo de los negros abismos oceánicos, se convertirá por sí solo en el símbolo de todo el universo que crea el autor de Providence.',
    genre:'terror'
  },
  {
    id: 17,
    image: "/terror/la_chica_gris.webp",
    title: "La chica gris",
    author: "Antonio Runa",
    description:'Isaac Zarco, periodista e investigador de sucesos paranormales, no está pasando por su mejor momento. La muerte de su padre le ha afectado profundamente y ha acelerado su ruptura con Cosette, el amor de su vida. Fruto de esta profunda crisis duda de si sus habilidades psíquicas han sido reales alguna vez.',
    genre:'terror'
  },
  {
    id: 18,
    image: "/terror/ascension.webp",
    title: "Ascensión",
    author: "Nicholas Binge",
    description:'Una enorme montaña cubierta de nieve ha aparecido en el Océano Pacífico. Nadie sabe exactamente cuándo apareció, qué tan grande podría ser o cómo explicar su existencia. Cuando Harold Tunmore, un científico de fenómenos misteriosos, es contactado por una organización en la sombra para ayudar a investigar, no tiene idea de en qué se está metiendo mientras él y su equipo parten hacia la montaña.',
    genre:'terror'
  },
  {
    id: 19,
    image: "/wwII/el_dia_d_de_churchill.jpg",
    title: "El día D de Churchill",
    author: "Allen Packwood, Richard Dannatt",
    description:'Al amanecer del 6 de junio de 1944, el desembarco de la mayor armada de buques jamás reunida comenzó a las 6:30 horas. Durante la noche, los paracaidistas aseguraron el flanco oriental de la zona de desembarco, mientras que otras Divisiones Aerotransportadas estadounidenses protegían el flanco occidental para evitar contraataques alemanes. Cuando Gran Bretaña se despertó con la noticia del desembarco, la declaración formal ante la Cámara de los Comunes recayó sobre su Primer Ministro, Winston Churchill.',
    genre:'wwii'
  },
  {
    id: 20,
    image: "/wwII/los_niños_de_la_estrella_amarilla.gif",
    title: "Los niños de la estrella amarilla",
    author: "Mario Escobar",
    description:'La historia de un par de niños judíos que llegan a un pueblo mayormente protestante después de atravesar Francia por sí solos en busca de sus padres, en medio de una persecución contra judíos extranjeros la situación se complica cuando Francia Libre cae en manos de los nazis que intenta apresar a los niños.',
    genre:'wwii'
  },
  {
    id: 21,
    image: "/wwII/la_segunda_guerra_mundial.webp",
    title: "La wwii",
    author: "Gerhard L. Weinberg",
    description:'En este libro Weinberg nos ofrece una magistral visión de conjunto del conflicto, que arranca de sus causas el ascenso de Hitler, la crisis de Checoslovaquia, los planes de guerra de Japón…, sigue paso a paso la evolución de los combates, ilustrándolos con una excelente serie de mapas, y analiza, al propio tiempo, el impacto que la guerra tuvo en la vida cotidiana de la población civil.',
    genre:'wwii'
  },
  {
    id: 22,
    image: "/wwII/el_hombre_en_el_castillo.webp",
    title: "El hombre en el castillo",
    author: "Philip K. Dick",
    description:'Una de las distopías más emblemáticas de todos los tiempos: ¿Qué hubiese pasado si Hitler hubiera ganado la wwii?',
    genre:'wwii'
  },
  {
    id: 23,
    image: "/wwII/diario_de_ana_frank.webp",
    title: "El diario de Ana Frank",
    author: "Ana Frank",
    description:'Tras la invasión de Holanda, los Frank, comerciantes judíos alemanes, emigrados a Amsterdam en 1933, se ocultaron de la Gestapo en un altillo anexo al edificio donde estaban las oficinas en las que trabajaba el padre de Ana. En total, eran ocho personas y permanecieron ocultas allí desde junio de 1942 hasta agosto de 1944, fecha en que fueron detenidos y enviados a campos de concentración. En ese lugar y en las más precarias condiciones, Ana, una niña de trece años, escribió su Diario que constituyó un testimonio único en su género sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias de la propia Ana y sus acompañantes.',
    genre:'wwii'
  },
  {
    id: 24,
    image: "/wwII/la_guerra_no_tiene_rostro_de_mujer.webp",
    title: "La guerra no tiene rostro de mujer",
    author: "Svetlana Alexievich",
    description:'Casi un millón de mujeres combatieron en las filas del Ejército Rojo durante la wwii, pero su historia nunca ha sido contada. Este libro reúne los recuerdos de cientos de ellas, mujeres que fueron francotiradoras, condujeron tanques o trabajaron en hospitales de campaña. Su historia no es una historia de la guerra, ni de los combates, es la historia de hombres y mujeres en guerra.',
    genre:'wwii'
  }
];
function HomeApp() {

const [books, setBooks] = useState(booksData);
const addBook = (newBook) => {
  setBooks([...books, newBook]);
}

const uniqueGenre = new Set();
let filteredBooks = [];
const [search , setSearch ] = useState ("");
const searchTerm = search.trim().toLowerCase();

if (searchTerm === "") {
  for (const book of books) {
    if (!uniqueGenre.has(book.genre)) {
      uniqueGenre.add(book.genre);
      filteredBooks.push(book);
    }
  }
}else{
  filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.genre.toLowerCase().includes(search.toLowerCase())
  )
}
return (
  <>
  <Layout>
      <section className="home-section" style={{backgroundColor:'var(--primary-color)'}}>
      <div className='utilities'>
        <SearchBar search={search} onSetSearch={setSearch}/>
        <AddBookButton books={books} addBook={addBook}/>
      </div>

      {filteredBooks.length === 0 ? (
        <h2 style={{ marginTop: '2em', textAlign: 'center', paddingBottom: '2em'}}>
          No se encontró ningún libro para esa búsqueda</h2>
      ) : (<Book books={filteredBooks} md={2}/>
      )}
      </section>
    </Layout>
  </>
)}

export default HomeApp;
