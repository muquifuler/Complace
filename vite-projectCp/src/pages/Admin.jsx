import './styles/Admin.css'
import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import moment from 'moment';

function Admin() {

    const { user, isAuthenticated } = useAuth0();
    const [components, setComponents] = useState([]);

    useEffect(() => {
        async function fetchAndProcessData() {
            const aux = await getComponent();
            setComponents(aux);
        }
        fetchAndProcessData();
    }, []);

    async function getComponent(){
        return fetch('http://localhost:3000/components')
        .then(response => response.json())
        .then(data => data);
    }

    async function submitForm(e) {
        e.preventDefault();

        const id = components[components.length-1].id+1;
        const tech = e.target.tech.value;
        const globalFilter = e.target.globalFilter.value;
        const techColor = whichColor(tech.toLowerCase());
        const title = e.target.title.value;
        const img = e.target.img.value;
        const createdBy = user.nickname;
        const createdById = user.sub;
        const downloads = 0;
        const precio = e.target.precio.value;
        const resume = e.target.resume.value;
        const style = e.target.style.value;
        const functionality = e.target.functionality.value;
        const code = e.target.code.value.split('|');
        const requirements = e.target.requirements.value.split('|');
        const tags = e.target.tags.value.split(',');
        const extensions = e.target.extensions.value.split(',');
        const datetime = moment().format('dddd, HH:mm:ss');
        
        const data = { id, tech, globalFilter, techColor, title, img, requirements, createdBy, createdById, downloads, precio, resume, style, functionality, code, tags, extensions, datetime };

        fetch('http://localhost:3000/components', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => e.target.reset());
    }

    function whichColor(tech){
        switch (tech.toLowerCase()) {
            case "react": return "#61DAFB";
            case "powerapps": return "#742774";
            case "angular": return "#dd0031";
            case "jquery": return "#0769ad";
            case "jsvanilla": return "gray";
            default: return "black";
        }
    }

    if(isAuthenticated){
        return (
        <form className='Admin' onSubmit={submitForm}>
            <div>
                 <div>
                    <h1>Aviso: poner todo lo que sean filtros, tags, etc en minuscula, separado por comas sin espacios.</h1>
               
                    <label htmlFor="globalFilter">Global filter: </label>
                    <select name="globalFilter">
                        <option value="all">All</option>
                        <option value="ai">AI</option>
                        <option value="web3">WEB3</option>
                    </select>
                    <label htmlFor="tech">Tecnologia principal: </label>
                    <select name="tech">
                        <option value="react">React</option>
                        <option value="powerApps">PowerApps</option>
                        <option value="angular">Angular</option>
                        <option value="jsvanilla">JS Vanilla</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="title">Titulo: </label>
                    <input type="text" name="title"/>
                    <label htmlFor="img">Imagen (url): </label>
                    <input type="text" name="img"/>
                    <label htmlFor="resume">Descripcion: (asadajsd.adhsdj.) cada parrafo acaba con .</label>
                    <textarea name="resume"></textarea>
                    <label htmlFor="requirements">Requisitos: (Separado por |)</label>
                    <textarea name="requirements"></textarea>
                </div>
                <div>
                    <label htmlFor="code">Codigo: (Separalo por |) Si es un .jsx, ponlo el primero</label>
                    <textarea name="code"></textarea>
                    <label htmlFor="tags">Tags Ej: (twitter,elonmusk,tweet) sin espacios: </label>
                    <input type="text" name="tags"/>
                    <label htmlFor="precio">Precio: (€12.48 o FREE): </label>
                    <input type="text" name="precio"/>
                    <label htmlFor="style">Style:</label>
                    <select name="style">
                        <option value="classic">Classic</option>
                        <option value="modern">Modern</option>
                        <option value="minimal">Minimal</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="functionality">Functionality: </label>
                    <select name="functionality">
                        <option value="search">Search</option>
                        <option value="calendar">Calendar</option>
                        <option value="buttons">Buttons</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="extensions">Extensiones Ej: (.jsx,.tsx,.js): en el mismo orden que el codigo</label>
                    <input type="text" name="extensions"/>
                    <input style={{ marginTop: '4vh' }} type="submit" />
                </div>
            </div>
            
        </form>
    )}else{
        <h1>Acceso prohibido, necesitar ser administrador...</h1>
    }
}
  
export default Admin