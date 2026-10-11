const { Router } = require('express')
const router = Router()


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages})
})

router.get('/new', (req,res) => {
    res.render('form', { title: 'New Message' })
})

router.post('/new', (req,res) => {
    const messageUser = req.body.messageUser
    const messageText = req.body.messageText

    messages.push({ text: messageText, user: messageUser, added: newDate()})

    res.redirect('/')
})

router.get("/message/:id", (req, res) => {
  const message = messages[Number(req.params.id)];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { title: "Message Details", message: message });
});

module.exports = router