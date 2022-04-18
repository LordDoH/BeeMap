/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import Background from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';
import cssVariables from '../../styles/variables';

function index() {
  return (
    <>
      <main>
        <section>
          <div>
            <Image src={Logo} alt="logo" width="150px" height="72px" />
          </div>
          <h2>Ingresa a tu espacio de trabajo</h2>
          <div>
            <form>
              <div>
                <label htmlFor="login-email" title="email">
                  <span>Email</span>
                  <input type="email" id="login-email" />
                </label>
                <label htmlFor="login-password" title="password">
                  <span>Contraseña</span>
                  <input type="password" id="login-password" />
                </label>
              </div>
              <button type="submit">Ingresar</button>
            </form>
            <span>
              ¿Olvidaste tu Contraseña?. Haz{' '}
              <Link href="/">
                <a>click aquí</a>
              </Link>{' '}
              para recuperarla
            </span>
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
        h2 {
          margin: 21px 0 35px 0;
          font-family: ${cssVariables.secondaryFont};
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
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
          box-sizing: border-box;
          margin: 0;
          font-variant: tabular-nums;
          list-style: none;
          font-feature-settings: 'tnum', 'tnum';
          position: relative;
          display: inline-block;
          width: 100%;
          min-width: 0;
          color: rgba(0, 0, 0, 0.85);
          line-height: 1.5715;
          background-color: #fff;
          background-image: none;
          border: 1px solid #d9d9d9;
          border-radius: 2px;
          transition: all 0.3s;
          padding: 6.5px 11px;
          margin-bottom: 15px;
          font-size: 16px;
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
