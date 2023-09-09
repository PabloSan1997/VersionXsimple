import express from 'express';

const router = express();

router.get('/', (req, res)=>{
    res.json({message:'Sou users'});
});


export default router;