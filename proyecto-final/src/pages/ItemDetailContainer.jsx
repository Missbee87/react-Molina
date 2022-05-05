import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Spinner/spinner.css';


function getCapacitacion(id){
  const myPromise = new Promise( (resolve, reject) => {
    const capacitaciones = [
      {
        id: 1,
        nombre: "Tratamiento cerámico",
        precio: 10000,
        imagen:"https://dercocenter-api.s3.us-east-1.amazonaws.com/images/contents/2021-08-25-car-detailing.jpg",
        descripcion: "Consiste en un lavado al detalle de la unidad y posterior descontaminado de la superficie para eliminar toda contaminación adherida al barniz y que genera una aspereza de la pintura, además de ir deteriorando la misma.Posterior a esto se procede a una corrección de imperfecciones (micro rayas superficiales circulares -swirls mark- y rectas) mediante diferente etapas de pulidos. Seguido por un paso de abrillantado para lograr el máximo brillo posible y finalizando el trabajo con el sellado de la superficie con un sellador cerámico (recubrimiento a base de Sílice, Cuarzo y Titanio)."
    },
    
    {
        id: 2,
        nombre: "Renew car detail",
        precio: 30000,
        imagen:"https://kilometrosquecuentan.goodyear.eu/wp-content/uploads/2020/07/car-detailing-pulido.jpg",
        descripcion:"El Renew Car es un servicio que reúne varias acciones necesarias para revalorizar tu vehículo.Está ideado para aquellos que han adquirido un coche de segunda mano y desean poder renovar su imagen y su higiene o para quienes desean vender su vehículo y aumentar su atractivo y valor. Con éste Pack completo integral su vehículo lucirá impecable por dentro y reluciente por fuera, un cambio imprescindible para quienes desean vender su vehículo rápidamente o para quienes desean poder estrenar su auto usado."
      
  },
  
  
    {
        id: 3,
        nombre: "Sacabollos artesanal",
        precio: 50000,
        imagen:"https://st2.depositphotos.com/2101611/9080/i/600/depositphotos_90806810-stock-photo-a-man-cleaning-car-with.jpg",
        descripcion:"Contamos con el servicio de desabollado artesanal en frío.Es un sistema que permite realizar reparaciones de golpes medianos, leves o de granizo respetando la pintura original de la unidad. Estos trabajos en la mayoría de los casos se realizan en el día y son reparaciones invisibles."
  
    },
    {
      id: 4,
      nombre: "Paños de microfibra",
      precio: 5000,
      category: "productos",
      imagen:"https://http2.mlstatic.com/D_NQ_NP_636991-MLA47602365667_092021-O.webp",
      descripcion:"Características:Limpieza Delicada y sin marcas en todas las superficies de tu hogar, textura suave y delicada, larga duración extra absorción, no deja rastros ni emite pelusas, ideal para lavado, secado, encerado, etc. de superficies"

      },
      {
        id: 5,
        nombre: "Kit pulido",
        precio: 5000,
        category: "productos",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_871148-MLA47921463175_102021-O.webp",
        descripcion:"Ahora podes pulir tu vehículo de la manera mas rapida y fácil con cualquier taladro o pulidora, su adaptador de backing plate es adaptable a cualquier taladro del mercado o pulidor, Renegade Products trae esta completísimo Kit imperdible TOP ventas en todo el mundo, ya que te brinda todos los pads que necesitas para pulir en todas las etapas hasta el pulido final en tu vehículo."
    },
      {
        id: 6,
        nombre: "Curso para polarizados",
        precio: 10000,
        category: "cursos",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_883652-MLA43677241471_102020-O.webp",
        descripcion:"Explicación detalla del paso a paso, apoyada por imágenes y vídeos de como polarizar un auto, explicando técnicas usadas en cada ventanilla, luneta, etc. Mostrando cuales son las herramientas necesarias y como utilizar cada una de ellas."
      },
      {
        id: 7,
        nombre: "Curso audiocar",
        precio: 10000,
        category: "cursos",
        imagen:"https://http2.mlstatic.com/D_NQ_NP_951761-MLA43677172823_102020-O.webp",
        descripcion:"El curso pretende explicar cómo realizar una instalación de sonido en un auto (conocido popularmente como Audio Car).Para ello se analizará en cada capítulo los componentes necesarios, las herramientas a utilizar y la forma de instalar cada componente para su uso óptimo."
      },
    
  ];
   const capacitacion = capacitaciones.filter(capacitacion => capacitacion.id === parseInt(id)); 
   
   setTimeout(() => {
    resolve (capacitacion[0]);
    }, 2000);
  });
  return myPromise;
}


function ItemDetailContainer () {
  const [Loading, SetLoading] = useState ([false]);
  const [capacitacion, setCapacitacion] = useState ({});
  const { id } = useParams();
  useEffect ( () => {
    SetLoading(true);
    getCapacitacion(id)
    .then( respuestaPromise => {
      setCapacitacion(respuestaPromise);
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
