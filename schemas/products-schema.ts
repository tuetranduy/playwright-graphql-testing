import { z } from "zod";

export const productsResponseSchema = z.object({
    data: z.object({
        products: z.array(
            z.object({
                name: z.string(),
                price: z.number(),
                categories: z.array(
                    z.object({
                        name: z.string(),
                    })
                ),
            })
        ),
    }),
});
