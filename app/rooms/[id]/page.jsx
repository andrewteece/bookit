import Heading from '@/components/Heading'
import rooms from '@/data/rooms.json'

const RoomPage = ({ params }) => {
  const { id } = params
  const room = rooms.find((room) => room.$id === id)
  if (!room) {
    return <Heading title='Room Not Found' />
  }
  return (
    <>
      <Heading title={room.name} />
    </>
  )
}

export default RoomPage
