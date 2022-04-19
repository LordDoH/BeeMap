import { useEffect, useState } from 'react';
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  runTransaction,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ImCross } from 'react-icons/im';
import Mapbox from '../../components/Map';
import Navbar from '../../components/Navbar';
import Search from '../../components/Search';
import cssVariables from '../../styles/variables';
import Background from '../../assets/images/background.png';
import Card from '../../components/Card';
import { db, auth } from '../../firebase/client';
import { useAuth } from '../../context/AuthUserContext';

function index() {
  const [dataf, setDataf] = useState([]);
  const [last, setLast] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mapResults, setMapResults] = useState();
  const [selectedPop, setSelectedPop] = useState();

  const { authUser } = useAuth();

  const fetchProjects = async (user) => {
    const querySnapshot = await getDocs(
      query(collection(db, 'users'), where('user', '==', user?.uid || 0))
    );
    return querySnapshot.docs.map((docm) => {
      // doc.data() is never undefined for query doc snapshots
      const data = docm.data();
      const { id } = docm;

      return {
        id,
        ...data,
      };
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProjects(user).then((data) => {
          setDataf(data[0].projects);
          setMapResults(data[0].projects);
          const arr = [];
          for (let i = 0; i < 3; i += 1) {
            data[0].projects.map((e) => {
              if (data[0].lastvisited[i] === e.id) {
                return arr.push(e);
              }
              return null;
            });
          }
          setLast(arr);
          setSearchResults(arr);
          // console.log(arr);
          // console.log(data[0].lastvisited);
        });
      }
    });
  }, []);

  const saveLast = async (data) => {
    const sfDocRef = doc(db, 'users', 'Daniel');
    try {
      await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        if (!sfDoc.exists()) {
          // throw 'Document does not exist!';
        }
        transaction.update(sfDocRef, { lastvisited: data });
      });
      // console.log('Transaction successfully committed!');
    } catch (e) {
      // console.log('Transaction failed: ', e);
    }
  };

  const goTo = (e, title) => {
    setSearch(title);
    const newarr = [...last];
    if (!newarr.includes(e)) {
      newarr.pop();
      newarr.splice(0, 0, e);
    } else if (newarr.includes(e) && newarr.indexOf(e) !== 0) {
      newarr.splice(newarr.indexOf(e), 1);
      newarr.splice(0, 0, e);
    }

    const lastId = newarr.map((el) => el.id);

    setLast(newarr);
    saveLast(lastId);
  };

  const resetPop = () => {
    setSelectedPop(null);
  };

  return (
    <>
      <Navbar />
      <Search
        search={search}
        setSearch={setSearch}
        setMapResults={setMapResults}
        projects={dataf}
        last={last}
        setState={setSearchResults}
        onClick={resetPop}
      />
      <main>
        <section className="results">
          <h2>
            {((search || searchResults?.length === 0) && (
              <span>{`Resultados de "${search}"`}</span>
            )) || <span>Ultimos proyectos visitados 🐝</span>}
            {(search || searchResults?.length === 0) && (
              <div>
                <ImCross
                  onClick={() => {
                    setSearchResults(last);
                    setMapResults(dataf);
                    setSearch('');
                  }}
                />
              </div>
            )}
          </h2>
          {!search && (
            <h4>
              Bienvenido <span>{authUser?.email}</span>
            </h4>
          )}
          {/* Aca ira un componente que representa los resultados */}
          {search && searchResults?.length === 0 ? (
            <div className="noResults">No hay coincidencias</div>
          ) : null}
          {searchResults?.map((e) => (
            <Card
              onClick={() => goTo(e, e.name)}
              key={e.id}
              imgsrc={e.image}
              title={e.name}
              description={e.description}
              client={e.client}
              location={e.location}
            />
          ))}
        </section>
        <div id="map">
          <Mapbox
            results={mapResults}
            selectedPop={selectedPop}
            setSelectedPop={setSelectedPop}
          />
        </div>
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          margin: 50px 0 100px 0;
        }
        section {
          width: 40%;
          min-height: 800px;
          border: 1px solid lightgray;
          padding: 20px;
          background-image: url(${Background.src});
          background-repeat: no-repeat;
          background-size: cover;
        }
        section > h2 {
          margin-bottom: 30px;
          font-family: ${cssVariables.secondaryFont};
        }
        h2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h2 > div {
          color: red;
          font-size: 1.1rem;
          cursor: pointer;
        }
        h2 > div:hover {
          transform: scale(1.2);
          transition: all 0.3s;
        }
        h4 {
          font-family: ${cssVariables.primaryFont};
          text-align: right;
          font-size: 0.9rem;
        }
        h4 > span:hover {
          text-decoration: underline;
        }
        #map {
          display: inline-flex;
          width: 40%;
          height: 800px;
        }
        .noResults {
          font-family: ${cssVariables.secondaryFont};
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
}

export default index;
