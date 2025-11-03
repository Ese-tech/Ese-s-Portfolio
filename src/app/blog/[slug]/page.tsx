import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPostsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Ese's Portfolio`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const postImage = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <article className="bg-background py-12 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <p className="text-primary">{post.date}</p>
          <h1 className="font-headline mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        </header>

        {postImage && (
            <div className="relative mb-8 h-64 w-full rounded-lg md:h-96">
                <Image
                src={postImage.imageUrl}
                alt={post.title}
                data-ai-hint={postImage.imageHint}
                fill
                className="rounded-lg object-cover"
                priority
                />
            </div>
        )}
        
        <div
          className="prose prose-lg mx-auto max-w-none font-body text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
