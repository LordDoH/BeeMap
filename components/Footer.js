import Image from 'next/image';
import Bee from '../assets/images/Bee.png';
import cssVariables from '../styles/variables';

function Footer() {
  return (
    <>
      <footer>
        <Image src={Bee} alt="logoFooter" width="40px" height="40px" />
        <div>
          <span>Have fun with maps</span>
          <span>
            Created by Daniel Ochoa -{' '}
            <a href="https://github.com/LordDoH">@LordDoH</a>
          </span>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            background-color: #eee;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
          }
          div {
            padding-left: 20px;
            display: flex;
            flex-direction: column;
          }
          span {
            margin: 5px;
            color: ${cssVariables['text-color']};
            font-size: 1rem;
            text-align: center;
            font-family: ${cssVariables.secondaryFont};
          }
          a {
            text-decoration: none;
            color: ${cssVariables['text-color']};
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
