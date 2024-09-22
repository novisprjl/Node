import express from 'express';
import ensureAuthenticated from '../middlewares/authProduct.js';
const router = express.Router();

router.get('/', ensureAuthenticated,(req,res) => {
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "TV",
            price: 20000
        }
    ])
});
    

export default router; 