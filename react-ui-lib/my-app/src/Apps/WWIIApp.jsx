import './styles/styles.css'
import Book from '../Components/Book';
import Layout from '../Components/Layout';

export const WWIIApp = () => {
  return (
    <>
    <Layout>
      <section className='genre-section'>
      <Book genre={'wwii'}/>
      </section>
    </Layout>
    </>
  )
}
export default WWIIApp