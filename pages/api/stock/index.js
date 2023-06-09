import nc from "next-connect";
import { getAllstocks } from "@/controller/stock/stock";
import onError from "@/common/errorMiddleWare";

const handler = nc({ onError });
handler.get(getAllstocks);
handler.get(getAllstocks);

export default handler;
