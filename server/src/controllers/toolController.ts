import { Request, Response } from "express";
import Tool from "../models/Tool";

export const getTools = async (_req: Request, res: Response) => {
  try {
    const tools = await Tool.find();
    res.json(tools);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tools" });
  }
};

export const createTool = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const newTool = new Tool({ name, description });
    await newTool.save();

    res.status(201).json(newTool);
  } catch (error) {
    res.status(400).json({ error: "Failed to create tool" });
  }
};
