import Aside from "./components/Aside"
import Profile from "./components/profile"
import Tabs from "./components/Tabs"
import "./App.css"

const App = () => {

    
    return (
        <section>
            <Aside/>
            <article className="profile">
                <Profile/>
                <Tabs/>
            </article>
        </section>
    )
}

export default App