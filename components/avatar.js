import { TWITTER_URL } from '../lib/constants.js';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center mx-auto">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="flex flex-col text-left">
        <div className="text-lg font-bold text-prussian-blue">{name}</div>
        <a className="text-sm text-light-steel-blue border-0" href={TWITTER_URL} target="_blank">@tnix</a>
      </div>
      
    </div>
  )
}
