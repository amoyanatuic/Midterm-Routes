//Calculate the total length of films grouped by film’s rating

const pool = require('./db');

const query = `
SELECT
	rating,
	SUM( rental_duration )
FROM
	film
GROUP BY
	rating
ORDER BY
	rating;
`;

pool.query(query, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();