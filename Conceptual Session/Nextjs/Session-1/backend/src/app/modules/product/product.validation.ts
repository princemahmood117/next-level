import { z } from "zod";

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Product description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    category: z.string()
  }),
});

export const productValidation = {
  createProductValidationSchema
};
