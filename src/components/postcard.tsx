import Link from 'next/link'

//export function PostCard ( post ){
const PostCard = ({ post }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex mt-10">
        <div className="w-1/3">
          <img className="w-full h-full object-cover" src={`images/${post.slug}/${post.image}`} alt={post.title} />
        </div>
        <div className="p-4 w-2/3">
          <h2 className="text-2xl font-semibold mb-2"><Link href={`/post/${post.slug}`} className="hover:text-gray-700">{post.title}</Link></h2>
          <p className="text-gray-600 mb-2">{post.publishedAt}</p>
          <p className="text-gray-700">{post.summary}</p>
          <Link href={`/blog/${post.slug}`} className="whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600">Continue reading</Link>
        </div>
      </div>
    )
  }
  
  export default PostCard;