import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import ViewCounter from '../components/view-counter'

export default function PostHeader({ title, coverImage, date, author, slug }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-col md:flex-row justify-center space-x-2 mb-4 text-md text-center text-gray-400">
          <DateFormatter dateString={date} displayDistance={true}/>
          <p className="hidden md:flex text-md text-gray-400">|</p>
          <ViewCounter slug={slug} />
      </div>
      <div className="flex mb-6 md:mb-12 ">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <hr className="mb-6 md:mb-12" />
    </>
  )
}
