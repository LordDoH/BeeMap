import Image from 'next/image';
import { GrMail } from 'react-icons/gr';
import Drone from '../assets/images/drone.png';
import Computer from '../assets/images/computer.png';
import Background from '../assets/images/background.png';
import Navbar from '../components/Navbar';
import WhatsappDock from '../components/Whatsapp';
import cssVariables from '../styles/variables';

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsappDock />
      <main>
        <div className="leftCol">
          <h1>Ingeniería con Drones</h1>
          <h3>
            Capturamos, procesamos y disponibilizamos en la web data de tu
            proyecto.
          </h3>
          <form className="inputContainer">
            <div className="input">
              <GrMail />
              <input type="email" required />
            </div>
            <button type="submit">Conocer más</button>
          </form>
        </div>
        <div className="rightCol">
          <div className="computer">
            <Image src={Computer} alt="deploy" />
          </div>
          <div className="drone">
            <Image src={Drone} alt="drone" />
          </div>
        </div>
      </main>
      <style jsx>
        {`
          main {
            display: flex;
            font-family: Poppins, sans-serif;
            height: calc(100vh - 70px);
            min-height: 600px;
            max-height: 900px;
            overflow-x: hidden;
          }
          div.leftCol {
            display: flex;
            flex: 1 1;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 0 3rem 0 5rem;
          }
          div.rightCol {
            flex: 1 1;
            max-width: 45%;
            background-image: url(${Background.src});
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #f0f0f0;
            position: relative;
          }
          form.inputContainer {
            display: flex;
            align-items: stretch;
            width: 100%;
            justify-content: flex-start;
            margin-top: 3rem;
          }
          .computer {
            position: absolute;
            width: 70%;
            min-width: 400px;
            max-width: 450px;
            height: auto;
            top: 2rem;
            right: -2rem;
          }
          .drone {
            position: absolute;
            bottom: 20%;
            left: -20%;
            width: 90%;
            min-width: 500px;
            height: auto;
          }
          div.input {
            display: flex;
            flex: 1 1;
            align-items: center;
            padding: 0 1.5rem;
            background-color: #efefef;
            border: none;
            margin-right: 1rem;
            border-radius: 4px;
            max-width: 400px;
            font-size: 1.3rem;
            color: #858585;
            font-family: ${cssVariables.secondaryFont};
            gap: 14px;
          }
          button {
            background-color: ${cssVariables.primaryColor};
            border-radius: 5px;
            min-height: 50px;
            padding: 8px 40px;
            color: ${cssVariables.secondaryColor};
            font-family: ${cssVariables.primaryFont};
            font-weight: 600;
            border: none;
            cursor: pointer;
            margin: 0 1px;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
          }
          input {
            margin: 0;
            width: 100%;
            border: none;
            font-size: 1.4rem;
            background: transparent;
            font-family: ${cssVariables.secondaryFont};
            color: ${cssVariables.secondaryColor};
          }
          input:focus {
            outline: none;
          }
          h1 {
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 4.5rem;
            max-width: 400px;
            line-height: 100%;
            margin-bottom: 2rem;
          }
          h3 {
            font-size: 1.5rem;
            font-weight: 400;
            width: 80%;
          }
        `}
      </style>
    </>
  );
}
