//Get the films that have the maximum replacement cost

const pool = require('./db');

const query = `
SELECT
	film_id,
	title
FROM
	film
WHERE
	replacement_cost =(
		SELECT
			MAX( replacement_cost )
		FROM
			film
    )
ORDER BY
	title;
`;

pool.query(query, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();