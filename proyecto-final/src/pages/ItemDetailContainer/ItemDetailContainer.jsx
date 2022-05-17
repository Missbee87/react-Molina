import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore} from 'firebase/firestore';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Spinner/spinner.css';
import './ItemDetailContainer.css'




function getCapacitacion(id){
  const db = getFirestore();

  const itemRef = doc(db, 'items', id);

  return getDoc (itemRef);
}


function ItemDetailContainer () {
  const [Loading, SetLoading] = useState ([false]);
  const [capacitacion, setCapacitacion] = useState ({});
  const { id } = useParams();
  
 
  useEffect ( () => {
    SetLoading(true);
    getCapacitacion(id)
    .then( snapshot => {
      setCapacitacion({...snapshot.data(), id: snapshot.id });
      SetLoading(false);
    });

  }, [id]);
  
  

  return (
    <div className="container">
      <div className="row">
        <ItemDetail capacitacion={capacitacion} />
        { Loading && <Spinner className="loading-spinner"/> }
      </div>
    </div>
    
    )
  };



export default ItemDetailContainer;
