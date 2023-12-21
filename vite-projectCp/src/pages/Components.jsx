import { useState, useEffect, useRef } from 'react'
import ViewCode from '../components/ViewCode'
//import InitContent from '../components/InitContent'

import './styles/Components.css'

function Components() {

    const [compsRaw, setCompsRaw] = useState([]); // array de componentes recien traidos del backend
    const [comps, setComps] = useState([]); // matriz de componentes para mostrar, filtrados y de 2 en 2

    const [numElements, setNumElements] = useState(6);
    const [btnSelect, setBtnSelect] = useState('all');
    const [scrollLeft, setScrollLeft] = useState(false);
    const [scrollRight, setScrollRight] = useState(true);

    const [tag, setTag] = useState('');
    const [searchValue, setSearchValue] = useState("");
    const [selectedOptionsTech, setSelectedOptionsTech] = useState([]);
    const [selectedOptionsStyle, setSelectedOptionsStyle] = useState([]);
    const [selectedOptionsFunc, setSelectedOptionsFunc] = useState([]);

    const scrollRef = useRef(null);
  
    function scroll(direction) {
        const move = direction == 'left' ? -100 : 100;
        scrollRef.current.scrollBy({ left: move, behavior: 'smooth' });
        if(scrollRef.current.scrollLeft == 0 && move == 100) setScrollLeft(true);
        if(scrollRef.current.scrollLeft <= 100 && move == -100) setScrollLeft(false);

        const finalRight = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        if(scrollRef.current.scrollLeft >= finalRight-100 && move == -100) setScrollRight(true);
        if(scrollRef.current.scrollLeft >= finalRight-100 && move == 100) setScrollRight(false);
    }

    const handleSearchChange = (event) => setSearchValue(event.target.value);
    const handleCheckboxChange = (option, selectedOptions, setSelectedOptions) => {
        if (!selectedOptions.includes(option)) {
          setSelectedOptions([...selectedOptions, option]);
        } else {
          setSelectedOptions(selectedOptions.filter((item) => item !== option));
        }
    };
      
    const handleCheckboxChangeTech = (option) => handleCheckboxChange(option, selectedOptionsTech, setSelectedOptionsTech);
    const handleCheckboxChangeStyle = (option) => handleCheckboxChange(option, selectedOptionsStyle, setSelectedOptionsStyle);
    const handleCheckboxChangeFunc = (option) => handleCheckboxChange(option, selectedOptionsFunc, setSelectedOptionsFunc);

    function search(){
        let components = compsRaw;

        // Del mas nuevo al mas antiguo
        components = components.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

        // Tag
        if(tag != '') components = components.filter((item) => item.tags.includes(tag));

        // Filter
        if(btnSelect != 'all') components = components.filter((item) => item.globalFilter == btnSelect);

        // Tech, Style, Functionality
        if (selectedOptionsTech.length !== 0 || selectedOptionsStyle.length !== 0 || selectedOptionsFunc.length !== 0) {
            components = components.filter((item) =>
            (selectedOptionsTech.length === 0 || selectedOptionsTech.includes(item.tech)) &&
            (selectedOptionsStyle.length === 0 || selectedOptionsStyle.includes(item.style)) &&
            (selectedOptionsFunc.length === 0 || selectedOptionsFunc.includes(item.functionality)));
        }
        
        // Title, Resume
        if(searchValue != ""){ 
            // Primero saldran los que coincidan en titulo, despues los que coincidan en descripcion, 
            // y despues los demas
            let compsTitle = components.filter((item) => {
                return item.title.includes(searchValue);
            });

            let compsResume = components.filter((item) => {
                return !item.title.includes(searchValue) &&
                item.resume.includes(searchValue);
            });

            let compsOther = components.filter((item) => {
                return !item.title.includes(searchValue) &&
                !item.resume.includes(searchValue);
            });

            components = [...compsTitle, ...compsResume, ...compsOther];
        }

        return components;
    }
    useEffect(() => {
        async function fetchAndProcessData() {
            setCompsRaw(await getComponents());
        }
        fetchAndProcessData();
    },[]);

    useEffect(() => {
        if(compsRaw.length != 0){
            const components = search(compsRaw);
            let aux = [], arrayDeArrays = []
            let max = numElements < components.length ? numElements : components.length;
            for(let i=0; i<max; i++){
              if(i%2==0 && i != 0){
                  arrayDeArrays.push(aux)
                  aux = []
              }
              aux.push(components[i])
            }
            arrayDeArrays.push(aux)
            setComps(arrayDeArrays);
        }
    }, [tag, compsRaw, numElements, searchValue, selectedOptionsTech, selectedOptionsStyle, selectedOptionsFunc, btnSelect]);

    async function getComponents(){
        return fetch('http://localhost:3000/components')
        .then(response => response.json())
        .then(data => data);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [numElements]);

    const handleScroll = () => {
        const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
        if(distanceToBottom <= 600){
            setNumElements(numElements+6);
        } 
    }

  return (
    <div className='Comps'>
        <div className='topfilters'>
            <div className='finder'>
                <svg fill="#8e949e" viewBox="-0.04 0 31.793 31.793" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-609.503 -130.759)"> <path d="M622.914,132.759a11.41,11.41,0,1,1-11.411,11.41,11.424,11.424,0,0,1,11.411-11.41m0-2a13.41,13.41,0,1,0,13.41,13.41,13.41,13.41,0,0,0-13.41-13.41Z"></path> <path d="M640.208,162.552a1,1,0,0,1-.707-.292L631.64,154.4a1,1,0,1,1,1.414-1.414l7.861,7.86a1,1,0,0,1-.707,1.707Z"></path> </g> </g></svg>
                <input type="text" value={searchValue} onChange={handleSearchChange} placeholder="Search for components..."/>
            </div>
            <div className='tags' ref={scrollRef}>
                {scrollLeft &&
                <svg onClick={() => scroll('left')} style={{ left: '30.8%' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#8e949e"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Left" points="15.5 5 8.5 12 15.5 19" stroke="#8e949e"></polyline> </g> </g> </g></svg>}
                {Array.from(new Set(compsRaw
                    .flatMap(item => item.tags)))
                    .map((e) => (
                        <button key={e} style={{ backgroundColor: tag == e ? '#d8e1e9' : ''}} onClick={() => tag == e ? setTag('') : setTag(e)}>{"#"+e.toUpperCase()}</button>
                ))}
                {scrollRight && 
                <svg onClick={() => scroll('right')} style={{ right: '9.8%' }} width="201px" height="201px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#8e949e"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Right" points="8.5 5 15.5 12 8.5 19" stroke="#8e949e"></polyline> </g> </g> </g></svg>}
            </div>
        </div>
        <div className='content'>
            <div className='filters'>
                <div>
                    <h3>Filters</h3>
                    <div>
                        <button style={{ borderRadius: '3px 0 0 3px'}} className={btnSelect == 'all' ? "btnSelect" : ""} onClick={() => setBtnSelect('all')}>ALL</button>
                        <button style={{ borderLeft: 'none', borderRight: 'none' }} className={btnSelect == 'ai' ? "btnSelect" : ""} onClick={() => setBtnSelect('ai')}>AI</button>
                        <button style={{ borderRadius: '0 3px 3px 0'}} className={btnSelect == 'web3' ? "btnSelect" : ""} onClick={() => setBtnSelect('web3')}>WEB3</button>
                    </div>
                    <hr />
                    <p>Technologies</p>
                        <fieldset>
                            {compsRaw
                            .filter((e, i, arr) => arr.findIndex(t => t.tech === e.tech) === i)
                            .map((e, i) => (
                                <div key={i}><input type="checkbox" name={e.tech} value={e.tech} id={e.tech} onChange={() => handleCheckboxChangeTech(e.tech)}/>
                                <label htmlFor={e.tech}>{e.tech.charAt(0).toUpperCase()+e.tech.slice(1)}</label></div>
                            ))}
                        </fieldset>
                    <p>Style</p>
                        <fieldset>
                            {compsRaw
                            .filter((e, i, arr) => arr.findIndex(t => t.style === e.style) === i)
                            .map((e, i) => (
                                <div key={i}><input type="checkbox" name={e.style} value={e.style} id={e.style} onChange={() => handleCheckboxChangeStyle(e.style)}/>
                                <label htmlFor={e.style}>{e.style.charAt(0).toUpperCase()+e.style.slice(1)}</label></div>
                            ))}
                        </fieldset> 
                    <hr />
                    <fieldset>
                        {compsRaw
                            .filter((e, i, arr) => arr.findIndex(t => t.functionality === e.functionality) === i)
                            .map((e, i) => (
                                <div key={i}><input type="checkbox" name={e.functionality} value={e.functionality} id={e.functionality} onChange={() => handleCheckboxChangeFunc(e.functionality)}/>
                                <label htmlFor={e.functionality}>{e.functionality.charAt(0).toUpperCase()+e.functionality.slice(1)}</label></div>
                        ))}
                    </fieldset>
                </div>
            </div>
            <div className='components'>
                {comps.map((e, i) => (
                <div key={i}>
                    {e.map((ee, ii) => (
                        <ViewCode key={ii} component={ee}/>
                    ))}
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Components
