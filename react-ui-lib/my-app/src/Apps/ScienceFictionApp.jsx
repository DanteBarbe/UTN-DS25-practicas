import './styles/styles.css'
import Book from '../Components/Book';
import Layout from '../Components/Layout';


export const ScienceFictionApp = () => {
  return (
    <>
    <Layout>
    <section className='genre-section'>
      <Book genre={'cienciaficcion'}/>
    </section>
    </Layout>
    </>
  )
}
export default ScienceFictionApp