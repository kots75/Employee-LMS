import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {}
interface CustomResponse extends Response {}

export default (
  req: CustomRequest,
  res: CustomResponse,
  next: NextFunction
) => {
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  next();
};
