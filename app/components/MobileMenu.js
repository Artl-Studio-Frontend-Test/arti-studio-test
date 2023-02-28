import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';


export default function MobileMenu(props) {
    return (
        <div className='flex justify-between mx-8 py-3 h-20'>
            <Link className='flex' href='/'>
                <Image
                    src="/assets/logo.png"
                    width={30}
                    height={30}
                    alt="logo"
                    className='h-12 '
                >
                </Image>

                <span className={`${props.myFont.className} text-[#fbfcf8] text-[24px]  ml-2 mt-3`}>mabeans.</span>
            </Link>

            <div className=" mt-3  ">
                <Menu as="div" className="relative inline-block  text-center">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-[#afafaf] ">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>


                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-[#adadad] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1">
                                <Menu.Item >
                                    {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f] `} href='/'>About</Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f] `} href='/'>Atrributs</Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f] `} href='/'>Spacs</Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f]  `} href='/'>Team</Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f]  `} href='/'>FAQ</Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    } group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f] `} href='/'><Icon icon="skill-icons:twitter" color="#2099e8" width="25" height="25" className='rounded-full mx-2' /></Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                       <Link className={`${active ? 'bg-violet-500 text-[#afafaf]  ' : 'text-[#1b1b1b]'
                                    }group flex w-full items-center px-4 py-1 text-sm mt-1 border-b-2 border-[#706f6f]  `} href='/'><Icon icon="skill-icons:discord" width="25" height="25" className='rounded-full mx-2' /></Link>
                                    )}
                                    
                                </Menu.Item>
                            </div>


                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}








