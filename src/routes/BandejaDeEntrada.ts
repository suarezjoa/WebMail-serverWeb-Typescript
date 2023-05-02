import express  from "express"; // esModules

const router = express.Router();

const CorreoReci = [
    {
      id: 1,
      from: 'alice@example.com',
      subject: 'Hello from Alice',
      body: 'Hi there, how are you doing?'
    },
    {
      id: 2,
      from: 'bob@example.com',
      subject: 'Meeting tomorrow',
      body: 'Hey, just wanted to remind you about our meeting tomorrow at 10am.'
    },
    {
      id: 3,
      from: 'charlie@example.com',
      subject: 'Update on project',
      body: 'Here\'s the latest update on the project we\'re working on.'
    }
  ];

router.get('/', (req: express.Request, res: express.Response) =>{
    res.render('BandejaDeEntradaPug', { CorreoReci });
})

router.post('/', (req, res) =>{})

export default router;