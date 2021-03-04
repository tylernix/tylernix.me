import Link from 'next/link'

export default function PostPreviewCompact({
  title,
  excerpt,
  slug,
}) {
  return (
    <li className="mb-8">
      <h3 className="text-lg md:text-xl mb-2 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-imperial-red hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6 truncate">{excerpt}</p>
    </li>
  )
}
