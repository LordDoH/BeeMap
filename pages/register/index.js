/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthUserContext';
import useAuthUser from '../../hooks/useAuthUser';
import Background from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';
import cssVariables from '../../styles/variables';

function index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { push } = useRouter();

  const [error, setError] = useState(null);

  const { createUser } = useAuth();

  useAuthUser();

  const register = (e) => {
    setError(null);
    if (password === password2)
      createUser(email, password)
        .then(() => {
          console.log('Success. The user is created in firebase');
          push('/');
        })
        .catch((er) => {
          setError(er.message);
        });
    else setError('Password do not match');
    e.preventDefault();
  };

  return (
    <>
      <main>
        <section>
          <div className="logoimg">
            <Image
              src={Logo}
              alt="logo"
              width="150px"
              height="72px"
              onClick={() => push('/')}
            />
          </div>
          <h2>Registrate y obten nuestros productos</h2>
          <div>
            <form>
              <div>
                <label htmlFor="login-email" title="email">
                  <span>Email</span>
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
                <label htmlFor="login-password" title="password">
                  {error && <span>{error}</span>}
                  <span>Contraseña</span>
                  <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </label>
                <label htmlFor="login-password2" title="password2">
                  <span>Repetir Contraseña</span>
                  <input
                    type="password"
                    id="login-password2"
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                  />
                </label>
              </div>
              <button type="submit" onClick={register}>
                Registrarse
              </button>
            </form>
            <span>¿Listo para registrarte? solo has click en el boton. </span>
          </div>
        </section>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          background-image: url(${Background.src});
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 450px;
          min-width: 300px;
          min-height: 300px;
          background-color: #fff;
          padding: 3rem;
        }
        section > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .logoimg {
          cursor: pointer;
        }
        h2 {
          margin: 21px 0 35px 0;
          font-family: ${cssVariables.secondaryFont};
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          text-align: center;
        }
        span {
          font-family: ${cssVariables.secondaryFont};
          font-size: 1.1rem;
          color: ${cssVariables.secondaryColor};
        }
        form div {
          display: flex;
          flex-direction: column;
        }
        label {
          display: flex;
          flex-direction: column;
        }
        label span {
          font-size: 1rem;
          line-height: 1.5rem;
          padding-bottom: 8px;
          font-family: ${cssVariables.primaryFont};
          font-weight: 600;
        }
        label span::before {
          content: '* ';
          color: red;
        }
        input {
          width: 100%;
          color: rgba(0, 0, 0, 0.85);
          line-height: 1.5715;
          background-color: #fff;
          background-image: none;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
          transition: ease 0.3s;
          padding: 6.5px 11px;
          margin-bottom: 15px;
          font-size: 16px;
          outline: none;
        }
        input:focus {
          border: 1px solid ${cssVariables.primaryColor};
        }
        button {
          color: ${cssVariables.secondaryColor};
          font-family: ${cssVariables.secondaryFont};
          font-weight: 600;
          font-size: 1.1rem;
          background-color: ${cssVariables.primaryColor};
          border-radius: 5px;
          min-height: 50px;
          margin: 30px 0 40px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          width: 100%;
        }
        span a {
          color: ${cssVariables.primaryColor};
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default index;
