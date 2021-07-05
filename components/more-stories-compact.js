import PostPreviewCompact from '../components/post-preview-compact'
import PageTitle from '../components/page-title'

export default function MoreStoriesCompact({ posts }) {
  return (
    <section class="mt-16 max-w-4xl mx-auto">
      <PageTitle>Blog</PageTitle>
      <ul class="list-disc list-outside mx-4 md:mx-0">
        {posts.map((post) => (
            <PostPreviewCompact
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
      </ul>
    </section>
  )
}
