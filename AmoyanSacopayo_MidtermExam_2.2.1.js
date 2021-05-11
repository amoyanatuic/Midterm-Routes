//Display the list of films (View name: midterm_list_of_films)

const pool = require('./db');

const query = `
SELECT * FROM midterm_list_of_films;
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
CREATE or REPLACE VIEW midterm_list_of_films AS
SELECT a.film_id AS "fid", a.title AS "title", c.name AS "category", a.rental_rate AS "price", a.rating AS "rating",
    array_to_String(array_agg(CONCAT(d.first_name, ' ', d.last_name)), ',') AS Actors
FROM public.film AS "a"
JOIN film_category AS "fc"
ON a.film_id = fc.film_id
Join category AS "c"
ON fc.category_id = c.category_id
JOIN film_actor AS "fa"
ON a.film_id = fa.film_id
JOIN actor AS "d" ON Fa.actor_id = d.actor_id
GROUP BY a.film_id, a.title, c.name;
*/