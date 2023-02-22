import express from "express";
import { crateTransaction } from "../model/trans/TransModel.js";

const router = express.Router();

// add

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await crateTransaction(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New transaction successfully added",
        })
      : res.json({
          status: "error",
          message: "Unable to add transaction, Please try again later",
        });
  } catch (error) {}
  next(error);
});

//get
router.get("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await getTransById();
    console.log(result);
    res.json({
      status: "success",
      message: "Transaction fetched",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
