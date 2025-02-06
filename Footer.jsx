import React from 'react';
import { assets } from '../assets/assets';
const Footer = () => {
  return (
    <div className='md:mx-10'> 
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*------left section-----*/}
        <div>
            <img  className='mb-5 w-40'src={assets.logo} alt="" /> 
            <p className='w-full md:w-2/3 text-gray-600 leading'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
                has been the industry's standrd dummy text ever since 1500's when an unknown printer took a
                gallery of type and scrambled it to make a type specimen book.
            </p>
        </div>
        {/*------center section-----*/}
        <div>
        <p className='text-xl font-medium mb-5 '>
            COMPANY
        </p>
        <ul className='flex flex-col gap-2 text-gray-600'> 
            <li>
                Home
            </li>
            <li>
                About us
            </li>
            <li>
                Contact us
            </li>
            <li>
                Privacy policy
            </li>
        </ul>
        </div>
        {/*------right section-----*/}
        <div>
            <p className='text-xl font-medium mb-5 '> 
                Get in touch
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>
                        +918976543567
                    </li>
                    <li>
                        onlineappointment@gmail.com
                    </li>
                </ul>
            </p>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>
            Copyright 2025@ Prescripto - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
