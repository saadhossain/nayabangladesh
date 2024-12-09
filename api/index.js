const express = require('express');
//Initialize the App
const app = express();

const port = 4000;

//Import the Routers
const newsRoutes = require('./routes/news.router');
const categoryRoutes = require('./routes/category.router');
const tagRoutes = require('./routes/tag.router');
const userRoutes = require('./routes/user.router');

//Import the DB connection function
const connectBD = require('./lib/connectDB');
//Require Cors
const cors = require('cors');
const corsOptions = require('./middlewares/cors');

//Middlewares
app.use(express.json());
app.use(cors(corsOptions));

//Connect the Database
connectBD();

//Initialize the routes
app.use('/news', newsRoutes);
app.use('/category', categoryRoutes);
app.use('/tag', tagRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Server Running...');
});

app.listen(port, () => {
    console.log(`Server Running on Port:`, port);
});
