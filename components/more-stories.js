import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section class="mt-16">
      <h2 className="mt-16 mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Blog.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
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
