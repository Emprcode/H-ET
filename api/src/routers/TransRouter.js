import express from "express";
import { crateTransaction } from "../model/trans/TransModel.js";

const router = express.Router();

// register

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

//login
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await getTransById();
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Transaction fetched",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to get transaction, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
