import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

// TypeScript interfaces
export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface PostPreview extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

// Path to blog content directory
const postsDirectory = path.join(process.cwd(), "content", "blog");

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Parse a single MDX file and return post data
 */
function parsePost(filePath: string, slug: string): Post {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as PostFrontmatter;
  const readTime = readingTime(content);

  return {
    slug,
    content,
    readingTime: `${readTime.minutes.toFixed(0)} min read`,
    ...frontmatter,
  };
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    return parsePost(filePath, slug);
  } catch (error) {
    console.error(`Error reading post: ${slug}`, error);
    return null;
  }
}

/**
 * Get all posts with previews (frontmatter + reading time)
 * Sorted by date (newest first)
 */
export function getAllPosts(): PostPreview[] {
  const slugs = getAllPostSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;

      const { content, ...preview } = post;
      return preview as PostPreview;
    })
    .filter((post): post is PostPreview => post !== null);

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): PostPreview[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

/**
 * Search posts by title or description
 */
export function searchPosts(query: string): PostPreview[] {
  const lowerQuery = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery),
  );
}
