import Image from 'next/image';
import cssVariables from '../styles/variables';

function Card() {
  return (
    <>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sagittis ante sed magna facilisis, in elementum felis consequat.
              Fusce dignissim turpis faucibus congue ultrices. Donec sed rhoncus
              orci. Sed dapibus fringilla lacinia. Vivamus convallis sapien eget
              tempor rutrum. Nulla facilisi. Maecenas sodales sem eu urna
              lacinia volutpat.
            </p>
          </div>
        </div>
        <div className="card__footer">
          <div>Cliente</div>
          <div>Ubicación</div>
        </div>
      </article>
      <style jsx>{`
        article {
          margin: 30px 0;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid lightgray;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: ${cssVariables.secondaryFont};
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
        .card__text>h2 {
          font-family: ${cssVariables.primaryFont};
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .card__text>p {
          text-align: justify;
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

export default Card;
