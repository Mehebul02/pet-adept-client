import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/images/errorPage/error.png'
const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);

    return (
        <div >
        <div id="error-page">
 
 <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
    <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
           <img className='w-full' src={errorImg} alt="" />
        </h2>
       
       
<Link to='/'>
<button className=" mt-6 bg-green-500 hover:bg-[#F69B03] text-white py-2 p-3 rounded-md  transition-colors font-poppins text-xl">
          Back to home
          </button>		
</Link>
    </div>
</div>
</section>
 
</div>
    </div>
    );
};

export default ErrorPage;