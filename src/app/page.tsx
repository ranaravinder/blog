import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from '../lib/metrics';
import { allBlogs } from 'contentlayer/generated';
import  PostCard  from '../components/postcard';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
  AzureBadge,
  LinkedInIcon
} from '../components/icons';
import { name, about, bio, avatar, blogTitle, blogTagline } from '../lib/info';

export const revalidate = 60;
const env = process.env;

export async function generateMetadata({params}): Promise<Metadata | undefined> {  
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `${env.HOST}${image}`
    : `${env.HOST}/api/og?title=${title}`;

    
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${env.HOST}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      {

        allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <PostCard key={post.title} post={post}></PostCard>
          ))
      }
    </section>
  );
}