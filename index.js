const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const db= require('./config/mongoose-connection');

const ownerRouter = require('./routes/ownerRoute');

const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/owners',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});