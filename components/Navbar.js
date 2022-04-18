/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/images/logo.png';
import cssVariables from '../styles/variables';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>
              <Image src={Logo} alt="logo" width="100px" height="48px" />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="#">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="login">Ingresar</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          header {
          }
          nav:nth-child(1) {
            padding-left: 20px;
          }
          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            border-bottom: 1px solid #d9d9d9;
          }
          ul {
            display: flex;
            justify-content: space-around;
            text-decoration: none;
            list-style: none;
            width: 300px;
            height: 100%;
          }
          li {
            width: 100%;
            cursor: pointer;
          }
          li a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-family: ${cssVariables.primaryFont};
            font-size: 1.1rem;
            color: ${cssVariables['text-color']};
            font-weight: 800;
          }
          a.login {
            background-color: ${cssVariables.primaryColor};
          }
          li a:hover {
            background-color: ${cssVariables.primaryHover};
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
