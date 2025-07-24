import './css/card.css'

const Card = () => {
    return (
        <section className="card-container">
            <img src="tabs-img/thumb.png" className='img' alt="cover img"/>
            <h1>Learn React in 50hrs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className='card-btn'>Learn more</button>
        </section>
    )
}

export default Card