import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-12 text-md text-center text-gray-400">
          <DateFormatter dateString={date} displayDistance={true}/>
        </div>
      <div className="flex mb-6 md:mb-12 ">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <hr className="mb-6 md:mb-12" />
    </>
  )
}
