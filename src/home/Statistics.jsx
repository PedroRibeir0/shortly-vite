
export default function Statistics() {

    const benefits = [
        {
            img: '/images/icon-brand-recognition.svg',
            h: 'Brand Recognition',
            p: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in you content."
        },
        {
            img: '/images/icon-detailed-records.svg',
            h: 'Detailed Records',
            p: "Gain insights into who is clicking your links. Knowing when adn where people engage with your content helps inform better decisions"
        },
        {
            img: '/images/icon-fully-customizable.svg',
            h: 'Fully Customizable',
            p: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
        }
    ]

    return (
    <section className="statistics">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        <ul className="benefits-list">
            {benefits.map(item=>{
                return(
                    <li className="benefits" key={item.h}>
                        <picture className="b-img-container"><img className="b-img" src={item.img} alt="" /></picture>
                        <h3 className="b-h">{item.h}</h3>
                        <p className="b-p">{item.p}</p>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
