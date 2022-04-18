import { BsWhatsapp } from 'react-icons/bs';
import cssVariables from '../styles/variables';

function WhatsappDock() {
  const goWhatsapp =
    'https://wa.me/573003461645/?text=Saludos,%20quiero%20información%20adicional%20de%20los%20productos';
  return (
    <>
      <a href={goWhatsapp}>
        <BsWhatsapp />
      </a>
      <style jsx>
        {`
          a {
            font-size: 2rem;
            position: fixed;
            bottom: 25px;
            right: 20px;
            width: 55px;
            height: 55px;
            color: ${cssVariables.primaryColorLight};
            border-radius: 27.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${cssVariables.primaryColor}cc;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 20;
          }
          a:hover {
            background-color: ${cssVariables.primaryColor}ff;
          }
        `}
      </style>
    </>
  );
}

export default WhatsappDock;
