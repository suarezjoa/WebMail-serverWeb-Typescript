import express from 'express';
import path from 'path';
import RoutesBandejaDeEntrada from './routes/RoutesBandejaDeEntrada';

const app = express();
const PORT = 3000;

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Set view engine to Pug
app.set('view engine', 'pug');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (_req: express.Request, res: express.Response) => {
  res.render('index', { });
  app.use('/RoutesBandejaDeEntrada', RoutesBandejaDeEntrada);
});


// Start server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});