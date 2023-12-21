const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/components/:id', (req, res) => {
    const componentId = req.params.id; // Obtener el ID del parámetro de la URL
    fs.readFile('./json/componentsData.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error al leer el archivo JSON' });
      }
      const components = JSON.parse(data);
      const component = components.find(c => c.id == componentId); // Buscar el componente por su ID

      if (!component) {
        return res.status(404).json({ message: 'Componente no encontrado' });
      }
      res.json(component);
    });
});

app.get('/components', (req, res) => {
    fs.readFile('./json/componentsData.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error al leer el archivo JSON' });
        }
        res.json(JSON.parse(data));
    });
});

app.get('/openai/prompt', (req, res) => {
    /*const apiKey = process.env.OPENAI_API_KEY;
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const prompt = req.query.prompt;
      const chat_completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json(chat_completion);
    } catch (error) {
      console.error('Error fetching API:', error);
      res.status(500).json({ error: 'Error fetching API' });
    }*/
});

app.post('/components', (req, res) => {
    let newComponent = req.body;

    fs.readFile('./json/componentsData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al leer el archivo');
        }

        let components = JSON.parse(data);
        components.push(newComponent);

        fs.writeFile('./json/componentsData.json', JSON.stringify(components), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al escribir en el archivo');
            }
            return res.status(200).send(newComponent);
        });
    });
});
app.post('/openai/conexion', async (req, res) => {
  const { apiKey, panel, arrayComponents, templateContainerStyles } = req.body;

  if (!apiKey) {
    return res.status(400).json({ error: 'API key is required' });
  }

  try {
    const response = await generatePrompt(apiKey, panel, arrayComponents);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

async function generatePrompt(apiKey, panel, arrayComponents) {
  const prompt = `Quiero que me devuelvas un JSON que empiece en objeto, a partir de esta estructura: ${panel[0]}(UTILIZALA) con estos componentes disponibles: ${arrayComponents} RESPETA LOS NOMBRES DE LAS PROPIEDADES, es una estructura jerárquica por los children`;

  try {
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.complete({
      model: 'text-davinci-003', // Actualiza el modelo a uno más reciente, por ejemplo, text-davinci-004
      prompt: prompt,
      maxTokens: 4000,
      temperature: 0.2,
    });

    return completion.choices[0].text.trim();
  } catch (error) {
    throw new Error(`OpenAI request failed with status code ${error.response.status}`);
  }
}

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
