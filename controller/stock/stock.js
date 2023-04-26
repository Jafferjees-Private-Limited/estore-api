import { executeQuery } from "@/config/database";
import ErrorHandler from "@/common/errorHandler";

const getAllstocks = async (req, res, next) => {
  try {
    let stocksData = await executeQuery("select * from stock", []);
    if (stocksData.length > 0) {
      res.send(stocksData);
    } else {
      next(new ErrorHandler(`Data not Found`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getstocksByoldcode = async (req, res, next) => {
  let oldcode = req.query.oldcode;
  try {
    let stocksData = await executeQuery(
      `select * from stock where oldcode=${oldcode}`,
      []
    );
    if (stocksData.length > 0) {
      res.status(200).json(stocksData);
    } else {
      next(new ErrorHandler(`itemcode not Found`, 404));
    }
    //res.send(stocksData);
    //res.status(200).json(stocksData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getAllstocks, getstocksByoldcode };
