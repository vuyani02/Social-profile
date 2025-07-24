import { FaCamera, FaBell } from "react-icons/fa"
import { useState } from "react"

const Profile = () => {

    const [coverImg, setCoverImg] = useState<string>('tabs-img/Document - Google Chrome 2025_05_31 17_09_29.png')
    const [profileImg, setProfileImg] = useState<string>('tabs-img/Document - Google Chrome 2025_05_31 18_38_27.png')
    const [Subscribed, setSubscribe] = useState<boolean>(false)
    const [color, setColor] = useState<string>('red')

    const handleCoverImg = (event: any) => {
        if(event.target.files[0]){
            setCoverImg(URL.createObjectURL(event.target.files[0]))
        }
    }

    const handleProfileImg = (event: any) => {
        if(event.target.files[0]){
            setProfileImg(URL.createObjectURL(event.target.files[0]))
        }
    }

    const handleSub =  () => {
        setSubscribe(!Subscribed)
        setColor(color === 'red' ? 'rgb(173, 0, 0)' : 'red')
    }

    return (
        <section>
            <img src={coverImg} className="cover-img" alt="Cover image" />
                <button className="camera">
                    <label htmlFor="input-1"><FaCamera className="cam"/></label>
                    <input 
                    type="file"
                    id="input-1"
                    accept="image/*"
                    onChange={handleCoverImg}
                    className="input"/>
                </button>

                <section className="details">
                    <div>
                        <img src={profileImg} alt="Profile image" className="profile-img"/>
                        <button className="camera profile-cam">
                            <label htmlFor="input-2"><FaCamera className="cam"/></label>
                            <input 
                            type="file"
                            id="input-2"
                            accept="image/*"
                            onChange={handleProfileImg}
                            className="input"/>
                        </button>
                    </div>
                    <div>
                        <h1 className="name">Vuyani Meson</h1>
                        <p className="subscribers">1M Subcribers</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, quae. ipsum dolor sit amet consectetur adipisicing elit. Ea provident illum quas accusamus aliquid aut, perspiciatis soluta? Tempora, possimus? Ducimus.</p>
                        <button style={{background: color}} onClick={handleSub} className="sub-btn">
                            {Subscribed ? (<span className="bell"><span>Subscribed</span> <FaBell/></span>) : "Subscribe"}
                        </button>
                    </div>
                </section>
        </section>
    )
}

export default Profile