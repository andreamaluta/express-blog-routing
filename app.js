const express = require('express');

const app = express();

const port = 3000;

const postsRouter = require('./routers/posts.js');
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log('server aperto sulla porta ' + port);
})