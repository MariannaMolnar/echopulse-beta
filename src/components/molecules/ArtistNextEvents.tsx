import { Event } from '../../data/events'

type Props = {
    artistNextEvents: Event[] | null
}

function ArtistNextEvents({artistNextEvents}: Props) {
  return (
    <div className="flex flex-col w-full gap-3 px-3 py-3 bg-black/50 text-white rounded-xl flex-shrink-0">ArtistNextEvents</div>
  )
}

export default ArtistNextEvents