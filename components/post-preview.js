import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="font-electronix text-3xl mb-2 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-md mb-6 text-gray-400">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-6">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
