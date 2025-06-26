import './styles/styles.css'
import Book from '../Components/Book';
import Layout from '../Components/Layout';

export const TerrorApp = () => {
  return (
    <>
    <Layout>
    <section className='genre-section'>
        <Book genre={'terror'}/>
    </section>
    </Layout>
    </>
  )
}
export default TerrorApp