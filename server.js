const express = require ('express')
const app = express()
const port = 8000


// akses fronten di folder public
app.use (express.static('public'))
app.use (express.json())


app.get ('/info/:dinamic', (req, res) =>{
    const {dinamic} = req.params
    const { key } = req.query
    console.log (dinamic, key)
    res.status(200).json({info : 'present text'})

})


app.post ('/', (req, res)=>{
    const parcel = req.body
    console.log (parcel)
    if (!parcel){
        return res.status(400).send ({status :'failed'})
    }

    res.status(200).send({status : 'received'})
})


app.listen(port, () => console.log (`server has started on port : ${port}`))