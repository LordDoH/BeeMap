import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import cssVariables from '../styles/variables';

function Search({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          placeholder={placeholder || 'Ingresa tu busqueda'}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div>
          <ImSearch />
        </div>
      </form>
      <style jsx>{`
        form {
          display: flex;
          justify-content: space-between;
          align-content: center;
          gap: 2rem;
          border-radius: 5px;
          border: 2px solid ${cssVariables['border-color-base']};
          background-color: #efefef55;
          width: 30%;
          margin: 20px auto;
        }
        form > div {
          background-color: ${cssVariables.primaryColor};
          color: ${cssVariables.primaryColorLight};
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 1.25rem;
          margin: auto;
        }
        input {
          padding: 10px;
          font-family: ${cssVariables.secondaryFont};
          font-size: 1.1rem;
          background-color: transparent;
          width: 80%;
          outline: none;
          border: none;
        }
      `}</style>
    </>
  );
}

export default Search;
