//modules
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());


// Routes
app.get("/AmoyanSacopayo_MidtermExam_2.1.1", async (req, res) => {
    try {
        const sql = `
        SELECT COUNT(*)
        FROM public.film    
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.1.2", async (req, res) => {
    try {
        const sql = `
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
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.1.3", async (req, res) => {
    try {
        const sql = `
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
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.2.1", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM midterm_list_of_films;
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/AmoyanSacopayo_MidtermExam_2.2.2", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM midterm_total_films_per_category;
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.3.1", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM assisted_by_staff1
        UNION
        SELECT * FROM assisted_by_staff2
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.3.2", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM assisted_by_staff2
        EXCEPT
        SELECT * FROM assisted_by_staff1
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.4.1", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM public.actor
        ORDER BY actor_id ASC
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/AmoyanSacopayo_MidtermExam_2.4.2", async (req, res) => {
    try {
        const sql = `
        SELECT * FROM public.customer
        ORDER BY customer_id ASC 
    `;
        const MidtermExam = await pool.query(sql);
        res.json(MidtermExam);
        //console.log(MidtermExam);
    } catch (err) {
        console.error(err.message);

    }
});

app.listen(3313, () => {
    console.log("server has started on port http://localhost:5000");
});
