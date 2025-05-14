import main_photo from '../assets/main_photo.png'
// import CustomButton from '../components/CustomButton'
// import CV from '../assets/Regi.pdf'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconContainer from '../components/IconContainer';

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center bg-black text-white w-full h-[712px] font-serif p-4 md:px-20'>

      <div className='md:ml-15 md:w-1/2 w-full px-8 flex flex-col justify-center'>
        <div className='font-extrabold md:text-[55px] text-[30px]'>Armelio Pashollari</div>
        <div className='font-extrabold md:text-[32px] text-[20px] mb-5'>Junior FullStack Developer</div>
        <p className='font-bold md:text-[16px] sm:text-[12] mb-5'>
        Junior Level FullStact Developer. Good Knowledge in HTML, CSS, JS.Ongoing training on MERN Technology. General knowledge in Git, GitHub.
        </p>
        {/* <a href={CV} download='Regi' target='_blank'>
          <CustomButton title='Download CV'/>
        </a> */}

        <div className='mt-12 lg:w-1/5 md:1/2 w-1/3 flex justify-between'>
            <IconContainer link='https://www.facebook.co' children={<FaFacebookF />}/>
            <IconContainer link='https://www.linkedin.c' children={<FaLinkedinIn />}/>
            <IconContainer link='https://github.com/elioi35' children={<FaGithub />}/>
        </div>
      </div>

      <div className='md:w-1/2 flex justify-center mt-8'>
        <img src={main_photo} alt="Fotoja e pare" className='w-3/4 rounded-[50%]' />
      </div>
    </div>
  )
}

export default Home