import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.string().min(1).optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial();

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
