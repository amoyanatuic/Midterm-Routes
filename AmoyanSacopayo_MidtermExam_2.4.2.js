const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//Middleware
app.use(cors());
app.use(express.json());


//Routes    
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

/*
CREATE OR REPLACE FUNCTION number_of_customer()
RETURNS integer AS $numberofcustomer$
    DECLARE
        numberofcustomer integer;
    BEGIN
        SELECT COUNT(*) INTO numberofcustomer
        FROM public.customer;
    return numberofcustomer;
END ;
$numberofcustomer$
LANGUAGE plpgsql;
*/