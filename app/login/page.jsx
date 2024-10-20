'use client'
import React from 'react'

const Login = () => {
    return (
        <div className="main">
            <div className="w-[max-content] h-[max-content] p-6 flex flex-col items-center justify-evenly gap-2 rounded-lg mt-[2rem] shadow-xl">
                <div className="w-full h-[max-content] flex items-center justify-center gap-2 font-[500]">
                    <span className='w-[45%] h-[.1px] bg-zinc-400'></span>
                    OR
                    <span className='w-[45%] h-[.1px] bg-zinc-400'></span>
                </div>
                <form action="" className="w-full h-[max-content] flex flex-col items-start justify-center gap-3">
                    <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
                        <label htmlFor="email" className='font-[500] text-[.9rem] text-zinc-800'>Email</label>
                        <input type="text" name="email" id="email" className='w-[25dvw] h-[6dvh] rounded px-2 py-1 text-[.9rem] font-normal outline-none text-zinc-500 border border-zinc-300' placeholder='name@gmail.com' />
                    </div>
                    <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
                        <label htmlFor="password" className='font-[500] text-[.9rem] text-zinc-800'>Password</label>
                        <input type="text" name="password" id="password" className='w-[25dvw] h-[6dvh] rounded px-2 py-1 text-[.9rem] font-normal outline-none text-zinc-500 border border-zinc-300' placeholder='Must be atleast 6 characters' />
                    </div>
                    <div className="w-full h-[max-content] flex items-center justify-between">
                        <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
                            <label htmlFor="firstName" className='font-[500] text-[.9rem] text-zinc-800'>First Name</label>
                            <input type="text" name="firstName" id="firstName" className='w-[12dvw] h-[6dvh] rounded px-2 py-1 text-[.9rem] font-normal outline-none text-zinc-500 border border-zinc-300' placeholder='John' />
                        </div>
                        <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
                            <label htmlFor="lastName" className='font-[500] text-[.9rem] text-zinc-800'>Last Name</label>
                            <input type="text" name="lastName" id="lastName" className='w-[12dvw] h-[6dvh] rounded px-2 py-1 text-[.9rem] font-normal outline-none text-zinc-500 border border-zinc-300' placeholder='Doe' />
                        </div>
                    </div>
                    <h3 className='text-zinc-700 text-[.8rem]'>By signing up, you agree to our <a href="#" className='text-blue-600'>Terms & Conditions</a></h3>
                    <button className="w-full h-[7dvh] p-2 bg-blue-500 text-white font-[500] rounded">Sign up</button>
                    <h2 className='text-zinc-700 text-[.9rem] font-[600]  self-center'>Already registered? <a href="#" className='text-blue-600'>Login</a></h2>
                </form>
            </div>
        </div>
    )
}

export default Login