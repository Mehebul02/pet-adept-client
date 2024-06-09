import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcDonate, FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill, } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
// import useRole from '../../../hooks/useRole'
import MenuItem from './menu/MenuItem'
import { IoMdAdd } from 'react-icons/io'
import logo from '../../../assets/images/logo/logo.png'
import icon from '../../../assets/images/icon/donate.png'
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc'
import { BiDonateHeart } from 'react-icons/bi'
import { MdBorderColor, MdOutlinePets } from 'react-icons/md'
import { FaDonate, FaRegUser } from 'react-icons/fa'
import { SiMyspace } from 'react-icons/si'
import { LiaDonateSolid } from 'react-icons/lia'
import useAdmin from '../../../hooks/useAdmin'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
// const [role]=useRole()
// console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  const [isAdmin]=useAdmin()
  // const isAdmin = true
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-[#005A55] text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-60 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#005A55] mx-auto'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
             {
              isAdmin ?<>
              
              <MenuItem label='Users' address='/dashboard/allUser' icon={FaRegUser}/>
           
         
           <MenuItem label='All Pets' address='/dashboard/all-pets' icon={MdOutlinePets}/>
          
          
           <MenuItem label='All Donations ' address='/dashboard/all-donations' icon={LiaDonateSolid}/>
           
          
             </>:<>
              
              <MenuItem label=' Add a pet' address='/dashboard/addPets' icon={IoMdAdd}/>
           
           <MenuItem label='My added pets' address='/dashboard/my-added' icon={MdOutlinePets}/>
          
         
           <MenuItem label='Adoption Request' address='/dashboard/adoption-Request' icon={VscGitPullRequestGoToChanges}/>
           
         
           <MenuItem label='Create Donation Campaign' address='/dashboard/create-donation' icon={MdBorderColor}/>
           
           
           <MenuItem label='My Donation Campaigns' address='/dashboard/myDonation-campaigns' icon={FaDonate}/>
           
           <MenuItem label='My Donations' address='/dashboard/my-donations' icon={BiDonateHeart}/>
             </>
              
             }
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar