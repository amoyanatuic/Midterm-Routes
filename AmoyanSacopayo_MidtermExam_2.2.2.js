//Display total number of films per category

const pool = require('./db');

const query = `
SELECT * FROM midterm_total_films_per_category;
`;

pool.query(query, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();

/*
CREATE or REPLACE VIEW midterm_total_films_per_category as
SELECT
    name AS "Category name", count(fc.category_id) "Film count"
FROM
    category c
Join
    film_category AS "fc"
ON fc.category_id = c.category_id
GROUP by c.category_id, name
*/