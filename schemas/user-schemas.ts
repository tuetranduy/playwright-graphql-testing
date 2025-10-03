import { z } from "zod";

export const usersResponseSchema = z.object({
    data: z.object({
        users: z.array(
            z.object({
                id: z.string().nonempty(),
                name: z.string().nonempty(),
                email: z.email(),
                posts: z.array(z.object({ title: z.string().nonempty() })).optional(),
                comments: z.array(z.object({ text: z.string().nonempty() })).optional(),
            })
        ),
    }),
});
