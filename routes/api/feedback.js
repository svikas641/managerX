const express =  require('express');
const router = express.Router();

// @route   GET api/feedback
// @desc    Test Route
// @access  Public

router.get('/',(req,res)=>{
	res.send('feedback Route');
})

module.exports = router;