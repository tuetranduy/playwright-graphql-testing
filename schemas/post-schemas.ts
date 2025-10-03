import z from "zod";

export const getPostsResponseSchema = z.object({
    data: z.object({
        posts: z.array(
            z.object({
                id: z.string().nonempty(),
                title: z.string().nonempty(),
                body: z.string().nonempty(),
                author: z.object({
                    id: z.string().nonempty(),
                    name: z.string().nonempty(),
                    email: z.email(),
                }),
                comments: z.array(
                    z.object({
                        id: z.string().nonempty(),
                        text: z.string().nonempty(),
                    })
                ),
            })
        ),
    }),
});

export const getPostResponseSchema = z.object({
    data: z.object({
        post: z.object({
            id: z.string().nonempty(),
            title: z.string().nonempty(),
            body: z.string().nonempty(),
            author: z.object({
                id: z.string().nonempty(),
                name: z.string().nonempty(),
                email: z.email(),
            }),
            comments: z.array(
                z.object({
                    id: z.string().nonempty(),
                    text: z.string().nonempty(),
                })
            ),
        }),
    }),
});
