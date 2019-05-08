let events = [
    {id: 1, name: 'rollerblading', funLevel: 7.5}, 
    {id: 2, name: 'iceblocking', funLevel: 8}
]

module.exports = {
    getAllEvents: (req, res) => {
        res.status(200).send(events)
    },
    getEventById: (req, res) => {
        const event = events.filter((event) => {
            return event.id === +req.params.id
        })
        res.status(200).send(event[0]) //this allows postman to return the actual data so you won't need to look in your terminal for the info
    },
    addEvent: (req, res) => {
        let id = events[events.length - 1].id + 1
        const newEvent = {
            name: req.body.name,
            funLevel: req.body.funLevel,
            id: id
        }
        events = [...events, newEvent]
        res.status(200).send(newEvent)
    }
}