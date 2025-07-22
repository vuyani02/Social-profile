import { useEffect, useState } from 'react'
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa'
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Content from './Content'
import About from './About'
import Contact from './Contact';
import './css/tabs.css'

const Tabs = () => {
    type Tabs = {
        id: number,
        lebel: string,
        icon: any,
        content: any
    };

    const [activeTab, setActiveTab] = useState<number>(1);

    const tabs: Tabs[] = [
        {
            id: 1,
            lebel: "Home",
            icon: <FaHome />,
            content: <Content/>
        },

        {
            id: 2,
            lebel: "About",
            icon: <FaInfoCircle />,
            content: <About/>
        },

        {
            id: 3,
            lebel: "Projects",
            icon: <GoProjectSymlink />,
            content: <Content/>
        },
        {
            id: 4,
            lebel: "Courses",
            icon: <SiCoursera />,
            content: <Content/>
        },
        {
            id: 5,
            lebel: "Contact",
            icon: <FaPhone />,
            content: <Contact/>
        }
    ]

    const handleClick = (id: number) => {
        let str = id + '';
        document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("border"))
        document.getElementById(str)?.classList.add("border");
        setActiveTab(id);
    };

    useEffect(() => {
        handleClick(1);
    }, [])

    return (
        <section>
            <div className="tab-header">
                {tabs.map(({icon, lebel, id}) => (
                    <button key={id} id={id + ""} onClick={() => handleClick(id)} className='tab-btn'><span className="icon-lebel"><span className='icon-tab'>{icon}</span> {lebel}</span></button>
                ))}
            </div>
            {tabs.find((tab) => tab.id === activeTab)?.content}
        </section>
    )
}

export default Tabs