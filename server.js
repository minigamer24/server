const { error } = require('console')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
app.use(cors())
const fs = require('fs')
const { url } = require('inspector')

const save_file = data => {
  // save x,y,url to a file
  const bling_bling_boy = `x is ${data.x}, y is ${data.y}, url is ${data.url}`
  const read = fs.readFile
  fs.readFile('books.txt', 'utf8', function(err, data){
    console.log(data)
    console.log('readFile called')
})
  fs.writeFile("books.txt", bling_bling_boy, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Bling bling boy",data);
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  })
}
app.get('/place', (req, res) => { 
  const r = req.query
  const [x,y,url] = [r.x,r.y,r.url]
  console.log("result",x,y,url)
  save_file({x,y,url})
  console.log({x,y,url})
  res.send("done")
})
app.get('/fish/:x/:y/:url', function(req, res, next) {
  const r = req.params
  save_file(r)
  res.send("hello")
  console.log(`${r.x} , ${r.y} , ${r.url}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
