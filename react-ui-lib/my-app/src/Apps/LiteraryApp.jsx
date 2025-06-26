import './styles/styles.css'
import Layout from '../Components/Layout';
import Book from '../Components/Book';

export const LiteraryApp = () => {
  return (
    <>
    <Layout>
    <section className='genre-section'>
      <Book genre={'novela'}/>
    </section>
    </Layout>
    </>
  )
}
export default LiteraryApp