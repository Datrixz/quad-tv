import {MdMonitor} from "react-icons/md"

const TopBar = () => {
  return (
    <div className='font-nunito font-extrabold w-screen h-auto text-center bg-blue-500 text-4xl text-white py-4 shadow-md'>
        My TV Shows <MdMonitor className="inline-block"/>
    </div>
  )
}

export default TopBar