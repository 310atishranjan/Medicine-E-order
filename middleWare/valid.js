const {body,validationResult}=require('express-validator');
exports.valid=(req,res,next)=>{
    [
        body('email').isEmail(),
        body('name').isLength({min:5}),
        body('password').isLength({min:5}),
        (req,res,next)=>{
            const errors = validationResult(req);
            if (!errors.isEmpty())
              return res.status(422).json({errors: errors.array()});
            next();
        },
    ];
    
}
// module.exports={valid};