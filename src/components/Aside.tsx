import './css/aside.css'
import { FaHome, FaInfoCircle, FaSearch, FaUser} from "react-icons/fa"
import { IoMdSettings } from "react-icons/io";

const Aside = () => {
    return (
        <aside className='aside-container'>
            <section className='icons'>
                <FaHome className='icon'/>
                <FaUser className='icon'/>
                <FaSearch className='icon'/>
            </section>

            <search className='icons-1'>
                <IoMdSettings className='icon'/>
                <FaInfoCircle className='icon'/>
            </search>
        </aside>
    )
}

export default Aside