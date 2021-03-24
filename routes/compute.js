var express = require('express');
var router = express.Router();
var evaluate;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    evaluate=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(evaluate == 0)
      evaluate=Math.random()
    
    res.write('Math.log applied to '+evaluate+" is "+Math.log(evaluate)+"\n");
    res.end('Math.log10 applied to '+evaluate+" is "+Math.log10(evaluate));
 });

module.exports = router;