// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Status } from "../../constants";

type IData = {
  status: Status.success;
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  return res.status(200).json({ status: Status.success, data: "Hello World" });
}
