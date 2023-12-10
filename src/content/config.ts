import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image(),
		}),
});

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			img: image(),
		}),
});

const authors = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			img: image(),
		}),
});

export const collections = { blog, post, authors };
