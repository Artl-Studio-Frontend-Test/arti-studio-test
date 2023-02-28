import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from 'next/link';
import Image from 'next/image';

import { Icon } from '@iconify/react';



export default function DesktopMenu(props) {
    return (
        <div className='flex justify-around'>
                    <Link className='flex' href='/'>
                        <Image
                            src="/assets/logo.png"
                            width={30}
                            height={30}
                            alt="logo"
                            className='h-12 mt-2'
                        >
                        </Image>

                        <span className={`${props.myFont.className} text-[#fbfcf8] text-[24px] mt-5 ml-2`}>mabeans.</span>
                    </Link>

                    <nav className='mt-4 flex justify-between'>

                        <Link className='text-[#afafaf] mx-6 mt-1  ' href='/'>About</Link>


                        <div className="  text-right">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-[#afafaf] ">
                                        Atrributs
                                        <ChevronDownIcon
                                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
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
                                    <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >

                                                        Edit
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Duplicate
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>


                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>

                        <Link className='text-[#afafaf] mx-6 mt-1' href='/'>Spacs</Link>
                        <Link className='text-[#afafaf] mx-6 mt-1 ' href='/'>Team</Link>
                        <Link className='text-[#afafaf] mx-6 mt-1 ' href='/'>FAQ</Link>


                    </nav>


                    <section className='flex mt-4'>
                        <Icon icon="skill-icons:discord" width="35" height="35" className='rounded-full mx-2' />
                        <Icon icon="skill-icons:twitter" color="#2099e8" width="35" height="35" className='rounded-full mx-2' />

                    </section>
                </div>
    )
}









