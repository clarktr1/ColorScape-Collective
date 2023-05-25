import aboutwall from '../assets/images/about.jpeg'


function AboutContainer(){
    const about = 'The ColorScape Collective is a vibrant and dynamic nonprofit organization dedicated to transforming communities through the power of graffiti murals. We believe that art has the ability to inspire, unite, and uplift, and we harness this creative energy to breathe life into neglected urban spaces. Our talented team of artists collaborates with local residents, businesses, and organizations to reimagine blank walls as captivating, colorful masterpieces. Through our community-driven approach, we foster a sense of pride, cultural expression, and positive change, one mural at a time. Join us in creating a world where art and community thrive together in a kaleidoscope of vibrant colors.'

    return(
        <div className="about-container center">
            <div className='about-text center'>
                <h2 className='title'>What is ColorScape?</h2>
                <p style={{lineHeight:'2rem'}}>{about}</p>
            </div>
            <div className='about-image center'>
                <img src={aboutwall}></img>
            </div>
        </div>
    )
}

function About(){
    return(
        <div>
            <AboutContainer />
        </div>
    )
}

export default About