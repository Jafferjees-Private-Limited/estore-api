import nc from "next-connect";
import onError from "@/common/errorMiddleWare";

import { getstocksByoldcode } from "@/controller/stock/stock";

const handler = nc({ onError });
handler.get(getstocksByoldcode);

export default handler;
