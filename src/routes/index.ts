import express, {Request,Response} from 'express';
const router = express.Router();

router.get("/", async function (req:Request, res:Response) {
  return res.status(200).json({ success: true, message: "Hell Yeah!" });
});

module.exports = router;