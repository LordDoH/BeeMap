import Map from '../../components/Map';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
// import cssVariables from '../../styles/variables';
import Card from '../../components/Card';

function index(props) {
  return (
    <>
      <Navbar />
      <Search />
      <main>
        <section className="results">
          <h2>
            {(props.search && `Resultados de ${props.search}`) ||
              'Realiza una busqueda'}
          </h2>
          {/* Aca ira un componente que representa los resultados */}
          <Card />
        </section>
        <div className="map">
          <Map />
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 50px 0 100px 0;
        }
        section {
          width: 40%;
          min-height: 800px;
          border: 1px solid lightgray;
          padding: 20px;
        }
        section > h2 {
          margin-bottom: 30px;
        }
        div.map {
          width: 40%;
          height: 100vh;
        }
      `}</style>
    </>
  );
}

export default index;
