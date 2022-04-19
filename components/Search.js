import { ImSearch } from 'react-icons/im';
import { useEffect } from 'react';
import cssVariables from '../styles/variables';

function Search({
  placeholder,
  search,
  setSearch,
  setState,
  projects,
  last,
  setMapResults,
  onClick,
}) {
  let filteredProj;

  const findResults = async (e) => {
    e.preventDefault();
    setState(filteredProj);
    setSearch(search.concat(' '));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    filteredProj = projects?.filter((proj) => {
      if (proj.name?.toLowerCase().includes(search?.toLowerCase().trim())) {
        return proj.name?.toLowerCase().includes(search?.toLowerCase().trim());
      }
      if (
        proj.description?.toLowerCase().includes(search?.toLowerCase().trim())
      ) {
        return proj.description
          ?.toLowerCase()
          .includes(search?.toLowerCase().trim());
      }
      if (proj.client?.toLowerCase().includes(search?.toLowerCase().trim())) {
        return proj.client
          ?.toLowerCase()
          .includes(search?.toLowerCase().trim());
      }
      if (proj.location?.toLowerCase().includes(search?.toLowerCase().trim())) {
        return proj.location
          ?.toLowerCase()
          .includes(search?.toLowerCase().trim());
      }
      return null;
    });
    if (projects && search) {
      setState(filteredProj);
      setMapResults(filteredProj);
    }
    if (!search) {
      setState(last);
    }
  }, [search]);

  return (
    <>
      <form onSubmit={findResults}>
        <input
          type="text"
          placeholder={placeholder || 'Ingresa tu busqueda'}
          value={search}
          onChange={onChange}
          onClick={onClick}
        />
        <button type="submit">
          <ImSearch />
        </button>
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
        form:hover {
          border: 2px solid ${cssVariables.primaryColor};
          transition: ease 0.5s;
        }
        form > button {
          background-color: ${cssVariables.primaryColor};
          color: ${cssVariables.primaryColorLight};
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 1.25rem;
          border: none;
          margin: auto;
          cursor: pointer;
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
