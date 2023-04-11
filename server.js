const express = require('express');
const api = require("./public/assets/routes/api-routes");
const html = require("./public/assets/routes/html-routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
