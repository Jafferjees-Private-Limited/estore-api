import nc from "next-connect";
import { getAllMembers } from "@/controller/stock/stock";
import onError from "@/common/errorMiddleWare";

const handler = nc({ onError });
handler.get(getAllMembers);

export default handler;
