import Card from './Card'
import './css/content.css'

const Content = () => {
    return (
        <section className='cards-container'>
            {
                Array.from({length: 6}).map((_c, i) => (
                    <Card key={i}/>
                ))
            }
        </section>
    )
}

export default Content