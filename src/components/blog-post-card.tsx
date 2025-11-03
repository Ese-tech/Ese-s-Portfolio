import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const postImage = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block">
        {postImage && (
          <div className="relative aspect-video w-full">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Link>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link href={`/blog/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
