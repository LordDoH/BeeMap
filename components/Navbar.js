/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../assets/images/logo.png';
import cssVariables from '../styles/variables';
import useAuthUser from '../hooks/useAuthUser';
import { useAuth } from '../context/AuthUserContext';

function Navbar() {
  const router = useRouter();
  useAuthUser();

  const { authUser } = useAuth();
  return (
    <>
      <header>
        <nav>
          <div>
            <Image
              src={Logo}
              alt="logo"
              width="100px"
              height="48px"
              onClick={() => router.push('/')}
            />
          </div>
          <ul>
            <li>
              <Link href="#">
                <a>Servicios</a>
              </Link>
            </li>
            {!authUser ? (
              <li>
                <Link href="/login">
                  <a className="login">Ingresar</a>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <Link href="/logout">
                    <a className="logout">Cerrar Sesión</a>
                  </Link>
                </li>
              </>
            )}
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
          nav > div {
            cursor: pointer;
          }
          ul {
            display: flex;
            justify-content: space-around;
            text-decoration: none;
            list-style: none;
            width: 450px;
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
          a.logout {
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
