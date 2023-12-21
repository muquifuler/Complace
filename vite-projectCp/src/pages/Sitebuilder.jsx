import React, { useEffect, useState, useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useAuth0 } from "@auth0/auth0-react";
import Dynamic from './usercomponents/Dynamic';
import './styles/Sitebuilder.css'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

function Templates() {

    const { user } = useAuth0();

    // Styles
    const templateAppStyles = {
        // Configuracion del espacio
        display: 'flex', // Constante
        justifyContent: 'center',
        alignItems: 'center',

        // Medidas
        padding: '0',
        margin: '0',
        
        // Estilos
        backgroundColor: '#FFFFFF'
    }
    const templateScreenStyles = {

        // Configuracion del espacio
        flexDirection: 'column',
        display: 'flex', // Constante
        justifyContent: 'center',
        alignItems: 'center',

        // Posicion
        position: "relative",

        // Medidas
        width: '800px',
        height: '600px',
        padding: '0',
        
        // Estilos
        backgroundColor: '#FFFFFF'
    }
    const templateContainerStyles = {

        // Configuracion del espacio
        flexDirection: 'column',
        display: 'flex', // Constante
        justifyContent: 'center',
        alignItems: 'center',

        // Posicion
        position: "relative",

        // Medidas
        width: '10%',
        height: '10%',
        padding: '0',
        margin: '0',
        
        // Estilos
        backgroundColor: '#FFFFFF',

        // Bordes
        borderRadius: '0px',
        border: 'solid 1px black'
    }
    const templateTextStyles = {
        // Texto
        color: 'gray',
        fontSize: '1vh',
        fontWeight: '400',
        fontFamily: '',

        // Configuracion del espacio
        textAlign: 'center',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',

        // Posicion
        position: "relative",
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",


        // Medidas
        width: 'auto',
        height: 'auto',
        padding: '0',
        margin: '0',

        // Estilos
        backgroundColor: '#FFFFFF',

        // Border
        borderRadius: '0px',
        border: 'solid 2px blue',

        // Otras propiedades comunes de un texto
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    }
    const templateButtonStyles = {
        // Texto
        color: 'gray',
        textAlign: 'left',
        fontSize: '1.5vh',
        fontWeight: '400',
        fontFamily: 'Arial, sans-serif',
    
        // Medidas
        width: '100%',
        height: '10%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '3px',
        border: 'solid 5px yellow',
    
        // Otras propiedades comunes de un botón
        display: 'inline-block',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        outline: 'none',
    };
    const templateImageStyles = {
        // Essentials
        backgroundImage: 'url("'+'")',

        // Otras propiedades comunes de un botón
        display: 'inline-block',

        // Medidas
        width: '100%',
        height: '10%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '3px',
        border: 'solid 5px yellow',
    };

    //Prefabric
    const templatePrefabric1Styles = {

        // Configuracion del espacio
        flexDirection: 'row',
        display: 'flex', // Constante
        justifyContent: 'center',
        alignItems: 'center',

        // Posicion
        position: "relative",

        // Medidas
        width: '80%',
        height: '40vh',
        padding: '0',
        margin: '0',
        
        // Estilos
        backgroundColor: '#FFFFFF',

        // Bordes
        borderRadius: '.3vh',
        border: 'solid 0px black'
    }
    const templatePrefabric1Child1Styles = {
        // Essentials
        backgroundImage: 'url("https://img.freepik.com/foto-gratis/placas-circuito-brillantes-fila-tecnologia-futurista-generada-ia_188544-22076.jpg")',

        // Otras propiedades comunes de un botón
        display: 'inline-block',
        objectFit: "cover",

        // Medidas
        width: '100%',
        height: '33%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '0px',
        border: 'solid 0px yellow',
    }
    const templatePrefabric1Child2Styles = {
        // Essentials
        backgroundImage: 'url("https://img.freepik.com/fotos-premium/placa-circuitos-electronica-tecnologia-hardware-computadoras-placa-base-tecnologia-chips-digitales-ciencia_662214-236847.jpg")',

        // Otras propiedades comunes de un botón
        display: 'inline-block',
        objectFit: "cover",

        // Medidas
        width: '100%',
        height: '33%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '0px',
        border: 'solid 0px yellow',
    }
    const templatePrefabric1Child3Styles = {
        // Essentials
        backgroundImage: 'url("https://phantom-expansion.unidadeditorial.es/c619f3b628ab45e19cc80ceef95ddd69/f/jpg/assets/multimedia/imagenes/2020/12/15/16080660925480.jpg")',

        // Otras propiedades comunes de un botón
        display: 'inline-block',
        objectFit: "cover",

        // Medidas
        width: '100%',
        height: '33%',
        padding: '0',
        margin: '0',
    
        // Estilos
        backgroundColor: '#FFFFFF',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
    
        // Bordes
        borderRadius: '0px',
        border: 'solid 0px yellow',
    }
    const arrayComponentsPrefabric_ = [{
        id: 0,
        level: 0, // Significa que es el padre
        contract: false,
        nameNav: "Gallery",
        type: "div",
        realType: "div",
        text: null,
        data: { },
        variable: null,
        styles: { },
        stylesComponent: {...templatePrefabric1Styles},
        children: [{
            id: 0,
            level: -2,
            contract: false,
            nameNav: "Image 1",
            type: "div",
            realType: "img",
            text: null,
            data: { },
            variable: null,
            styles: { },
            stylesComponent: {...templatePrefabric1Child1Styles},
            children: []
          },{
            id: 0,
            level: -2,
            contract: false,
            nameNav: "Image 2",
            type: "div",
            realType: "img",
            text: null,
            data: { },
            variable: null,
            styles: { },
            stylesComponent: {...templatePrefabric1Child2Styles},
            children: []
          },{
            id: 0,
            level: -2,
            contract: false,
            nameNav: "Image 3",
            type: "div",
            realType: "img",
            text: null,
            data: { },
            variable: null,
            styles: { },
            stylesComponent: {...templatePrefabric1Child3Styles},
            children: []
          }]
      }];

    // Base de la App
    const app1 = {
        id: 0,
        level: -1,
        contract: true,
        nameNav: "App",
        type: "div",
        realType: "div",
        text: null,
        data: null,
        variable: null,
        owner: user?.sub,
        styles: { },
        stylesComponent: {...templateAppStyles},
        children: [
          {
            id: 1,
            level: 0,
            contract: false,
            nameNav: "Screen",
            type: "div",
            realType: "div",
            text: null,
            data: null,
            variable: null,
            styles: { },
            stylesComponent: {...templateScreenStyles},
            children: []
          }
        ]
    };

    // Plantillas de componentes que existen
    const arrayComponents_ = [{
        id: 0,
        level: 0,
        contract: false,
        nameNav: "Container",
        type: "div",
        realType: "div",
        text: null,
        data: { },
        variable: null,
        styles: { },
        stylesComponent: {...templateContainerStyles},
        children: []
      },               {
        id: 0,
        level: 0,
        contract: false,
        nameNav: "Text",
        type: "span",
        realType: "span",
        text: "Write your text...",
        data: null,
        variable: "",
        styles: { },
        stylesComponent: {...templateTextStyles},
        children: []
      },               {
        id: 0,
        level: 0,
        contract: false,
        nameNav: "Button",
        type: "button",
        realType: "button",
        text: "Button",
        data: null,
        variable: "",
        styles: { },
        stylesComponent: {...templateButtonStyles},
        children: []
      },{
        id: 0,
        level: 0,
        contract: false,
        nameNav: "Image",
        type: "div",
        realType: "img",
        text: null,
        data: null,
        variable: "",    
        styles: { },
        stylesComponent: {...templateImageStyles},
        children: []
    }];

    const backgroundRef = useRef(null);
    const selectorRef = useRef(null);
    
    const [selectMenu, setSelectMenu] = useState("");

    // Tree view
    const [lastNav, setLastNav] = useState([]);
    const [navegacion, setNavegacion] = useState([]);
    const [select, setSelect] = useState({ id: -1, nameNav: '' });
    const [selectCopy, setSelectCopy] = useState({});

    // Add
    const [arrayComponents, setArrayComponents] = useState(arrayComponents_); 
    const [levelComponentFather, setlevelComponentFather] = useState({ });

    // AI
    const [textoExito, setTextoExito] = useState("");
    const [apiKey, setApiKey] = useState("");

    // Api
    const [numApi, setNumApi] = useState(1);
    const [apiTemplate, setApiTemplate] = useState({ nameVar: "Write name...", changeName: false, contract: true, urlFetch: "...", status: "404", dataType: "null", search: "/", data: null, dataShow: "" });
    const [apis, setApis] = useState([]);

    // Properties
    const [selectProperties, setSelectProperties] = useState(0);
    const [arrayPropiedades, setArrayPropiedades] = useState([]);

    // Panel
    const [panel, setPanel] = useState([app1]);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panelOption, setPanelOption] = useState("Screen");
    const [jsxResult, setJsxResult] = useState("");
    const [cssResult, setCssResult] = useState("");

    // ---------------------------------------- useEffects --------------------------------------------- //

    // Inicializacion
    useEffect(() => {
        setApis([apiTemplate])
        traverse(panel);
        selectItem(panel[0].children[0]);
        setSelectMenu("Tree view");
    },[])

    // Conexion con IA OPENAI
    useEffect(() => {
        if (apiKey != "") {
            fetch('http://localhost:3000/openai/conexion', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ apiKey, panel, arrayComponents, templateContainerStyles }),
              })
                .then(response => response.json())
                .then(data => {
                })
                .catch(error => {
                  console.error('Error fetching API:', error);
                });
        }
    }, [apiKey]);

    useEffect(() => {
        setNavegacion([]);
        traverse(panel)
    },[panel])

    // Zoom panel
    useEffect(() => {
      function handleScroll(event) {
        const delta = event.deltaY;
        const zoomStep = 0.02;
        
        if (delta > 0) {
          setZoomLevel(prevZoomLevel => {
            const newZoomLevel = prevZoomLevel - zoomStep;
            return newZoomLevel >= 0.1 ? newZoomLevel : 0.1;
          });
        } else if (delta < 0) {
          setZoomLevel(prevZoomLevel => prevZoomLevel + zoomStep);
        }
      }
  
      const backgroundDiv = backgroundRef.current;

      function handleMouseOver() {
        document.addEventListener('wheel', handleScroll);
      }
  
      function handleMouseOut() {
        document.removeEventListener('wheel', handleScroll);
      }
  
      backgroundDiv.addEventListener('mouseover', handleMouseOver);
      backgroundDiv.addEventListener('mouseout', handleMouseOut);
      return () => {
        backgroundDiv.removeEventListener('mouseover', handleMouseOver);
        backgroundDiv.removeEventListener('mouseout', handleMouseOut);
        document.removeEventListener('wheel', handleScroll);
      };
     
    }, []);

    // Activa la generacion de JSX y CSS
    useEffect(() => {
        const rJsx = generateJSX(panel);
        setJsxResult(`import './App.css'\n\nfunction App() {\n\nreturn (\n`+rJsx +`\t);\n}\n\nexport default App`)
        const rCss = generateCSS(panel)
        setCssResult(rCss.substring(3));
    },[panel, panelOption, navegacion])

    useEffect(() => {
        if(navegacion.length != lastNav.length){
            setLastNav(navegacion)
        } 
    },[navegacion])

    // Cada vez que se actualiza apis, se recorre los panels comparando

    // ---------------------------------------- Functions --------------------------------------------- //

    // Generar JSX a partir de plantilla 
    function generateJSX(element, indent = 0) {
        const indentStr = '  '.repeat(indent);
        let jsx = '';
      
        for (let i = 0; i < element.length; i++) {
          const item = element[i];
      
          jsx += `${indentStr}<${item.realType}`;
      
          const { id, nameNav, stylesComponent, text } = item;
      
          if (id)  jsx += ` id="${id}"`;
          if (nameNav) jsx += ` name="${nameNav}"`;
          if (stylesComponent) jsx += ` className="${nameNav+id}"`;

          item.realType != "img" ? jsx += '>' : jsx += '/>'
      
          if (text) jsx += text;
      
          if (item.children && item.children.length > 0) {
            jsx += '\n';
            jsx += generateJSX(item.children, indent + 1);
            jsx += `${indentStr}`;
          }
      
          item.realType != "img" ? jsx += `</${item.realType}>\n` : jsx += `\n`;
          
        }
        return jsx;
    }
    function convertStylesToJSX(styles) {
      const jsxStyles = Object.keys(styles)
        .map((key) => `${key}: '${styles[key]}'`)
        .join(', ');
    
      return `{${jsxStyles}}`;
    }

    // Generar CSS a partir de plantilla 
    function generateCSS(element) {
      let css = '.';
    
      for (let i = 0; i < element.length; i++) {
        const item = element[i];
    
        const { id, nameNav, stylesComponent } = item;

          let styles = convertStylesToJSX(stylesComponent);
          let stMid = styles.substring(1, styles.length-1);
          let stSingles = stMid.split(",");
          
          css += "\n\n."+nameNav+id+"{";
        for(let k=0; k<stSingles.length; k++){
          css += "\n\t"+stSingles[k].replace(" ", "");
        }
        css += "\n}";
        if (item.children && item.children.length > 0) {
          css += generateCSS(item.children);
        }
        
      }
      return css;
    }

    // Convierte panel a navegacion
    let padreAux = panel[0];
    function traverse(elements){
        elements = elements.map((element) => {
            const updatedStyles = { ...element.styles, marginLeft: element.level+'vw', display: padreAux.contract ? 'flex' : 'none' };
            return { ...element, styles: updatedStyles };
        });
        
        for(let i=0; i<elements.length; i++){
            if(elements[i].id != 0) setNavegacion((prevNavegacion) => [...prevNavegacion, elements[i]]);
            if(elements[i].children.length != undefined && elements[i].children.length > 0) {
                padreAux = elements[i];
                traverse(elements[i].children);
            }
        }
    }

    // Contrae la navegacion
    const contract = (element) => {
        const updatedElements = navegacion.map((item) => {
        if (item.id == element.id) {
            return {...item, contract: !item.contract };
        }
        return item;
        });

        const updatedPanel = { ...panel };


        const closePanel = (element_) => {
            const arr = element_.children;
            if (select && select.id !== -1 && Array.isArray(arr)) {
                const index = arr.findIndex(item => item.contract == true);
                if (index !== -1) {
                    arr[index] = {...arr[index], contract: !arr[index].contract };
                    return
                }else{
                    for(let j=0; j<arr.length; j++){
                        findPanel(arr[j])
                    }
                }
            }

        }

        const findPanel = (element_) => {
            const arr = element_.children;
            if (select && select.id !== -1 && Array.isArray(arr)) {
                const index = arr.findIndex(item => item.id === element.id);
                if (index !== -1) {
                    arr[index] = {...arr[index], contract: !arr[index].contract };
                    closePanel(arr[index])
                    return
                }else{
                    for(let j=0; j<arr.length; j++){
                        findPanel(arr[j])
                    }
                }
            }

        }
        findPanel(updatedPanel[0])

        let check = false;
        const updatedElements2 = updatedElements.map((item) => {
            
            if(element.id == item.id){
                check = true
            }else if(check){
                
                if(item.level > element.level){
                    const updatedStyles = { ...item.styles, display: 'none' };
                    return { ...item, styles: updatedStyles };
                }else{
                    check = false;
                }
            }
            return item;
        });
        
        setNavegacion(updatedElements2);
    };

    // Despliega la navegacion
    const deploy = (element) => {
        const updatedElements = navegacion.map((item) => {
            if (item.id == element.id) {
              return {...item, contract: !item.contract };
            }
            return item;
        });

        const updatedPanel = { ...panel };

        const findPanel = (element_) => {
            const arr = element_.children;
            if (select && select.id !== -1 && Array.isArray(arr)) {
                const index = arr.findIndex(item => item.id === element.id);
                if (index !== -1) {
                    arr[index] = {...arr[index], contract: !arr[index].contract };
                    return
                }else{
                    for(let j=0; j<arr.length; j++){
                        findPanel(arr[j])
                    }
                }
            }

        }
        findPanel(updatedPanel[0])

        let check = false;

        const updatedElements2 = updatedElements.map((item) => {
            
            if(item.id == element.id){
                check = true;
            }else if(check){
                
                if(item.level > element.level && item.level < (element.level+2)){
                    const updatedStyles = { ...item.styles, display: 'flex' };
                    return { ...item, styles: updatedStyles, contract: false };
                }else if(item.level <= element.level){
                    check = false;
                }
                
            }
            return item;
        })
        setNavegacion(updatedElements2);
    };

    let controladorDeSelect = null;
    const createElement = (element) => {
        const { type, stylesComponent, children, text, id } = element;
        const childElements = children.map((child) => createElement(child));

        let styles = { ...stylesComponent };
        let markElement = null;

        return React.createElement(type, { style: styles, key: id, onClick: () => {
            if(controladorDeSelect == null){
                selectItem(element);
                controladorDeSelect = "ocupado";
            }else if(element.id == -1){
                controladorDeSelect = null;
            }} 
        }, text, markElement, childElements );
    };

    function selectItem(e){
        console.log(e)
        const arr = Object.entries(e.stylesComponent).map(([clave, valor]) => ({
            clave,
            valor
        }));
        if(e.text != null) arr.unshift({ clave: "text", valor: e.text });
        if(e.data != null) arr.unshift({ clave: "data", valor: e.data });
        if(e.variable != null) arr.unshift({ clave: "variable", valor: e.variable });

        setArrayPropiedades(arr);
        setSelect(e);
    }

    // Añadir plantilla a la web
    const addComponentPanel = (element_) => {
        const element = { ...element_ };
      
        if (select.realType == "div") {
          const updatedPanel = { ...panel };
      
          let idHigh = 0;
          for (let i = 0; i < navegacion.length; i++) {
            if (idHigh < navegacion[i].id) idHigh = navegacion[i].id;
          }

          if(element.id <= idHigh){
  
                element.id = idHigh + 1;

                if (select.id == -1) {
                element.level = 0;
                }else {
                    element.level = select.level + 1;
                }
            
          }



          const updatedStyles = { ...element.styles, marginLeft: `${element.level}vw` };
          element.styles = updatedStyles;
   
          const addComp = (element_) => {
            const arr = element_.children;
            if (select && select.id !== -1 && Array.isArray(arr)) {
              const index = arr.findIndex(item =>  item.id === select.id);
              if (index !== -1) {
                setSelect(arr[index]);
                arr[index] = { ...arr[index], children: [...arr[index].children, element] };
                return;
              } else {
                for (let j = 0; j < arr.length; j++) {
                  addComp(arr[j]);
                }
              }
            }
          };

          addComp(updatedPanel[0]);
      
          setNavegacion([]);
          traverse(panel);
          
        }
    };

    const addComponentMultiplePanel = (element_) => {
        const sons = element_.children;
        const newElement = {...element_, children: []}
        addComponentPanel(newElement)
        //setSelect()
        //for(let i=0; i<sons.length; i++) addComponentPanel(sons[i])
        
    }

    // Borrar elemento
    const deleteItem = () => {
        const updatedPanel = { ...panel };
      
        const removeItem = (element_) => {
          const arr = element_.children;
          if (select && select.id !== -1 && Array.isArray(arr)) {
            const index = arr.findIndex(item => item.id === select.id);
            if (index !== -1) {
              arr.splice(index, 1); // Eliminar el elemento del array
              return;
            } else {
              for (let j = 0; j < arr.length; j++) {
                removeItem(arr[j]);
              }
            }
          }
        };
      
        removeItem(updatedPanel[0]);
      
        setNavegacion([]);
        traverse(panel);
    };

    const getDataFetch2 = (element, father) => {
        const info = JSON.parse(father.data).data;
        const vari = element.variable;
        if(vari.length > 1){
            const res = getValueFromPath(info, vari);
            return res
        }

    };

    const getDataFetch3 = (element, value) => {
        const info = JSON.parse(value);
        const vari = element.variable;
        if(vari.length > 1){
            const res = getValueFromPath(info.data, vari);
            return res
        }

    };

    const onChange = (value, key, clave) => {
        const id = select.id;
        const updatedPanel = [...panel];

        const findElement = (items, father) => {
          for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                if(clave == "text"){
                    items[i].text = value;
                }else if(clave == "nameNav"){
                    items[i].nameNav = value;
                }else if(clave == "data" && value != undefined){
                    items[i].data = value; 

                    let itemsDynamic = [];

                    const findElement5 = (items) => {
                        for (let j = 0; j < items.length; j++) {
                                if(items[j].variable != null){
                                    let getter = getDataFetch3(items[j], value);

                                    itemsDynamic.push({ item: items[j], data: getter })
                                }else if(items[j].realType == 'div'){
                                    itemsDynamic = [father]
                                }
                                if (items[j].children && items[j].children.length > 0) {
                                    if(findElement5(items[j].children)){
                                        return true;
                                    }
                                }
                           
                        }
                    }
                    findElement5(items[i].children)


                    let idHigh = 0;
                    for (let j = 0; j < navegacion.length; j++) {
                      if (idHigh < navegacion[j].id) idHigh = navegacion[j].id;
                    }

                    for(let j=0; j<itemsDynamic.length; j++){
                        for(let k=0; k<itemsDynamic[j].data.length; k++){
                            const findElement6 = (items) => {
                                for (let s = 0; s < items.length; s++) {

                                    if(itemsDynamic[j].item.id == items[s].id){

                                        idHigh++;
                                        const info = { ...items[s] }
                                        info.id = idHigh;
                                        info.text = itemsDynamic[j].data[k];
                                        console.log("INFO")
                                        console.log(info)
                                        addComponentPanel(info);
                                        
                                        return
                                    }
                                    
                                    if (items[s].children && items[s].children.length > 0) {
                                        if(findElement6(items[s].children)){
                                            return true;
                                        }
                                    }
                                }
                            }
                            console.log(itemsDynamic[j])
                            findElement6(items[i].children)
                        }
                    }

                }else if(clave == "variable"){
                    items[i].variable = value;
                        setNavegacion([]);
                        traverse(panel);
                }else{
                    items[i].stylesComponent = {...items[i].stylesComponent, [clave]: value } 
                }
                break;
            } else if (items[i].children && items[i].children.length > 0) {
              if (findElement(items[i].children, items[i])) {
                return true;
              }
            }
          }
          return false;
        };
      
        findElement(updatedPanel, null);



        const updatedNavegacion = [...navegacion];
        for(let i=0; i<updatedNavegacion.length; i++){
            if(updatedNavegacion[i].id == id){
                if(clave == "text"){
                    updatedNavegacion[i].text = value;
                }else if(clave == "nameNav"){
                    updatedNavegacion[i].nameNav = value;
                }else if(clave == "data"){
                    updatedNavegacion[i].data = value;
                }else if(clave == "variable"){
                    updatedNavegacion[i].variable = value;
                }else{
                    updatedNavegacion[i].stylesComponent = {...updatedNavegacion[i].stylesComponent, [clave]: value } 
                }
            }
        }
        setNavegacion(updatedNavegacion);
        setPanel(updatedPanel);

        if(key != null){
            const updatedArrayPropiedades = [...arrayPropiedades];
            updatedArrayPropiedades[key].valor = value;
            setArrayPropiedades(updatedArrayPropiedades);
        }


    } 

    const createNameParameter = (element, key) => {
        const { clave } = element;
        let finalName = "";
        if(clave == "justifyContent"){
            finalName = "Justify content"
        }else if(clave == "alignItems"){
            finalName = "Align items"
        }else if(clave == "backgroundColor"){
            finalName = "Background color"
        }else if(clave == "fontSize"){
            finalName = "Font size"
        }else if(clave == "fontWeight"){
            finalName = "Font weight"
        }else if(clave == "fontFamily"){
            finalName = "Font family"
        }else if(clave == "textAlign"){
            finalName = "Text align"
        }else if(clave == "borderRadius"){
            finalName = "Border radius"
        }else if(clave == "flexDirection"){
            finalName = "Flex direction"
        }else{
            finalName = clave
        }
        return React.createElement("span", { key }, finalName.charAt(0).toUpperCase() + finalName.slice(1).toLowerCase(), null );
    };

    const createParameter = (element, key) => {
        const { clave, valor } = element;

        if(clave == "nameNav"){
            return React.createElement("input", { type: "text", value: valor, onChange: (event) => onChange(event.target.value, null, clave) }, null );
        }

        if(clave == "text"){
            return React.createElement("input", { key, type: "text", value: valor, onChange: (event) => onChange(event.target.value, key, clave) }, null );
        }  

        if(clave == "data"){
            return React.createElement(
                "select",
                { key, value: valor, onChange: (event) => onChange(event.target.value, key, clave) },
                apis.map((optionValue, i) => {
                  return React.createElement("option", { key: i, value: JSON.stringify(optionValue) }, optionValue.nameVar);
                }),
              );
        }  

        if(clave == "variable"){
            return React.createElement("input", { key, type: "text", value: valor, onChange: (event) => onChange(event.target.value, key, clave) }, null );
        }  

        if (clave == "position") {
            return React.createElement(
                "select", 
                { key, value: valor, onChange: (event) => onChange(event.target.value, key, clave) },
            React.createElement("option", { value: "inherit" }, "Inherit"),
            React.createElement("option", { value: "absolute" }, "Absolute"),
            React.createElement("option", { value: "relative" }, "Relative"),
            React.createElement("option", { value: "fixed" }, "Fixed"),
            React.createElement("option", { value: "static" }, "Static"),
            React.createElement("option", { value: "sticky" }, "Sticky")
            );
        }else if(clave == "display"){
            return React.createElement("aside", { key },
            React.createElement("img", { className: valor == "block" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/505388/grid-2-horizontal.svg", onClick: () => onChange("block", key, clave) }),
            React.createElement("img", { className: valor == "flex" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/505390/grid-2-vertical.svg", onClick: () => onChange("flex", key, clave)  }),
            React.createElement("img", { className: valor == "grid" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/509128/grid.svg", onClick: () => onChange("grid", key, clave)  })
            );
        }else if(clave == "flexDirection"){
            return React.createElement("aside", { key },
            React.createElement("img", { className: valor == "column" ? 'asideImgSelect aIS2' : ' aIS2', src: "https://www.svgrepo.com/show/505388/grid-2-horizontal.svg", onClick: () => onChange("column", key, clave) }),
            React.createElement("img", { className: valor == "row" ? 'asideImgSelect aIS2' : ' aIS2', src: "https://www.svgrepo.com/show/505390/grid-2-vertical.svg", onClick: () => onChange("row", key, clave)  }),
            );
        }else if(clave == "fontWeight"){
            return React.createElement("select", { key },
            React.createElement("option", { value: "normal" }, "Normal"),
            React.createElement("option", { value: "bold" }, "Bold"),
            React.createElement("option", { value: "bolder" }, "Bolder"),
            React.createElement("option", { value: "lighter" }, "Lighter"),
            React.createElement("option", { value: "inherit" }, "Inherit"),
            React.createElement("option", { value: "initial" }, "Initial")
            );
        }else if(clave == "textAlign"){
            return React.createElement("aside", { key },
            React.createElement("img", { className: valor == "flex-start" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511168/text-align-left.svg", onClick: () => onChange("flex-start", key, clave) }),
            React.createElement("img", { className: valor == "center" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511166/text-align-center.svg", onClick: () => onChange("center", key, clave)  }),
            React.createElement("img", { className: valor == "flex-end" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511169/text-align-right.svg", onClick: () => onChange("flex-end", key, clave)  })
            );
        }else if(clave == "justifyContent"){
            const val = select.stylesComponent.flexDirection;
            return React.createElement("aside", { key },
            React.createElement("img", { className: (val == "column" && valor == "start") || (val != "column" && valor == "flex-start") ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511168/text-align-left.svg", onClick: () => onChange(val == "column" ? "start" : "flex-start", key, val == "column" ? "alignItems" : clave) }),
            React.createElement("img", { className: valor == "center" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511166/text-align-center.svg", onClick: () => onChange("center", key, val == "column" ? "alignItems" : clave)  }),
            React.createElement("img", { className: (val == "column" && valor == "end") || (val != "column" && valor == "flex-end") ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/511169/text-align-right.svg", onClick: () => onChange(val == "column" ? "end" : "flex-end", key, val == "column" ? "alignItems" : clave)  })
            );
        }else if(clave == "alignItems"){
            const val = select.stylesComponent.flexDirection;
            return React.createElement("aside", { key },
            React.createElement("img", { className: (val == "column" && valor == "flex-start") || (val != "column" && valor == "start") ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/392423/text-top-up-edit-editor-format.svg", onClick: () => onChange(select.stylesComponent.flexDirection == "column" ? "flex-start" : "start", key, select.stylesComponent.flexDirection == "column" ? "justifyContent" : clave) }),
            React.createElement("img", { className: valor == "center" ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/392409/direction-middle-text-edit-editor-format.svg", onClick: () => onChange("center", key, select.stylesComponent.flexDirection == "column" ? "justifyContent" : clave)  }),
            React.createElement("img", { className: (val == "column" && valor == "flex-end") || (val != "column" && valor == "end") ? 'asideImgSelect' : '',src: "https://www.svgrepo.com/show/392417/bottom-text-edit-editor-format-tool.svg", onClick: () => onChange(select.stylesComponent.flexDirection == "column" ? "flex-end" : "end", key, select.stylesComponent.flexDirection == "column" ? "justifyContent" : clave)  })
            );
        }else if(clave == "fontFamily"){
            return React.createElement("select", { key, value: valor, onChange: (event) => onChange(event.target.value, key, clave) },
            React.createElement("option", { value: "Courier New" }, "Courier New"),
            React.createElement("option", { value: "Franklin Gothic Medium" }, "Franklin Gothic Medium"),
            React.createElement("option", { value: "Gill Sans" }, "Gill Sans"),
            React.createElement("option", { value: "Lucida Sans" }, "Lucida Sans"),
            React.createElement("option", { value: "Segoe UI" }, "Segoe UI"),
            React.createElement("option", { value: "Times New Roman" }, "Times New Roman")
            );
        }else if(clave == "backgroundColor"){
            return React.createElement("input", { key, className: "inputColor", type: "color", value: valor, onChange: (event) => onChange(event.target.value, key, clave)})
        }

        return React.createElement("input", { key, type: "text", value: valor, onChange: (event) => onChange(event.target.value, key, clave) }, null );
    };

    // Hace utilizable search para navegar en un JSON
    function getValueFromPath(obj, path) {
        const parts = path.split('/');
        console.log("PARTS")
        console.log(parts)
        let value = obj;
        console.log(parts)
        for (let i = 0; i < parts.length; i++) {
          // eslint-disable-next-line no-prototype-builtins
          if (!Array.isArray(value) && parts[i] && value.hasOwnProperty(parts[i])) {
            value = value[parts[i]];
          }else if(Array.isArray(value) && parts[i] && value.length > 0 && parts[i] != ''){
            console.log(parts[i])
            let acc = [];
            for(let j=0; j<value.length; j++){
                if(value[j].hasOwnProperty(parts[i])){
                    acc.push(value[j][parts[i]]);
                }
            }
            value = acc;
          }
        }
        console.log(value)
        return value;
    }

    const getDataFetch = (index, element) => {
        const updatedApis = [...apis];
        let status = 404;

        fetch(element.urlFetch)
            .then(response => {
                status = response.status;
                return response.json()
            })
            .then(data => {
                // Se necesita convertir data a un formato comodo 
                const dataShow = JSON.stringify(getValueFromPath(data, updatedApis[index].search))
                data = getValueFromPath(data, updatedApis[index].search)
                let dataType = Array.isArray(data) ? "array" : typeof data;

                const updatedElement = { ...updatedApis[index], 
                    data: data, 
                    dataShow: dataShow,
                    status: status,
                    dataType: dataType,
                    nameVar: updatedApis[index].nameVar == "Write name..." ? updatedApis[index].urlFetch : updatedApis[index].nameVar
                };
                updatedApis[index] = updatedElement;
            
                setApis(updatedApis);

            })
            .catch(error => {
                console.log("Error fetching API:", error);
            });
    };

    const updateApi = (index, updatedElement) => {
        const updatedApis = [...apis];
        updatedApis[index] = updatedElement;
        setApis(updatedApis);
    };

    return (
      <div className='Templates'>
        <main>
            <div className="aside1">
                <svg onClick={() => setSelectMenu("Tree view")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z" stroke="#141414" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <svg onClick={() => setSelectMenu("Add")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#141414"></path> </g> </g></svg>
    
                <svg onClick={() => setSelectMenu("AI")} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#141414" stroke="#141414"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>ai</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Q3_icons" data-name="Q3 icons"> <g> <path d="M45.6,18.7,41,14.9V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2L24,5.9,18.5,2.2,17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4L2.4,18.7a.8.8,0,0,0-.4.8v9H2a.8.8,0,0,0,.4.8L7,33.1v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2L24,42.1l5.5,3.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l4.6-3.8a.8.8,0,0,0,.4-.7V19.4h0A.8.8,0,0,0,45.6,18.7Zm-5.1,6.8H42v1.6l-3.5,2.8-.4.3-.4-.2a1.4,1.4,0,0,0-2,.7,1.5,1.5,0,0,0,.6,2l.7.3h0v5.4l-6.6,3.1-4.2-2.8-.7-.5V25.5H27a1.5,1.5,0,0,0,0-3H25.5V9.7l.7-.5,4.2-2.8L37,9.5v5.4h0l-.7.3a1.5,1.5,0,0,0-.6,2,1.4,1.4,0,0,0,1.3.9l.7-.2.4-.2.4.3L42,20.9v1.6H40.5a1.5,1.5,0,0,0,0,3ZM21,25.5h1.5V38.3l-.7.5-4.2,2.8L11,38.5V33.1h0l.7-.3a1.5,1.5,0,0,0,.6-2,1.4,1.4,0,0,0-2-.7l-.4.2-.4-.3L6,27.1V25.5H7.5a1.5,1.5,0,0,0,0-3H6V20.9l3.5-2.8.4-.3.4.2.7.2a1.4,1.4,0,0,0,1.3-.9,1.5,1.5,0,0,0-.6-2L11,15h0V9.5l6.6-3.1,4.2,2.8.7.5V22.5H21a1.5,1.5,0,0,0,0,3Z"></path> <path d="M13.9,9.9a1.8,1.8,0,0,0,0,2.2l2.6,2.5v2.8l-4,4v5.2l4,4v2.8l-2.6,2.5a1.8,1.8,0,0,0,0,2.2,1.5,1.5,0,0,0,1.1.4,1.5,1.5,0,0,0,1.1-.4l3.4-3.5V29.4l-4-4V22.6l4-4V13.4L16.1,9.9A1.8,1.8,0,0,0,13.9,9.9Z"></path> <path d="M31.5,14.6l2.6-2.5a1.8,1.8,0,0,0,0-2.2,1.8,1.8,0,0,0-2.2,0l-3.4,3.5v5.2l4,4v2.8l-4,4v5.2l3.4,3.5a1.7,1.7,0,0,0,2.2,0,1.8,1.8,0,0,0,0-2.2l-2.6-2.5V30.6l4-4V21.4l-4-4Z"></path> </g> </g> </g> </g></svg>
                <svg onClick={() => setSelectMenu("Blockchain")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12L21 12" stroke="#141414"></path> <path d="M16 15L13.087 12.087V12.087C13.039 12.039 13.039 11.961 13.087 11.913V11.913L16 9" stroke="#141414"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#141414"></path> </g></svg>
                <svg onClick={() => setSelectMenu("3D")} fill="#141414" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <defs>  </defs> <polygon points="13 15 13 23 13 23 20 19 13 15"></polygon> <path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V12a2.0021,2.0021,0,0,1,2-2H26a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,26,28ZM6,12V26H26V12Z"></path> <rect x="6" y="6" width="20" height="2"></rect> <rect x="8" y="2" width="16" height="2"></rect> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" width="32" height="32"></rect> </g></svg>
                <svg onClick={() => setSelectMenu("Payment methods")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M2 17.0601H12" stroke="#141414"></path> <path d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z" stroke="#141414"></path> <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#141414"></path> <path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="#141414"></path> <path d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z" stroke="#141414"></path> </g></svg>
                <svg onClick={() => setSelectMenu("Database")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7C20 9.20914 16.4183 11 12 11C7.58172 11 4 9.20914 4 7C4 4.79086 7.58172 3 12 3C16.4183 3 20 4.79086 20 7Z" stroke="#141414"></path> <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="#141414"></path> <path d="M4 7V17C4 19.2091 7.58172 21 12 21C16.4183 21 20 19.2091 20 17V7" stroke="#141414"></path> </g></svg>
                <svg onClick={() => setSelectMenu("API")} fill="#141414" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z"></path> </g></svg>
            </div>
            <div className='aside2'>
                <div className='aside2title'>
                    <span>{selectMenu}</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#141414"></path> </g> </g></svg>
                </div>
                {selectMenu == "Tree view" && <>
                    <div className='asideFinder'>
                        <div>
                            <svg fill="#8e949e" viewBox="-0.04 0 31.793 31.793" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-609.503 -130.759)"> <path d="M622.914,132.759a11.41,11.41,0,1,1-11.411,11.41,11.424,11.424,0,0,1,11.411-11.41m0-2a13.41,13.41,0,1,0,13.41,13.41,13.41,13.41,0,0,0-13.41-13.41Z"></path> <path d="M640.208,162.552a1,1,0,0,1-.707-.292L631.64,154.4a1,1,0,1,1,1.414-1.414l7.861,7.86a1,1,0,0,1-.707,1.707Z"></path> </g> </g></svg>
                            <input type="text"/>
                        </div>
                    </div>
                    <p onClick={() => setSelect({ id: -1, nameNav: '' })}>App</p>
                    <div className='panelNav'>
                        {navegacion.map((e, i) => ( 
                            <button id={i} className={e.id == select.id ? "selectBtn" : ""} style={e.styles} key={i} onClick={() => { selectItem(e);}}>
                                {e.realType == "div" && <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="191px" height="191px" viewBox="-1.6 -1.6 35.20 35.20" enableBackground="new 0 0 32 32" xmlSpace="preserve" fill="#141414" stroke="#141414" strokeWidth="0.576"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#141414" d="M30.765,7.262L19.222,0.747c-1.571-0.887-4.271-0.888-5.845,0L1.834,7.262 C0.951,7.761,0.466,8.459,0.466,9.229s0.486,1.468,1.368,1.966l11.543,6.516c0.786,0.444,1.824,0.688,2.922,0.688 c1.099,0,2.137-0.245,2.923-0.688l11.543-6.516c0.883-0.498,1.369-1.196,1.369-1.966S31.647,7.761,30.765,7.262z M30.239,10.265 l-11.543,6.516c-1.238,0.699-3.556,0.7-4.794,0L2.359,10.265C1.835,9.969,1.535,9.591,1.535,9.229c0-0.363,0.3-0.74,0.824-1.037 l11.543-6.516c0.619-0.35,1.493-0.55,2.396-0.55c0.904,0,1.778,0.201,2.397,0.55l11.543,6.516c0.524,0.296,0.825,0.674,0.825,1.037 C31.064,9.591,30.764,9.969,30.239,10.265z"></path> <path fill="#141414" d="M30.765,14.099c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036s-0.301,0.74-0.825,1.036l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0L2.359,17.102 c-0.524-0.296-0.824-0.674-0.824-1.036s0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.258-0.473-0.349-0.729-0.203c-0.883,0.498-1.368,1.197-1.368,1.967s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.498,1.369-1.197,1.369-1.967 S31.647,14.597,30.765,14.099z"></path> <path fill="#141414" d="M30.765,20.804c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036c0,0.362-0.301,0.74-0.825,1.037l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0 L2.359,23.807c-0.524-0.296-0.824-0.674-0.824-1.037c0-0.362,0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.257-0.473-0.349-0.729-0.203C0.952,21.302,0.466,22,0.466,22.771s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.499,1.369-1.197,1.369-1.967 S31.647,21.302,30.765,20.804z"></path> </g> </g></svg>}
                                {e.realType == "span" && <svg viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="text-size" transform="translate(-2 -3)"> <path id="primary" d="M21,12V10H13v2" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-2" data-name="primary" d="M3,6V4H13V6" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-3" data-name="primary" d="M17,10V20m-2,0h4M8,4V20M6,20h4" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> </g> </g></svg>}
                                {e.realType == "button" && <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.705"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 10V8.5M5.5 8.5V3.5C5.5 2.94772 5.94772 2.5 6.5 2.5C7.05228 2.5 7.5 2.94772 7.5 3.5V7.5H10.8529C11.7626 7.5 12.5 8.23741 12.5 9.14706V10C12.5 12.4853 10.4853 14.5 8 14.5H7.5C5.29086 14.5 3.5 12.7091 3.5 10.5C3.5 9.39543 4.39543 8.5 5.5 8.5ZM9 5.5H11C12.3807 5.5 13.5 4.38071 13.5 3C13.5 1.61929 12.3807 0.5 11 0.5H4C2.61929 0.5 1.5 1.61929 1.5 3C1.5 4.38071 2.61929 5.5 4 5.5" stroke="#141414"></path> </g></svg>}
                                {e.realType == "img" && <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set" transform="translate(-360.000000, -99.000000)" fill="#141414"> <path d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z" id="image-picture"> </path> </g> </g> </g></svg>}
                                {e.nameNav}
                                {e.contract && e.children.length > 0 && <svg className="contractOpen" onClick={() => { contract(e); }} style={{ marginLeft: 'auto', fill: 'none', stroke: '#141414', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <title></title> <g id="chevron-bottom"> <line x1="16" x2="7" y1="20.5" y2="11.5"></line> <line x1="25" x2="16" y1="11.5" y2="20.5"></line> </g> </g></svg>}
                                {!e.contract && e.children.length > 0 && <svg style={{ marginLeft: 'auto' }} onClick={() => { deploy(e); }}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#141414"></path> </g></svg>}
                            </button>    
                        ))}
                    </div></>}
                {selectMenu == "Add" && 
                <div className='asideFinder' style={{ display: 'block', height: '100%' }}>
                    <span>Vanilla</span>
                    {arrayComponents.map((e, i) => (
                        <button key={i} className="addBtn" onClick={() => addComponentPanel(e)}>
                            {e.realType == "div" && <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="191px" height="191px" viewBox="-1.6 -1.6 35.20 35.20" enableBackground="new 0 0 32 32" xmlSpace="preserve" fill="#141414" stroke="#141414" strokeWidth="0.576"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#141414" d="M30.765,7.262L19.222,0.747c-1.571-0.887-4.271-0.888-5.845,0L1.834,7.262 C0.951,7.761,0.466,8.459,0.466,9.229s0.486,1.468,1.368,1.966l11.543,6.516c0.786,0.444,1.824,0.688,2.922,0.688 c1.099,0,2.137-0.245,2.923-0.688l11.543-6.516c0.883-0.498,1.369-1.196,1.369-1.966S31.647,7.761,30.765,7.262z M30.239,10.265 l-11.543,6.516c-1.238,0.699-3.556,0.7-4.794,0L2.359,10.265C1.835,9.969,1.535,9.591,1.535,9.229c0-0.363,0.3-0.74,0.824-1.037 l11.543-6.516c0.619-0.35,1.493-0.55,2.396-0.55c0.904,0,1.778,0.201,2.397,0.55l11.543,6.516c0.524,0.296,0.825,0.674,0.825,1.037 C31.064,9.591,30.764,9.969,30.239,10.265z"></path> <path fill="#141414" d="M30.765,14.099c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036s-0.301,0.74-0.825,1.036l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0L2.359,17.102 c-0.524-0.296-0.824-0.674-0.824-1.036s0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.258-0.473-0.349-0.729-0.203c-0.883,0.498-1.368,1.197-1.368,1.967s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.498,1.369-1.197,1.369-1.967 S31.647,14.597,30.765,14.099z"></path> <path fill="#141414" d="M30.765,20.804c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036c0,0.362-0.301,0.74-0.825,1.037l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0 L2.359,23.807c-0.524-0.296-0.824-0.674-0.824-1.037c0-0.362,0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.257-0.473-0.349-0.729-0.203C0.952,21.302,0.466,22,0.466,22.771s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.499,1.369-1.197,1.369-1.967 S31.647,21.302,30.765,20.804z"></path> </g> </g></svg>}
                            {e.realType == "span" && <svg viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="text-size" transform="translate(-2 -3)"> <path id="primary" d="M21,12V10H13v2" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-2" data-name="primary" d="M3,6V4H13V6" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-3" data-name="primary" d="M17,10V20m-2,0h4M8,4V20M6,20h4" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> </g> </g></svg>}
                            {e.realType == "button" && <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.705"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 10V8.5M5.5 8.5V3.5C5.5 2.94772 5.94772 2.5 6.5 2.5C7.05228 2.5 7.5 2.94772 7.5 3.5V7.5H10.8529C11.7626 7.5 12.5 8.23741 12.5 9.14706V10C12.5 12.4853 10.4853 14.5 8 14.5H7.5C5.29086 14.5 3.5 12.7091 3.5 10.5C3.5 9.39543 4.39543 8.5 5.5 8.5ZM9 5.5H11C12.3807 5.5 13.5 4.38071 13.5 3C13.5 1.61929 12.3807 0.5 11 0.5H4C2.61929 0.5 1.5 1.61929 1.5 3C1.5 4.38071 2.61929 5.5 4 5.5" stroke="#141414"></path> </g></svg>}
                            {e.realType == "img" && <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>image-picture</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set" transform="translate(-360.000000, -99.000000)" fill="#141414"> <path d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z" id="image-picture"> </path> </g> </g> </g></svg>}
                            <span>{e.nameNav}</span>
                        </button>
                    ))}
                    <hr />
                    <span>Prefabric</span>
                    {arrayComponentsPrefabric_.map((e, i) => (
                        <button key={i} className="addBtn" onClick={() => addComponentMultiplePanel(e)}>
                            {e.realType == "div" && <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="191px" height="191px" viewBox="-1.6 -1.6 35.20 35.20" enableBackground="new 0 0 32 32" xmlSpace="preserve" fill="#141414" stroke="#141414" strokeWidth="0.576"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#141414" d="M30.765,7.262L19.222,0.747c-1.571-0.887-4.271-0.888-5.845,0L1.834,7.262 C0.951,7.761,0.466,8.459,0.466,9.229s0.486,1.468,1.368,1.966l11.543,6.516c0.786,0.444,1.824,0.688,2.922,0.688 c1.099,0,2.137-0.245,2.923-0.688l11.543-6.516c0.883-0.498,1.369-1.196,1.369-1.966S31.647,7.761,30.765,7.262z M30.239,10.265 l-11.543,6.516c-1.238,0.699-3.556,0.7-4.794,0L2.359,10.265C1.835,9.969,1.535,9.591,1.535,9.229c0-0.363,0.3-0.74,0.824-1.037 l11.543-6.516c0.619-0.35,1.493-0.55,2.396-0.55c0.904,0,1.778,0.201,2.397,0.55l11.543,6.516c0.524,0.296,0.825,0.674,0.825,1.037 C31.064,9.591,30.764,9.969,30.239,10.265z"></path> <path fill="#141414" d="M30.765,14.099c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036s-0.301,0.74-0.825,1.036l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0L2.359,17.102 c-0.524-0.296-0.824-0.674-0.824-1.036s0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.258-0.473-0.349-0.729-0.203c-0.883,0.498-1.368,1.197-1.368,1.967s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.498,1.369-1.197,1.369-1.967 S31.647,14.597,30.765,14.099z"></path> <path fill="#141414" d="M30.765,20.804c-0.256-0.145-0.582-0.055-0.729,0.203c-0.145,0.257-0.054,0.583,0.203,0.728 c0.524,0.296,0.825,0.674,0.825,1.036c0,0.362-0.301,0.74-0.825,1.037l-11.543,6.516c-1.298,0.733-3.494,0.734-4.794,0 L2.359,23.807c-0.524-0.296-0.824-0.674-0.824-1.037c0-0.362,0.3-0.74,0.824-1.036c0.257-0.145,0.348-0.471,0.203-0.728 c-0.146-0.257-0.473-0.349-0.729-0.203C0.952,21.302,0.466,22,0.466,22.771s0.485,1.469,1.368,1.967l11.543,6.516 c0.819,0.462,1.871,0.694,2.922,0.694c1.052,0,2.104-0.231,2.923-0.694l11.543-6.516c0.883-0.499,1.369-1.197,1.369-1.967 S31.647,21.302,30.765,20.804z"></path> </g> </g></svg>}
                            {e.realType == "span" && <svg viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="text-size" transform="translate(-2 -3)"> <path id="primary" d="M21,12V10H13v2" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-2" data-name="primary" d="M3,6V4H13V6" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> <path id="primary-3" data-name="primary" d="M17,10V20m-2,0h4M8,4V20M6,20h4" fill="none" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9200000000000002"></path> </g> </g></svg>}
                            {e.realType == "button" && <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.705"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 10V8.5M5.5 8.5V3.5C5.5 2.94772 5.94772 2.5 6.5 2.5C7.05228 2.5 7.5 2.94772 7.5 3.5V7.5H10.8529C11.7626 7.5 12.5 8.23741 12.5 9.14706V10C12.5 12.4853 10.4853 14.5 8 14.5H7.5C5.29086 14.5 3.5 12.7091 3.5 10.5C3.5 9.39543 4.39543 8.5 5.5 8.5ZM9 5.5H11C12.3807 5.5 13.5 4.38071 13.5 3C13.5 1.61929 12.3807 0.5 11 0.5H4C2.61929 0.5 1.5 1.61929 1.5 3C1.5 4.38071 2.61929 5.5 4 5.5" stroke="#141414"></path> </g></svg>}
                            {e.realType == "img" && <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>image-picture</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set" transform="translate(-360.000000, -99.000000)" fill="#141414"> <path d="M368,109 C366.896,109 366,108.104 366,107 C366,105.896 366.896,105 368,105 C369.104,105 370,105.896 370,107 C370,108.104 369.104,109 368,109 L368,109 Z M368,103 C365.791,103 364,104.791 364,107 C364,109.209 365.791,111 368,111 C370.209,111 372,109.209 372,107 C372,104.791 370.209,103 368,103 L368,103 Z M390,116.128 L384,110 L374.059,120.111 L370,116 L362,123.337 L362,103 C362,101.896 362.896,101 364,101 L388,101 C389.104,101 390,101.896 390,103 L390,116.128 L390,116.128 Z M390,127 C390,128.104 389.104,129 388,129 L382.832,129 L375.464,121.535 L384,112.999 L390,118.999 L390,127 L390,127 Z M364,129 C362.896,129 362,128.104 362,127 L362,126.061 L369.945,118.945 L380.001,129 L364,129 L364,129 Z M388,99 L364,99 C361.791,99 360,100.791 360,103 L360,127 C360,129.209 361.791,131 364,131 L388,131 C390.209,131 392,129.209 392,127 L392,103 C392,100.791 390.209,99 388,99 L388,99 Z" id="image-picture"> </path> </g> </g> </g></svg>}
                            <span>{e.nameNav}</span>
                        </button>
                    ))}
                </div>}
                {selectMenu == "Blockchain" && <div className='Blockchain'>
                    <button>Connect Wallet</button>
                </div>}
                {selectMenu == "AI" && <div className='AIkey'>
                    <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)}/>
                    <p>{textoExito}</p>
                </div>}
                {selectMenu == "API" && <div className='apiEl'>
                    {apis.map((e, i) => (
                        <div key={i} className='apiElement'>
                            <div className='apiElementHeader'>
                                {!e.changeName && <span>{e.nameVar}</span>}
                                {e.changeName && <input type='text' value={e.nameVar} onChange={(event) => {
                                    const updatedElement = { ...e, nameVar: event.target.value };
                                    updateApi(i, updatedElement) }}></input>}
                                {!e.changeName && <svg onClick={() => {
                                    const updatedElement = { ...e, changeName: !e.changeName };
                                    updateApi(i, updatedElement) }} style={{ height: '1.5vh' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>}
                                {e.changeName && <svg onClick={() => {
                                    const updatedElement = { ...e, changeName: !e.changeName };
                                    updateApi(i, updatedElement) }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#141414" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 5L8 15l-5-4"></path> </g></svg>}
                                {e.contract && <svg onClick={() => {        
                                    const updatedElement = { ...e, contract: !e.contract };
                                    updateApi(i, updatedElement) }} style={{ marginLeft: 'auto', marginTop: '-.5vh', fill: 'none', stroke: '#141414', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#141414"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <title></title> <g id="chevron-bottom"> <line x1="16" x2="7" y1="20.5" y2="11.5"></line> <line x1="25" x2="16" y1="11.5" y2="20.5"></line> </g> </g></svg>}
                                {!e.contract && <svg onClick={() => {        
                                    const updatedElement = { ...e, contract: !e.contract };
                                    updateApi(i, updatedElement) }} style={{ marginLeft: 'auto' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#141414"></path> </g></svg>}
                            </div>
                            {e.contract && <div className='apiElementBody'>
                                <div className='apiElUrl'>
                                    <input type="text" name="" id="" value={e.urlFetch} onChange={(event) => {
                                      const updatedElement = { ...e, urlFetch: event.target.value, search: "/" };
                                      updateApi(i, updatedElement) }}/>
                                    <svg onClick={() => getDataFetch(i, e)} fill="#8e949e" viewBox="-0.04 0 31.793 31.793" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-609.503 -130.759)"> <path d="M622.914,132.759a11.41,11.41,0,1,1-11.411,11.41,11.424,11.424,0,0,1,11.411-11.41m0-2a13.41,13.41,0,1,0,13.41,13.41,13.41,13.41,0,0,0-13.41-13.41Z"></path> <path d="M640.208,162.552a1,1,0,0,1-.707-.292L631.64,154.4a1,1,0,1,1,1.414-1.414l7.861,7.86a1,1,0,0,1-.707,1.707Z"></path> </g> </g></svg>
                                </div>
                                <div className='apiData'>
                                    <span>Status: {e.status}</span>
                                    <span>Data type: {e.dataType}</span>
                                </div>
                                <div className='apiRoute'>
                                    <input type="text" value={e.search} onChange={(event) => {
                                      const updatedElement = { ...e, search: event.target.value };
                                      updateApi(i, updatedElement) }}/>
                                    <svg onClick={() => getDataFetch(i, e)} fill="#8e949e" viewBox="-0.04 0 31.793 31.793" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-609.503 -130.759)"> <path d="M622.914,132.759a11.41,11.41,0,1,1-11.411,11.41,11.424,11.424,0,0,1,11.411-11.41m0-2a13.41,13.41,0,1,0,13.41,13.41,13.41,13.41,0,0,0-13.41-13.41Z"></path> <path d="M640.208,162.552a1,1,0,0,1-.707-.292L631.64,154.4a1,1,0,1,1,1.414-1.414l7.861,7.86a1,1,0,0,1-.707,1.707Z"></path> </g> </g></svg>
                                </div>
                                <div className='apiResult'>
                                    
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={xonokai}
                                        >
                                        {e.dataShow}
                                    </SyntaxHighlighter>
                                </div>
                            </div>}
                        </div>
                    ))}
                    <div className='apiPlus'>
                        <svg onClick={() => {
                            const auxTemplate = {...apiTemplate};
                            setApis([...apis, auxTemplate]);
                            }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#141414"></path> </g></svg>
                        <svg onClick={() => {
                            setApis(apis.slice(0, -1));
                            }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#141414"></path> </g></svg>
                    </div>
                    </div>}
            </div>
            <div className='panel'>
                <div className='panelActions'>
                    <svg onClick={() => generateWebIA()} fill="#141414" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#141414" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></g></svg>
                </div>
                <div className='panelOptions'>
                    <button onClick={() => setPanelOption("Screen")}>Screen</button>
                    <button onClick={() => setPanelOption("jsx")}>JSX</button>
                    <button onClick={() => setPanelOption("css")}>CSS</button>
                </div>
                {panelOption == "Screen" && <>
                    <div className='selector' ref={selectorRef}></div>
                    <div className='background' ref={backgroundRef} style={{ width: panel[0].stylesComponent.width, height: panel[0].stylesComponent.height, transform: `scale(${zoomLevel})` }}>
                    {panel.map((e, i) => (
                        createElement(e, i)
                    ))}
                    </div>
                </>}
                {panelOption == "jsx" && 
                <div className='panelCode'>
                    <svg onClick={async () => await navigator.clipboard.writeText(jsxResult)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect x="6.5" y="6.5" width="9" height="13" rx="1.5" stroke="#fbfcfd"></rect> <path d="M8.5 6C8.5 5.17157 9.17157 4.5 10 4.5H16C16.8284 4.5 17.5 5.17157 17.5 6V16C17.5 16.8284 16.8284 17.5 16 17.5" stroke="#fbfcfd"></path> </g></svg>
                    <SyntaxHighlighter
                        language={panelOption}
                        style={xonokai}
                        className="codeRaw"
                        >
                        {jsxResult}
                    </SyntaxHighlighter>
                </div>
                }
                {panelOption == "css" && 
                <div className='panelCode'>
                    <svg onClick={async () => await navigator.clipboard.writeText(cssResult)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect x="6.5" y="6.5" width="9" height="13" rx="1.5" stroke="#fbfcfd"></rect> <path d="M8.5 6C8.5 5.17157 9.17157 4.5 10 4.5H16C16.8284 4.5 17.5 5.17157 17.5 6V16C17.5 16.8284 16.8284 17.5 16 17.5" stroke="#fbfcfd"></path> </g></svg>
                    <SyntaxHighlighter
                        language={panelOption}
                        style={xonokai}
                        className="codeRaw"
                        >
                        {cssResult}
                    </SyntaxHighlighter>
                </div>}
            </div>
            {select.id <= 0 && <div className='aside3'>
                <p>{select.nameNav}</p>
            </div>}
            {select.id > 0 && <div className='aside3'>
                <div className='aside3top'>
                    <span>{select.nameNav}</span>
                    {select.id != 1 && <svg onClick={() => deleteItem()} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>}
                </div>
                <div className='aside3nameNav'>
                    {createParameter({ clave: "nameNav", valor: select.nameNav }, select.id)}
                </div>
                <div className='aside3pages'>
                    <button className={selectProperties == 0 ? "select" : ""} onClick={() => { setSelectProperties(0) }}>Styles</button>
                    <button className={selectProperties == 1 ? "select" : ""} onClick={() => { setSelectProperties(1) }}>Advanced</button>
                </div>
                {selectProperties == 0 &&
                <div className="properties">
                    {arrayPropiedades.map((e, i) => (
                    <div key={i}>
                        {e.clave === "text" ? (
                        <p>Texto</p>
                        ) : e.clave === "display" ? (
                        <p>Configuración del espacio</p>
                        ) : e.clave === "width" ? (
                        <p>Medidas</p>
                        ) : null  }
                        {e.clave != "data" && e.clave != "variable" && e.clave != "display" &&
                        <div>
                            <div className="propertiesKeys">{createNameParameter(e, i)}</div>
                            <div className="propertiesValues">{createParameter(e, i)}</div>
                        </div>}
                    </div>
                    ))}
                </div>}
                {selectProperties == 1 &&
                <div className="properties">
                    {arrayPropiedades.map((e, i) => (
                    <div key={i}>
                        {(e.clave === "data" || e.clave == "variable") &&
                        <>
                            {e.clave === "data" && <p>Dynamic</p>}
                            {e.clave === "variable" && <p>Variable</p>}
                            <div>
                                <div className="propertiesKeys">{createNameParameter(e, i)}</div>
                                <div className="propertiesValues">{createParameter(e, i)}</div>
                            </div>
                        </>}
                    </div>
                    ))}
                </div>}
            </div>}
        </main>
      </div>
    )
  }
  
  export default Templates