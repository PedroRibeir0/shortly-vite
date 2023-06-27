
export default function Footer() {

    const footerInfo = [
        {
            h: 'Features',
            lis: ['Link Shortening', 'Branded Links', 'Analytics']
        },
        {
            h: 'Resources',
            lis: ['Blog', 'Developers', 'Support']
        },
        {
            h: 'Company',
            lis: ['About', 'Our Team', 'Careers', 'Contact']
        }
    ]

    const contactIcons = [
        '/images/icon-facebook.svg',
        '/images/icon-twitter.svg',
        '/images/icon-pinterest.svg',
        '/images/icon-instagram.svg'
    ] 

    const boostBackground = {backgroundImage: 'url("/images/bg-boost-mobile.svg")'}

    return (
    <>  
        <div className="boost" style={boostBackground}>
            <h2>Boost your links today</h2>
            <button className="get-started-button">Get Started</button>
        </div>
        <footer>
            <h2>Shortly</h2>
            <div className="footer-links">
                {footerInfo.map(item=>{
                    return <ul key={item.h}>{item.h}
                        {item.lis.map(i=>{
                            return <li key={i}>{i}</li>
                        })}
                    </ul>
                })}
                <ul className="social-icons">
                    {contactIcons.map(item=>{
                        return <li key={item}><img src={item} alt="social-media-icon" /></li>
                    })}
                </ul>
            </div>
        </footer>
    </>
  )
}
