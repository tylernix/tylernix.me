import Link from 'next/link'
import DateFormatter from '../components/date-formatter'

export default function PostPreviewCompact({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <li className="mb-8">
      <h3 className="text-lg md:text-xl mb-0 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-imperial-red hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-sm leading-relaxed  truncate">{excerpt}</p>
      <div className="text-sm text-gray-400 leading-relaxed ">
        <DateFormatter dateString={date} displayDistance="true" />
      </div>
      
    </li>
  )
}
