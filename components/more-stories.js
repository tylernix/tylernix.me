import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section class="mt-16">
      <h1 className="flex mt-16 mb-8 text-6xl md:text-7xl tracking-tighter leading-tight text-prussian-blue">Blog <span className="text-6xl md:text-7xl text-imperial-red" >.</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:gap-y-32 gap-x-20 md:gap-x-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
