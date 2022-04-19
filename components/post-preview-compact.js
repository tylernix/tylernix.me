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
      <h3 className="font-electronix text-2xl md:text-3xl mb-0 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-imperial-red hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-md leading-relaxed truncate">{excerpt}</p>
      <div className="text-md text-gray-400 leading-relaxed ">
        <DateFormatter dateString={date} displayDistance="true" />
      </div>
      
    </li>
  )
}
