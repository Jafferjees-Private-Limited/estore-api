import { executeQuery } from "@/config/database";
import ErrorHandler from "@/common/errorHandler";

const getAllMembers = async (req, res, next) => {
  try {
    let membersData = await executeQuery("select * from stock", []);
    if (membersData.length > 0) {
      res.send(membersData);
    } else {
      next(new ErrorHandler(`No Members Found`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export { getAllMembers };
