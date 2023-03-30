const express = require('express')
const app = express()
const port = 3000

const save_file = (x,y,url) => {
  // save x,y,url to a file
}
app.get('/place', (req, res) => { 
  const r = req.query
  const [x,y,url] = [r.x,r.y,r.url]
  console.log("result",x,y,url)
  res.send("done")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
