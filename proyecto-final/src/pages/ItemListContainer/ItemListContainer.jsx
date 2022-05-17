import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList';
import { collection, getDocs, getFirestore, query, where, limit, doc} from 'firebase/firestore';
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/Spinner/spinner.css';



function getCapacitaciones(category){
  const db = getFirestore();

  const itemsCollection=collection(db, 'items');
  const q = category && query (
    itemsCollection,
    where('category', '==', category)
  );
    return getDocs(q || itemsCollection);
  
}
      


function ItemListContainer () {
  const [Loading, SetLoading] = useState ([false]);
  const [capacitaciones, setCapacitaciones] = useState ([]);
  const {categoryId} = useParams();
  


  
  useEffect ( () => {
   
    
    SetLoading(true);
    getCapacitaciones(categoryId)
      .then( snapshot => {
      setCapacitaciones(snapshot.docs.map( doc => { return {...doc.data(), id: doc.id}}));
      SetLoading(false);
    });

  }, [categoryId]);
  
    return (
      <div className="box">
        <div className="container">
          <div className="row">
            <ItemList capacitaciones={capacitaciones} />
            { Loading && <Spinner className='loading-spinner' /> }
          </div>
        </div>
      </div>
    )
  }



export default ItemListContainer;

