const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
    res.send([
        {
            id: 1,
            name: 'Rostyslav',
            age: '21',
        },
        {
            id: 2,
            name: 'John',
            age: '18',
        },
        {
            id: 3,
            name: 'Tom',
            age: '26',
        },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
