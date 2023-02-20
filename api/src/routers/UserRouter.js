import express from 'express'

const router = express.Router()

// register

router.post("/", (req, res, next) => {
    try {
        console.log(req.body)
        res.json({
          status: "success",
          message: "success",
        });
    } catch (error) {
        next(error)
    }
  });

  export default router;