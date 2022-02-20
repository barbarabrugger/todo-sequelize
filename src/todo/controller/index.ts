import { TodoInstance } from "../model";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";

export const readPagination = async function (req: Request, res: Response): Promise<Response> {
  try {
    const limit = req.query.limit as unknown as number || undefined;
    const offset = req.query.offset as unknown as number || undefined;

    const records = await TodoInstance.findAll({ where: {}, limit, offset });

    return res.json(records);
  } catch {
    return res.json({ msg: "fail to read", status: 500, route: "/read" });
  }
};

export const readById = async function (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const record = await TodoInstance.findOne({ where: { id }});

    return res.json(record);
  } catch {
    return res.json({ msg: "fail to read", status: 500, route: "/read/:id" });
  }
};

export const create = async function (req: Request, res: Response): Promise<Response> {
  const id = uuidv4();

  try {
    const record = await TodoInstance.create({ ...req.body, id });

    return res.json({ record, msg: "Successfully create todo" });
  } catch {
    return res.json({ msg: "fail to create", status: 500, route: "/create" });
  }
};

export const updateById = async function (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const record = await TodoInstance.findOne({ where: { id }});

    if (!record) {
      return res.json({ msg: "Can not find existing record." });
    }
    const updatedRecord = await record.update({ completed: !record.getDataValue("completed") });

    return res.json({ record: updatedRecord });
  } catch {
    return res.json({ msg: "fail to update", status: 500, route: "/update/:id" });
  }
};

export const deleteById = async function (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params;
    const record = await TodoInstance.findOne({ where: { id }});

    if (!record) {
      return res.json({ msg: "Can not find existing record." });
    }
    const deletedRecord = await record.destroy();

    return res.json({ record: deletedRecord });
  } catch {
    return res.json({ msg: "fail to update", status: 500, route: "/delete/:id" });
  }
};
