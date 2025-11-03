import { blogPostsData } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPreview() {
  const latestPosts = blogPostsData.slice(0, 2);

  return (
    <section id="blog-preview" className="bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">My latest articles and thoughts on web development.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
