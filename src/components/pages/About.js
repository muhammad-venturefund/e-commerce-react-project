import Banner from '../Banner'
// import {useProductContext} from '../../context/ProductContext'

const About = () => {
  // const {myName} = useProductContext()
  const bannerHeading = {
    name:'About Us'
  }
  return (
    <div className='about-us'>
      {/* {myName} */}
      <Banner bannerHeading ={bannerHeading} />
    </div>
  )
}

export default About