const express = require('express')
const app = express()
const fun_ctrl = require('./controllers/fun_controller')

app.use(express.json())

app.get('/api/events', fun_ctrl.getAllEvents)
app.get('/api/event/:id', fun_ctrl.getEventById)
app.post('/api/addEvent', fun_ctrl.addEvent)

const PORT = 3333
app.listen(PORT, () => console.log(`magic is happening on ${PORT}`))