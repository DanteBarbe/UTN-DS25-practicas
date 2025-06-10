import './styles/styles.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import GridExample from '../Components/GridExample';
import { Footer } from '../Components/Footer'

const books = [
    {image: "/wwII/el_dia_d_de_churchill.jpg", title: "El día D de Churchill", author: "Allen Packwood, Richard Dannatt", description:'Al amanecer del 6 de junio de 1944, el desembarco de la mayor armada de buques jamás reunida comenzó a las 6:30 horas. Durante la noche, los paracaidistas aseguraron el flanco oriental de la zona de desembarco, mientras que otras Divisiones Aerotransportadas estadounidenses protegían el flanco occidental para evitar contraataques alemanes. Cuando Gran Bretaña se despertó con la noticia del desembarco, la declaración formal ante la Cámara de los Comunes recayó sobre su Primer Ministro, Winston Churchill.' },
    {image: "/wwII/los_niños_de_la_estrella_amarilla.gif", title: "Los niños de la estrella amarilla", author: "Mario Escobar", description:'La historia de un par de niños judíos que llegan a un pueblo mayormente protestante después de atravesar Francia por sí solos en busca de sus padres, en medio de una persecución contra judíos extranjeros la situación se complica cuando Francia Libre cae en manos de los nazis que intenta apresar a los niños.' },
    {image: "/wwII/la_segunda_guerra_mundial.webp", title: "La Segunda Guerra Mundial", author: "Gerhard L. Weinberg", description:'En este libro Weinberg nos ofrece una magistral visión de conjunto del conflicto, que arranca de sus causas el ascenso de Hitler, la crisis de Checoslovaquia, los planes de guerra de Japón…, sigue paso a paso la evolución de los combates, ilustrándolos con una excelente serie de mapas, y analiza, al propio tiempo, el impacto que la guerra tuvo en la vida cotidiana de la población civil.' },
    {image: "/wwII/el_hombre_en_el_castillo.webp", title: "El hombre en el castillo", author: "Philip K. Dick", description:'Una de las distopías más emblemáticas de todos los tiempos: ¿Qué hubiese pasado si Hitler hubiera ganado la Segunda Guerra Mundial?' },
    {image: "/wwII/diario_de_ana_frank.webp", title: "El diario de Ana Frank", author: "Ana Frank", description:'Tras la invasión de Holanda, los Frank, comerciantes judíos alemanes, emigrados a Amsterdam en 1933, se ocultaron de la Gestapo en un altillo anexo al edificio donde estaban las oficinas en las que trabajaba el padre de Ana. En total, eran ocho personas y permanecieron ocultas allí desde junio de 1942 hasta agosto de 1944, fecha en que fueron detenidos y enviados a campos de concentración. En ese lugar y en las más precarias condiciones, Ana, una niña de trece años, escribió su Diario que constituyó un testimonio único en su género sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias de la propia Ana y sus acompañantes.' },
    {image: "/wwII/la_guerra_no_tiene_rostro_de_mujer.webp", title: "La guerra no tiene rostro de mujer", author: "Svetlana Alexievich", description:'Casi un millón de mujeres combatieron en las filas del Ejército Rojo durante la segunda guerra mundial, pero su historia nunca ha sido contada. Este libro reúne los recuerdos de cientos de ellas, mujeres que fueron francotiradoras, condujeron tanques o trabajaron en hospitales de campaña. Su historia no es una historia de la guerra, ni de los combates, es la historia de hombres y mujeres en guerra.' }
]

export const WWIIApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='genre-section'>
      <GridExample books={books}/>
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default WWIIApp