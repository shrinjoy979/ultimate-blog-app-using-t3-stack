import slugify from "slugify";
import { writeFormSchema } from "../../../components/WriteFormModal";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const postRouter = router({
  createPost: protectedProcedure
    .input(writeFormSchema)
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { title, description, text },
      }) => {
        // create a function that checks where that title is already exist ot not

        await prisma.post.create({
          data: {
            title,
            description,
            text,
            slug: slugify(title),
            authorId: session.user.id,
          },
        });
      }
    ),

  getPosts: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const posts = await prisma.post.findMany();

    return posts;
  }),
});
