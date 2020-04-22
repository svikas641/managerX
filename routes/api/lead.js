const express =  require('express');
const router = express.Router();

// @route   GET api/lead
// @desc    Test Route
// @access  Public

router.get('/',(req,res)=>{
	res.send('Lead Route');
})

module.exports = router;