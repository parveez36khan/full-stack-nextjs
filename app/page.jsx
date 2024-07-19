import Link from 'next/link';
import prisma from '../lib/prisma';
import Post from './components/Post';

async function getPost(){
  const post = await prisma.post.findMany({
    where: {
     published:true
    },
    include: {
      author: {
        select: { name: true },
      }
    }
  });
  return post;
}
export default async function Home() {
  const posts=await getPost();
  console.log(posts)
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl text-center mb-8">Feeds</h1>
        <Link className="text-4xl text-center mb-8" href={'/add-post'}>add post</Link>
        <div className="flex flex-col items-center">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author ? post.author.name : 'Unknown'}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
