const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
// import fetch from 'node-fetch';
const axios  = require('axios');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


 
router.get("/",(req,res) => {
    res.json({message:"working test"});
})

router.post("/submit",async (req,res) => {
    
    try {
      const rsp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${req.body.txt}`)      
      const json = await rsp.json()
      if(json.message){
        res.json({ msg: "invalid word"})
      }else{
        res.json({ msg: "valid word"})
      }
    } catch (err) {
      console.log(err)
      res.status(404).json(err)
    }

})

module.exports = router