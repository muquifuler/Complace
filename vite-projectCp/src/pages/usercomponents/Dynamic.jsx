import { useState, useEffect, useRef } from 'react'

const templateContainerStyles = {
    // Text
    textAlign: 'center',

    // Configuracion del espacio
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',

    // Posicion
    position: "relative",

    // Medidas
    width: '300px',
    height: '200px',
    padding: '0',
    margin: '0',
    
    // Estilos
    backgroundColor: 'white',

    // Bordes
    borderRadius: '6px',
    border: 'solid 1px #141414'
}

function Dynamic({ id_, url, maxData_ }) {

    const [id, setId] = useState();
    const [dataArr, setDataArr] = useState([]);
    const [maxData, setMaxData] = useState(5);
    const [dataObj, setDataObj] = useState({});
    const [estructura, setEstructura] = useState({
        id: 0,
        level: 0,
        contract: false,
        nameNav: "Dynamic",
        type: "Dynamic",
        realType: "div",
        text: null,
        styles: { },
        stylesComponent: {...templateContainerStyles},
        children: [{
          id: 0,
          level: 0,
          contract: false,
          nameNav: "Element",
          type: "div",
          realType: "div",
          text: null,
          styles: { },
          stylesComponent: {...templateContainerStyles},
          children: []
        }]
      });

      //const componentRef = useRef(null);

      useEffect(() => {
        setId(id_);
       
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(Array.isArray(data.results)){
                setDataArr(data.results);
            }else if(typeof data.results == "object"){
                setDataObj(data.results);
            }
        })
        .catch(error => {
          console.error('Error fetching API:', error);
        });
    }, [])

    
    /*useEffect(() => {
        createComponent();
    }, [dataArr, dataObj])

    const createComponent = () => {
        const componentHTML = componentRef.current.innerHTML;
        const arrHtml = componentHTML.replaceAll("<", "|<").replaceAll(">", ">|").split("|");
        console.log(arrHtml);
      }*/

      return (
        <div>   
          {dataArr.length > 0 && dataArr.slice(0, maxData).map((e, i) => (
            <div key={i} style={templateContainerStyles}>
              <span>{e.name}</span>
              <button>{e.url}</button>
            </div>
          ))}
        </div>
      );
    }

export default Dynamic;