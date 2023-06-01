import aboutwall from '../assets/images/about.jpeg'
import { Container, Typography, Grid } from '@mui/material'

function AboutContainer(){
    const about = 'The ColorScape Collective is a vibrant and dynamic nonprofit organization dedicated to transforming communities through the power of graffiti murals. We believe that art has the ability to inspire, unite, and uplift, and we harness this creative energy to breathe life into neglected urban spaces. Our talented team of artists collaborates with local residents, businesses, and organizations to reimagine blank walls as captivating, colorful masterpieces. Through our community-driven approach, we foster a sense of pride, cultural expression, and positive change, one mural at a time. Join us in creating a world where art and community thrive together in a kaleidoscope of vibrant colors.'

    return(
        <Grid container spacing={4} className="about-container">
            <Grid container item xs={12} md={6} lg={5} className='center' stlye={{width:'70%'}}>
            <img className='img' src={aboutwall} alt="@someone" />
            </Grid>
            <Grid container item xs={12} md={5} lg={6} className='center column'>
                <h2>What is ColorScape?</h2>
                <p className='text' style={{textAlign:'center'}}>{about}</p>
            </Grid>
        </Grid>
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