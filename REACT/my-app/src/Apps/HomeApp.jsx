import '../App.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { BookBlock } from '../Components/BookBlock'
import { Footer } from '../Components/Footer'

  function HomeApp() {
    const handleBookClick = (genre) => {
      switch (genre) {
        case "Terror":
          window.location.href = "/terror";
          break;
        case "Ciencia Ficción":
          window.location.href = "/science-fiction";
          break;
        case "Novela Literaria":
          window.location.href = "/literary";
          break;
        case "Segunda Guerra Mundial":
          window.location.href = "/wwII";
          break;
        default:
          break;
      }
    };

    return (
      <>
        <Header/>
        <main>
          <Menu/>
          <section className='home-section'>
            {[
              { genre: "Terror", image: "/terror/soy_leyenda.jpg", title: "Soy leyenda", author: "Richard Matheson" },
              { genre: "Ciencia Ficción", image: "/science_fiction/metro_2033.jpg", title: "Metro 2033", author: "Dmitry Glukhovsky" },
              { genre: "Novela Literaria", image: "/literary/cien_años_de_soledad.jpg", title: "Cien años de soledad", author: "Gabriel García Marquez" },
              { genre: "Segunda Guerra Mundial", image: "/wwII/el_dia_d_de_churchill.jpg", title: "El día D de Churchill", author: "Allen Packwood, Richard Dannatt" }
            ].map((book, index) => (
              <div key={index} onClick={() => handleBookClick(book.genre)} style={{ cursor: 'pointer' }}>
                <BookBlock {...book} />
              </div>
            ))}
          </section>
        </main>
        <Footer/>
      </>
    )
}

export default HomeApp