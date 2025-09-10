import prisma from '../config/prisma';
import { Book } from '../generated/prisma';

export async function getAllBooks(): Promise<Book[]> {
 const books = await prisma.book.findMany({
  include: { author: true },
  orderBy: { id: 'asc' },
 });
 return books;
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ where: { id }, include: { author: true } });
  if (!book) {
    const error = new Error('Book not found.');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook (data: { title: string; genre: string; authorId : number; }): Promise<Book> {
 const authorExists = await prisma.author.findUnique ({   where: { id: data.authorId } });
 if (!authorExists ) {
 const error = new Error('El autor no existe' ) as any;
 error.statusCode = 404;
 throw error;
 }
 return prisma.book.create({ data, include: { author: true } });
}

export async function removeBookById(id: number): Promise<void> {
  try {
    await prisma.book.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Book not found.');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
  
export async function updateBook(id: number, data: Partial<Book>): Promise<Book> {
  if (data.authorId) {
    const authorExists = await prisma.author.findUnique({ where: { id: data.authorId } });
    if (!authorExists) {
      const error = new Error('El autor no existe') as any;
      error.statusCode = 404;
      throw error;
    }
  }
  try {
    return await prisma.book.update ({ where: { id }, data, include: { author: true } });
  } catch (e: any){
    if (e.code === 'P2025'){
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}



/*let books: Book[] = [
    {
      id: 1,
      image: "/literary/cien_años_de_soledad.jpg",
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      description: "La historia de la familia Buendía en el pueblo ficticio de Macondo, una obra maestra del realismo mágico que explora temas de soledad, amor y destino.",
      genre: "novela"
    },
    {
      id: 2,
      image: "/literary/don_quijote_de_la_mancha.jpg",
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      description: "La historia de un hidalgo que pierde la cordura y decide convertirse en caballero andante, acompañado por su fiel escudero Sancho Panza.",
      genre: "novela"
    },
    {
      id: 3,
      image: "/literary/orgullo_y_prejuicio.webp",
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      description: "Una novela romántica que explora las complejidades del amor, la familia y las diferencias sociales en la Inglaterra del siglo XIX.",
      genre: "novela"
    },
    {
      id: 4,
      image: "/literary/crimen_y_castigo.webp",
      title: "Crimen y castigo",
      author: "Fiódor Dostoyevski",
      description: "La lucha moral de un joven estudiante que comete un asesinato y enfrenta las consecuencias psicológicas y éticas de su acto.",
      genre: "novela"
    },
    {
      id: 5,
      image: "/literary/el_gran_gatsby.webp",
      title: "El gran Gatsby",
      author: "F. Scott Fitzgerald",
      description: "Una crítica de la sociedad estadounidense de los años 20, centrada en la vida de Jay Gatsby y su obsesión por recuperar el amor perdido.",
      genre: "novela"
    },
    {
      id: 6,
      image: "/literary/madame_bovary.webp",
      title: "Madame Bovary",
      author: "Gustave Flaubert",
      description: "La trágica historia de Emma Bovary, una mujer atrapada en un matrimonio aburrido que busca escapar a través de relaciones amorosas y el lujo.",
      genre: "novela"
    },
    {
      id: 7,
      image: "/science_fiction/metro_2033.jpg",
      title: "Metro 2033",
      author: "Dmitry Glukhovsky",
      description: "Año 2033, Moscú. Los supervivientes de la terrible guerra nuclear que ha devastado el mundo se han refugiado bajo tierra, en la red del metro...",
      genre: "cienciaficcion"
    },
    {
      id: 8,
      image: "/science_fiction/neuromante.webp",
      title: "Neuromante",
      author: "William Gibson",
      description: "Un hacker caído en desgracia, Case, es contratado para realizar el mayor hackeo de su vida en un mundo dominado por la cibertecnología...",
      genre: "cienciaficcion"
    },
    {
      id: 9,
      image: "/science_fiction/la_vieja_guardia.webp",
      title: "CTS La vieja guardia",
      author: "John Scalzi",
      description: "Tras haber vivido una vida tranquila, ancianos se alistan en un ejército espacial que rejuvenece sus cuerpos para luchar por la humanidad.",
      genre: "cienciaficcion"
    },
    {
      id: 10,
      image: "/science_fiction/1984.webp",
      title: "1984",
      author: "George Orwell",
      description: "En un mundo distópico controlado por el Gran Hermano, Winston Smith lucha contra la opresión y la manipulación de la verdad.",
      genre: "cienciaficcion"
    },
    {
      id: 11,
      image: "/science_fiction/el_fin_de_la_infancia.webp",
      title: "El fin de la infancia",
      author: "Arthur C. Clarke",
      description: "La llegada de los superseñores transforma la Tierra en una utopía, pero a un costo inesperado para la humanidad.",
      genre: "cienciaficcion"
    },
    {
      id: 12,
      image: "/science_fiction/la_guerra_de_los_mundos.webp",
      title: "La guerra de los mundos",
      author: "H. G. Wells",
      description: "La invasión marciana pone a prueba la supervivencia de la humanidad en esta obra clásica de ciencia ficción.",
      genre: "cienciaficcion"
    },
    {
      id: 13,
      image: "/terror/soy_leyenda.jpg",
      title: "Soy leyenda",
      author: "Richard Matheson",
      description: "Robert Neville es el último humano en un mundo invadido por vampiros. Él es el monstruo para los nuevos habitantes.",
      genre: "terror"
    },
    {
      id: 14,
      image: "/terror/luz_negra.webp",
      title: "Luz negra",
      author: "Pedro Berruezo",
      description: "Una amenaza ancestral se manifiesta en diferentes eras de la humanidad, vinculada a objetos creados por el hombre.",
      genre: "terror"
    },
    {
      id: 15,
      image: "/terror/la_caida_de_la_casa_usher.webp",
      title: "La caída de la Casa Usher",
      author: "Edgar Allan Poe, Ismael Pinteño Visuara",
      description: "Un relato gótico donde la decadencia física y emocional de una familia se refleja en su mansión.",
      genre: "terror"
    },
    {
      id: 16,
      image: "/terror/la_llamada_de_cthulhu.webp",
      title: "La llamada de Cthulhu",
      author: "François Baranger, H. P. Lovecraft",
      description: "La historia que dio origen al universo de los Primigenios, con Cthulhu esperando en los abismos.",
      genre: "terror"
    },
    {
      id: 17,
      image: "/terror/la_chica_gris.webp",
      title: "La chica gris",
      author: "Antonio Runa",
      description: "Un periodista psíquico vive una crisis personal mientras investiga sucesos paranormales que desafían su cordura.",
      genre: "terror"
    },
    {
      id: 18,
      image: "/terror/ascension.webp",
      title: "Ascensión",
      author: "Nicholas Binge",
      description: "Una montaña aparece en el océano. Un equipo de científicos parte a investigarla, sin imaginar lo que enfrentarán.",
      genre: "terror"
    },
    {
      id: 19,
      image: "/wwII/el_dia_d_de_churchill.jpg",
      title: "El día D de Churchill",
      author: "Allen Packwood, Richard Dannatt",
      description: "El papel de Churchill en el desembarco aliado del Día D y su liderazgo político durante la Segunda Guerra Mundial.",
      genre: "wwii"
    },
    {
      id: 20,
      image: "/wwII/los_niños_de_la_estrella_amarilla.gif",
      title: "Los niños de la estrella amarilla",
      author: "Mario Escobar",
      description: "Dos niños judíos cruzan Francia buscando a sus padres durante la ocupación nazi.",
      genre: "wwii"
    },
    {
      id: 21,
      image: "/wwII/la_segunda_guerra_mundial.webp",
      title: "La wwii",
      author: "Gerhard L. Weinberg",
      description: "Visión completa del conflicto mundial: causas, evolución y consecuencias civiles y militares.",
      genre: "wwii"
    },
    {
      id: 22,
      image: "/wwII/el_hombre_en_el_castillo.webp",
      title: "El hombre en el castillo",
      author: "Philip K. Dick",
      description: "Distopía que explora un mundo alternativo en el que el Eje ganó la Segunda Guerra Mundial.",
      genre: "wwii"
    },
    {
      id: 23,
      image: "/wwII/diario_de_ana_frank.webp",
      title: "El diario de Ana Frank",
      author: "Ana Frank",
      description: "Testimonio real de una niña judía escondida durante la ocupación nazi en Holanda.",
      genre: "wwii"
    },
    {
      id: 24,
      image: "/wwII/la_guerra_no_tiene_rostro_de_mujer.webp",
      title: "La guerra no tiene rostro de mujer",
      author: "Svetlana Alexievich",
      description: "Historias de mujeres que combatieron en el Ejército Rojo durante la Segunda Guerra Mundial.",
      genre: "wwii"
    }
  ]
*/
