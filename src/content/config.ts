import { defineCollection, z } from 'astro:content';

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

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { post, authors, blog };
