// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type IData = {
  data: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  return res.status(200).json({ data: "Hello World" });
}
