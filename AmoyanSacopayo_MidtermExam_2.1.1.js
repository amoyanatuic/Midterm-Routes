//Get the total number of films

const pool = require('./db');

const query = `
SELECT COUNT(*)
FROM public.film
`;

pool.query(query, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();