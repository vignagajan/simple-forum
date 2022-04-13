/*
    desc: Get Topics
    route: GET /api/topics
    access: Private
*/

const getTopics = (req,res) => {
    res.status(200).json({message: 'Get Topic'})
}

/*
    desc: Set Topics
    route: POST /api/topics/:id
    access: Private
*/

const setTopics = (req,res) => {
    res.status(200).json({message: 'Set Topic'})
}

/*
    desc: Update Topics
    route: PUT /api/topics/:id
    access: Private
*/
const updateTopics = (req,res) => {
    res.status(200).json({message: `Update Topic ${req.params.id}`})
}

/*
    desc: Delete Topics
    route: DELETE  /api/topics/:id
    access: Private
*/
const deleteTopics = (req,res) => {
    res.status(200).json({message: `Delete Topic ${req.params.id}`})
}

module.exports = {
    getTopics,
    setTopics,
    updateTopics,
    deleteTopics,
}