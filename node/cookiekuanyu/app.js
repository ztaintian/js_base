const express = require('express');
const app = express();

app.get('/login', (req,res) => {
  res.cookie('user', 'jay', {maxAge:2000000, httpOniy: true});
  res.json({code:0,message: '登录成功'})
})