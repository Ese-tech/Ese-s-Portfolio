import { blogPostsData } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog | Ese's Portfolio",
  description: "A collection of articles and thoughts on web development by Ese.",
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">My latest articles and thoughts on web development.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPostsData.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
