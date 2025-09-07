
import { FaCheck } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "../components/Footer";
export function Home(){
  return (
    <>

<div className="relative overflow-x-hidden w-full">



   {/* <!-- hero section  --> */}

<section className="relative  bg-[#02042a] ">

    <div className="w-10/12 max-w-[1080px] flex lg:flex-row flex-col justify-between items-center mx-auto ">

        {/* <!--left part--> */}
        <div className="space-y-8">

            <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white pt-10 md:pt-10">Power your finance, grow your business</h1>

            <div className="w-6 h-1 bg-greenLight"></div>

            <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
                Accept payments from customers. Automate payouts to vendors &
                employees. Never run out of working capital.
            </p>


        </div>

        {/* <!--right part--> */}

        <img src="./images/hero-illustration.jpg" alt=""
        className="w-full max-w-[680px] "/>

    </div>


{/* <!-- shape  --> */}

<div className="absolute left-0 right-0 w-[103%]  "> 
    <img src="./images/hero-shape.svg"
    className="w-full object-fill scale-x-100" alt=""/>
</div>


</section>



{/* <!-- feacture --> */}

<section className="relative mt-[140px] overflow-hidden">



    <div className='relative w-11/12 max-w-[1080px] pt-4 mx-auto '>
        {/* <!-- heading  --> */}
         <h2 className='text-center font-mullish text-2xl font-extrabold leading-[1.2] hidden md:block  bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent'>Accept Payments with WalletPay Payment Suite</h2>

         <h2 className='text-center font-mullish text-3xl font-extrabold leading-[1.2] md:hidden bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent'>Explore WalletPay Payment Suite</h2>

         <div className="w-8 mt-4 mb-6 h-1 bg-greenLight mx-auto"></div>

         {/* <!-- content box  --> */}
          <div className='border-2 w-full min-h-[520px] bg-white flex  rounded-md relative p-10 py-12'>

            {/* <!-- left box  --> */}
             <div className='flex flex-col justify-between  w-full gap-y-6'>

                <h3 className='font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-black'> Superchange your business with the all-powerful <span className="text-[#4b94ed]">Payment Gateway</span></h3>

                <ul className="space-y-2">
                   
                    <li className='font-mullish flex items-center space-x-2'>
                    
                    <i className='text-[#61cea6]'><FaCheck /></i>

                        <span className="text-slate-900">100+ Payment Method</span>
                    </li>

                    <li
                    className='font-mullish flex items-center space-x-2'>
                         <i className='text-[#61cea6]'><FaCheck /></i>
                        <span className="text-slate-900">Industry Leading Success Rate</span>
                    </li>

                    <li className='font-mullish flex items-center space-x-2'>
                    <i className='text-[#61cea6]'><FaCheck /></i>
                        <span className="text-slate-900">Superior Checkpot Experience</span>
                    </li>

                    <li 
                    className='font-mullish flex items-center space-x-2'>
                         <i className='text-[#61cea6]'><FaCheck /></i>
                        <span className="text-slate-900">Easy to integrate</span>
                    </li>

                    <li
                    className='font-mullish flex items-center space-x-2'>
                     <i className='text-[#61cea6]'><FaCheck /></i>    
                        <span className="text-slate-900">Instant Settlements from day 1</span>
                    </li>

                    <li 
                    className='font-mullish flex items-center space-x-2'>
                     <i className='text-[#61cea6]'><FaCheck /></i>    
                        <span className="text-slate-900">In-depth Reporting and Insights</span>
                    </li>
                </ul>

    {/* <!-- for button and hyperlink --> */}

    <div className='flex md:flex-row flex-col-reverse md:items-center justify-start  md:space-x-4 gap-y-3'>
                    <button 
className='bg-[#2b84ea] md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-[#0b72e7] transition-all duration-200 w-full'                    
                    >Sign Up Now</button>

{/* <!-- hyperlink  --> */}

        <div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#4b94ed] transition-all duration-200 '
>Know More</a>


                    </div>

                </div>
             </div>

             {/* <!-- right  --> */}
             <img src="./images/payment-suite.png" alt=""
             className='lg:max-w-[600px]  absolute right-0 bottom-0 hidden md:max-w-[400px] md:block'/>

          </div>



          {/* feature 2 */}

          <div className="grid lg:grid-cols-3 gap-4 mt-10 mb-10 md:grid-cols-2">
  
  {/* box1  */}

    <div className='w-full min-h-[15rem]
     relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg  group'>

        <img src=".\images\payment-pages-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200 ' />
        


{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Payment Pages</h3>

<p className='font-mullish text-grayText mt-6'>Easily create and share payment pages — no coding needed. Start collecting payments online within minutes.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box2 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg '>
        <img src=".\images\payment-link-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Payment Links</h3>

<p className='font-mullish text-grayText mt-6'>Generate and share secure payment links with customers via SMS, email, or WhatsApp. Get paid instantly.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box3 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg '>
        <img src=".\images\payment-buttons-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Payment Buttons</h3>

<p className='font-mullish text-grayText mt-6'>Add customizable payment buttons to your website and start accepting payments with ease.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box4 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg '>
        <img src=".\images\subscriptions-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Subscriptions</h3>

<p className='font-mullish text-grayText mt-6'>Manage and accept recurring payments using smart subscription billing — perfect for SaaS or memberships.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box5 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg '>
        <img src=".\images\route-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Route</h3>

<p className='font-mullish text-grayText mt-6'>Automatically split payments between multiple vendors or partners with real-time settlement.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box6 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-1 border-gray-300 rounded-md hover:shadow-lg '>
        <img src=".\images\smart-collect-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        
        {/* box shape  */}

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-[#2b84ea] leading-[1.2] text-[1.375rem]'>Smart Collect</h3>

<p className='font-mullish text-grayText mt-6'>Collect payments using virtual bank accounts and UPI IDs. Track every incoming payment in real-time.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-lightBlue500  transition-all duration-200 text-lightBlue300 mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

</div>

</div>

</section>



{/* feature section 2 */}

<section
className='bg-[url(./images/feature-section-2BG.svg)] bg-no-repeat bg-cover mt-14 pt-[6rem] pb-[300px]'>

    <div className='w-10/12 max-w-[1080px] mx-auto pt-4'>

    <h2 className='text-center font-mullish text-2xl font-bold leading-[1.2] text-white pb-10'>Explore WalletPay Business Banking</h2>

<span className="w-8 mt-4 mb-20 h-1 bg-greenLight mx-auto"></span>

{/* main featured box  */}
        <div className='relative flex w-full min-h-[440px]'>

<img src="./images/x-flame-1.png" alt="" loading='lazy'
className='absolute -top-[142px] -left-[140px] w-[100px] ' />

<img src="./images/x-flame-2.png" alt="" 
loading='lazy'
className='absolute top-[150px] -right-[180px] w-[100px] '/>

{/* content box  */}
<div className='border w-full  flex  rounded-md  p-10 py-12 bg-[#181c2e] border-gray-600 relative'>

{/* <!-- left box  --> */}
 <div className='flex flex-col justify-between  w-full gap-12 z-10 text-black'>

    <h3 className='font-mullish text-[28px] leading-10 font-bold max-w-[500px] text-white'>Manage your company's finances with {" "}{" "}
        WalletPay {" "}
        <span className="text-[#61cea6]">Business Banking</span></h3>

    <ul className="space-y-2">
   
   <li className='font-mullish flex items-center space-x-2'>
   
   <i className='text-[#61cea6]'><FaCheck /></i>

       <span className='text-gray-300'>Open a fully digital current account</span>
   </li>

   <li
   className='font-mullish flex items-center space-x-2'>
        <i className='text-[#61cea6]'><FaCheck /></i>
       <span className='text-gray-300'>Automate payables & compliment payments</span>
   </li>

   <li 
   className='font-mullish flex items-center space-x-2'>
   <i className='text-[#61cea6]'><FaCheck /></i>
       <span className='text-gray-300'>Simplify and track spends with Corporate cards</span>
   </li>

   <li 
   className='font-mullish flex items-center space-x-2'>
        <i className='text-[#61cea6]'><FaCheck /></i>
       <span className='text-gray-300'>View financial insights at a glance</span>
   </li>

   
</ul>
 

{/* <!-- for button and hyperlink --> */}

    <div className='flex lg:flex-row lg:items-center  lg:space-x-4 w-full flex-col-reverse justify-start gap-y-4'>

<button className='relative bg-[#2b84ea] flex items-center justify-center text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-[#0b72e7] transition-all duration-200'>Sign Up
    <div className='w-12 h-[60px] bg-[#61cea6] absolute right-6 skew-x-[20deg] flex justify-center items-center'><FaArrowRight  className='w-[20px] h-[20px] -skew-x-[20deg]'/>
    </div>
</button>

{/* <!-- hyperlink  --> */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200 border-2 px-3 py-2 rounded-lg '
>Know More</a>


        </div>

    </div>
 </div>



 {/* <!-- right  --> */}
 <img src="./images/buisness-banking.png" alt=""
 className='lg:max-w-[600px]  absolute right-0 bottom-0 top-2 hidden lg:block  -z-4 '/>

</div>


        </div>


{/* 3 box in page 3 */}


<div className="grid lg:grid-cols-3 gap-4 mt-10 mb-10 md:grid-cols-2">
  
  {/* box1  */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-2 border-gray-600 rounded-md hover:shadow-lg  group'>

        <img src=".\images\payment-pages-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200 ' />
        


{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-white leading-[1.2] text-[1.375rem]'>Payment Pages</h3>

<p className='font-mullish text-grayText mt-6'>Take your business online instantly with zero coding. Accept both domestic & international payments.</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-[#4b94ed] group-hover:text-[#0b72e7] transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-[#0b72e7]  transition-all duration-200 text-[#4b94ed] mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>



    {/* box2 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-2 border-gray-600 rounded-md hover:shadow-lg '>
        <img src=".\images\payment-link-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-white leading-[1.2] text-[1.375rem]'>Payment Links</h3>

<p className='font-mullish text-grayText mt-6'>Share payment link via an email, SMS, message, chatbot etc. and get paid immedately</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-[#4b94ed] group-hover:text-[#0b72e7] transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-[#0b72e7]  transition-all duration-200 text-[#4b94ed] mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

    {/* box3 */}

    <div className='w-full min-h-[15rem] relative cursor-pointer border-2 border-gray-600 rounded-md hover:shadow-lg '>
        <img src=".\images\payment-buttons-icon.svg" alt=""
        className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
        

{/* box container */}

<div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 group overflow-hidden'>

{/* hover image  */}

<img src=".\images\x-flame-1.png" alt="" 
className="hidden absolute right-0 bottom-5 group-hover:block w-[60%]"/>

{/* text part  */}

<div>
<h3 className='font-mullish font-bold text-white leading-[1.2] text-[1.375rem]'>Payment Buttons</h3>

<p className='font-mullish text-grayText mt-6'>Create, Copy & Collect with Payment Button, Collect one Time or subscription payment & more</p>
</div>

{/* hyperlink  */}

<div className='flex items-center cursor-pointer group'>
<a href="#"
className='font-mullish font-bold text-[#4b94ed] group-hover:text-[#0b72e7] transition-all duration-200 '
>Know More </a>
<i className='w-3 h-3 group-hover:text-[#0b72e7]  transition-all duration-200 text-[#4b94ed] mb-1 ml-2'><FaGreaterThan/></i>
</div>

</div>
    </div>

  

</div>


{/* 1 box in page 3 */}


  <div className='w-full lg:flex justify-evenly  border-2 items-center gap-6 border-gray-600 rounded-md mb-24 gap-y-6 p-8 hidden md:flex md:flex-col lg:flex-row '>

    <p className='text-white font-mullish text-xl '>Check out the live demo to learn how WelletPay works. <span className='font-bold'>no sign-up required! </span> </p>

        <button className='relative bg-[#2b84ea] flex items-center justify-center text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-[#0b72e7] transition-all duration-200'>Check out the demo

    <div className='w-12 h-[60px] bg-[#61cea6] absolute right-6 skew-x-[20deg] flex justify-center items-center'><FaArrowRight  className='w-[20px] h-[20px] -skew-x-[20deg] md:mx-auto'/>
    </div>
</button>
    </div>


    </div>

</section>


{/* new feature  */}

<section className="relative bg-white mt-14" >

    <div className='relative w-11/12 max-w-[1080px] pt-4 mx-auto pb-10'>

        <img src="./images/feature-section1-dottedrows.png" alt="" 
        loading='lazy'
        className="absolute w-[233px] left-[300px] -top-[6rem] z-[10]" />

        <img src="./images/feature-section1-dottedrows.png" alt=""
        loading='lazy'
        className="absolute w-[233px] right-[3.5rem] -top-[6rem] z-[10] "  />


        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 gap-x-4 relative z-[100] mb-10 ">

            {/* item 1 */}

<div className='relative flex items-center z-0 '>
    <h1 className='text-[#162f56] font-mullish font-extrabold text-4xl leading-[3.375rem]'>
        New in the 
        <span className='text-[#0b72e7]'> WalletPay</span> <br />
        Product Suite
    </h1>
</div>

            {/* card 1 */}

            <div className='p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)]  bg-white shadow-lg border-2 rounded-md border-gray-300'>
                <img src="./images/razorpayXicon.svg" alt=""
                className='w-10 h-10' />

                <h1 className='font-mullish text-lg font-bold pt-4 text-black'>1. Business Payments Made Easy</h1>
                <p 
                className='font-mullish py-3 text-gray-600 leading-normal'>Send and receive large payments instantly with 100% transparency and secure tracking.</p>

                {/* hyperlink  */}

                <div className='flex flex-row items-center cursor-pointer group'>
                    <a href="" 
                    className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200'>Know More</a>
                    <i></i>
                </div>

            </div>

            {/* card 2 */}

            <div className='p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)]  bg-white shadow-lg border-2 rounded-md border-gray-300'>
                <img src="./images/razorpayXicon.svg" alt=""
                className='w-10 h-10' />

                <h1 className='font-mullish text-lg font-bold pt-4 text-black'>2. Smart Corporate Cards</h1>
                <p 
                className='font-mullish py-3 text-gray-700 leading-normal'>Control employee spending with customizable limits, real-time tracking, and detailed reports.</p>

                {/* hyperlink  */}

                         <div className='flex flex-row items-center cursor-pointer group'>
                    <a href="" 
                    className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200'>Know More</a>
                    <i></i>
                </div>
            </div>


            {/* card 3 */}

            <div className='p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)]  bg-white shadow-lg border-2 rounded-md border-gray-300'>
                <img src="./images/razorpayXicon.svg" alt=""
                className='w-10 h-10' />

                <h1 className='font-mullish text-lg font-bold pt-4 text-black'>3. Expense Management</h1>
                <p 
                className='font-mullish py-3 text-gray-700 leading-normal'>Automate expense approvals, manage reimbursements, and integrate seamlessly with your accounting tools</p>

                {/* hyperlink  */}

                  <div className='flex flex-row items-center cursor-pointer group'>
                    <a href="" 
                    className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200'>Know More</a>
                    <i></i>
                </div>

            </div>


            {/* card 4 */}

            <div className='p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)]  bg-white shadow-lg border-2 rounded-md border-gray-300'>
                <img src="./images/razorpayXicon.svg" alt=""
                className='w-10 h-10' />

                <h1 className='font-mullish text-lg font-bold pt-4 text-black'>4. Advanced Security Features</h1>
                <p 
                className='font-mullish py-3 text-gray-700 leading-normal'>Multi-layered encryption, role-based access control, and fraud protection tailored for businesses.</p>

                {/* hyperlink  */}

                        <div className='flex flex-row items-center cursor-pointer group'>
                    <a href="" 
                    className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200'>Know More</a>
                    <i></i>
                </div>
            </div>


            {/* card 5 */}

            <div className='p-10 bg-[url(/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(/images/instant-settlement-bghover.svg)]  bg-white shadow-lg border-2 rounded-md border-gray-300'>
                <img src="./images/razorpayXicon.svg" alt=""
                className='w-10 h-10' />

                <h1 className='font-mullish text-lg font-bold pt-4 text-black'> 5. Real-Time Analytics</h1>
                <p 
                className='font-mullish py-3 text-gray-700 leading-normal'>Get live insights on business spending, trends, and optimize financial strategies using intelligent dashboards.</p>

                {/* hyperlink  */}

                <div className='flex flex-row items-center cursor-pointer group'>
                    <a href="" 
                    className='font-mullish font-bold text-[#0b72e7] group-hover:text-[#2b84ea] transition-all duration-200'>Know More</a>
                    <i></i>
                </div>

            </div>

</div>

    </div>
</section>


{/* core features */}

<section className='w-full bg-[url(/images/core-features-sectionBg.svg)] bg-no-repeat bg-cover bg-center mt-14 relative pb-10'>

    <div className='relative w-11/12 max-w-[1080px] mx-auto lg:pt-[150px] pt-[200px]  pb-24 '>
        <h2 className='font-mullish font-bold text-2xl text-center  text-white'>Features</h2>
        <div className="w-8 mt-4 mb-6 h-1 bg-greenLight mx-auto"></div>
        <p
        className='font-mullish text-center max-w-[450px] text-white mx-auto'
        >Empower your business with all the right tools to accept online payemnts and provide the best customer experience</p>

    {/* grid  */}

<div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[2rem] mt-8'>
    {/* card 1 */}

    <div>
        <img src="./images/instant-activation-icon.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Instant Activation</h3>
        <p className='font-mullish text-white opacity-80'>Get activated and transct within 2 minutes. Completely online onboarding with minimum</p>
    </div>

        {/* card 2 */}

        <div>
        <img src="./images/easy-integration.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Easy Integration</h3>
        <p className='font-mullish text-white opacity-80'>With plugins for all major platforms and languages, integrate and gp live with Razorpay in less than an hour</p>
    </div>


            {/* card 3 */}

            <div>
        <img src="./images/api-driven-icon.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>API Driven</h3>
        <p className='font-mullish text-white opacity-80'>Build your buisness for scale with our complete, Api-driven automation that requires zero manual intervention</p>
    </div>


            {/* card 4 */}

            <div>
        <img src="./images/payment-modes.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>100+ payment modes</h3>
        <p className='font-mullish text-white opacity-80'>Offer your customers the luxury of all payment modes including Credit/Debit cards. Netbanking UPI, Wallets etc</p>
    </div>


            {/* card 5 */}

            <div>
        <img src=".\images\simple-pricing.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Simple Pricing</h3>
        <p className='font-mullish text-white opacity-80'>Our innovative payment solutions with competitive pricing make payments simpler.</p>
    </div>


            {/* card 6 */}

            <div>
        <img src=".\images\industry-support-icon.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Best in Industry Support</h3>
        <p className='font-mullish text-white opacity-80'>Always avaliable email, phone and chat based support to help you in your every step.</p>
    </div>


            {/* card 7 */}

            <div>
        <img src=".\images\dashboard-reporting-icon.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Dashboard Reporting</h3>
        <p className='font-mullish text-white opacity-80'>Real-time data insights on your Razorpay Dashboard to make informed business decisions.</p>
    </div>


            {/* card 8 */}

            <div>
        <img src="./images/secure-icon.svg" alt="" />
        <h3 className='font-mullish text-white text-lg font-bold my-4'>Secure</h3>
        <p className='font-mullish text-white opacity-80'>PCI DSS Level 1 compliant sloution which removes your burden of regulatory compliance.</p>
    </div>

</div>

    </div>
</section>



<Footer/>







</div>

    </>
    
  )
}






