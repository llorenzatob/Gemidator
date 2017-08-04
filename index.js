const express = require('express')
const app = express()
var fs = require('fs');
var mm = require('music-metadata');
const util = require('util')
 

const jsonObject = { 'title': '', 'duration': '' }

mm.parseFile('drumloop.mp3', {native: true, duration:true})
  .then(function (metadata) {

    jsonObject.duration = metadata.format.duration
    jsonObject.title = 'drumloop.mp3'
  })
  .catch(function (err) {
    console.error(err.message);
  });



app.get('/', (req, res) => {
    res.send(jsonObject)
})

app.listen(3000 || env.process.port, () => {
    console.log('running at 3000')
})