const express = require('express');
const app = express();
app.get('/numbers/add',(req,res) => {

    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    const sum = number1 + number2;
    res.json(`Sum of ${number1} and ${number2} is  ${sum}`);
    
});
app.get('/numbers/multiply',(req,res) => {

    const number1 = parseInt(req.query.num1);
    const number2 = parseInt(req.query.num2);
    const product = number1 * number2;
    res.json(`Product of ${number1} and ${number2} is  ${product}`);
    
 });
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));