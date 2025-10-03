import z from "zod";

export const validateResponse = <T>(schema: z.ZodSchema<T>, response: unknown): boolean => {
    const validationResult = schema.safeParse(response);
    if (!validationResult.success) {
        throw new Error(`Zod validation failed: ${validationResult.error?.message}`);
    }

    return validationResult.success;
};
