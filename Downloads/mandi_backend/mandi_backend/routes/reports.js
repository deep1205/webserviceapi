const router = require('express').Router();
let Report = require('../models/reports.model');

router.route('/:id').get((req, res) => {
  Report.findById(req.params.id)
    .then(report => res.json(report))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  Report.findOne({marketID:req.body.marketID,cmdtyID:req.body.cmdtyID},(err,report)=>{
      if(err){
          return res.status(400).json('Error:'+err)
      }
      if(report){
          report.users.push(req.body.userID)
          report.price=(report['price']+Number(req.body.price)/Number(req.body.convFctr))/2
          report.save()
          .then((report)=>res.json('Success '+report._id))
          .catch(err=>res.status(400).json('Error: '+err))
      }
      else{
        users=Array(req.body.userID)
        marketID=req.body.marketID
        marketName=req.body.marketName
        cmdtyID=req.body.cmdtyID
        marketType=req.body.marketType
        cmdtyName=req.body.cmdtyName
        priceUnit="Kg"
        price=Number(req.body.price)/Number(req.body.convFctr)

      const newreport=new Report({
        users:users,
        marketID:marketID,
        marketName:marketName,
        cmdtyID:cmdtyID,
        marketType:marketType,
        cmdtyName:cmdtyName,
        priceUnit:priceUnit,
        price:price,
      })
    newreport.save()
    .then((report)=>res.json('Success  '+report._id))
    .catch(err=>res.status(400).json('ERROR:'+err))
    }
  })
});

module.exports = router;