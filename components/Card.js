/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Image from 'next/image';
import cssVariables from '../styles/variables';

function Card({
  imgsrc = 'https://res.cloudinary.com/medeseeds/image/upload/v1650392346/Spybee/Project%201/Main_bzfsl3.png',
  title = 'Titulo',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis ante sed magna facilisis, in elementum felis consequat. Fusce dignissim turpis faucibus congue ultrices. Donec sed rhoncus orci. Sed dapibus fringilla lacinia. Vivamus convallis sapien eget tempor rutrum. Nulla facilisi. Maecenas sodales sem eu urna lacinia volutpat.',
  client = 'Cliente',
  location = 'Ubicación',
  onClick,
}) {
  return (
    <>
      <article onClick={onClick}>
        <div className="card__content">
          <div>
            <Image
              src={imgsrc}
              width="200px"
              height="200px"
              objectFit="cover"
            />
          </div>
          <div className="card__text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="card__footer">
          <div>{client}</div>
          <div>{location}</div>
        </div>
      </article>
      <style jsx>{`
        article {
          margin: 30px 0;
          padding: 30px;
          border-radius: 10px;
          border: 1px solid lightgray;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: ${cssVariables.secondaryFont};
          background-color: #fefefe;
        }
        article:hover{
          transform: scale(0.9);
          transition: ease 0.3s;
          cursor: pointer;
        }
        .card__content {
          display: flex;
          justify-content: space-between;
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
          padding-top: 10px;
          align items: center;
          color: #ccc;
        }
      `}</style>
    </>
  );
}

export default Card;
