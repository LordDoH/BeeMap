import React from 'react';
import Image from 'next/image';
import Map from '../../components/Map';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';

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
          <article>
            <div className="card__content">
              <div>
                <Image
                  src="https://www.semperitgroup.com/fileadmin/_processed_/7/8/csm_building_construction_header_78aafaaea8.jpg"
                  width="200px"
                  height="200px"
                  objectFit="cover"
                />
              </div>
              <div className="card__text">
                <h2>Titulo</h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent sagittis ante sed magna facilisis, in elementum felis
                  consequat. Fusce dignissim turpis faucibus congue ultrices.
                  Donec sed rhoncus orci. Sed dapibus fringilla lacinia. Vivamus
                  convallis sapien eget tempor rutrum. Nulla facilisi. Maecenas
                  sodales sem eu urna lacinia volutpat.
                </span>
              </div>
            </div>
            <div className="card__footer">
              <div>Cliente</div>
              <div>Ubicación</div>
            </div>
          </article>
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
        section>h2{
          margin-bottom: 30px;
        }
        article {
          margin: 30px 0;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid lightgray;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        div.map {
          width: 40%;
          height: 100vh;
        }
        .card__content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }
        .card__text {
          width: 50%;
          font-size: 1rem;
        }
        .card__footer {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          align items: center;
        }
      `}</style>
    </>
  );
}

export default index;
