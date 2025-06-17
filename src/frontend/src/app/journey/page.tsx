'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaCode, FaHome, FaLinkedin, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'
import { TbTargetArrow } from 'react-icons/tb'
import { IoHardwareChipOutline } from 'react-icons/io5'

export default function JourneyPage() {
    const [selectedNode, setSelectedNode] = useState<'node1' | 'node2' | 'node3' | 'node4' | 'node5' | 'node6' |  null>('node1')

    const [clicked, setClicked] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
    const [clicked4, setClicked4] = useState(false)
    const [clicked5, setClicked5] = useState(false)

    return (
        <div className="">
            <div className="bg-white py-24 pt-16 px-14">
                <h1 className="text-3xl font-semibold text-gray-900 mb-12">My Voyage</h1>
                <svg width="726" height="114" viewBox="0 0 726 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="247" cy="92.5" rx="21" ry="21.5" fill={clicked2 ? '#2074C7' : '#CFCFCF'}/>
                    <foreignObject x="226" y="71" width="42" height="43">
                        <button
                        className="w-full h-full bg-transparent cursor-pointer"
                        onClick={() => {setSelectedNode('node3'); setClicked2(true)}}
                        />
                    </foreignObject>
                    <ellipse cx="343" cy="21.5" rx="21" ry="21.5" fill={clicked3 ? '#2074C7' : '#CFCFCF'}/>
                    <foreignObject x="322" y="0" width="42" height="43">
                        <button
                        className="w-full h-full bg-transparent cursor-pointer"
                        onClick={() => {setSelectedNode('node4'); setClicked3(true)}}
                        />
                    </foreignObject>
                    <circle cx="605" cy="78" r="21" fill="#404040" fillOpacity="0.25"/>
                    <circle cx="704.5" cy="79.5" r="21.5" fill="#404040" fillOpacity="0.25"/>
                    <circle cx="385.5" cy="85.5" r="21.5" fill="#404040" fillOpacity="0.25"/>
                    <circle cx="138.5" cy="21.5" r="21.5" fill={clicked ? '#2074C7' : '#CFCFCF'}/>
                    <foreignObject x="117" y="0" width="43" height="43">
                    <button
                        className="w-full h-full bg-transparent cursor-pointer"
                        onClick={() => {setSelectedNode('node2'); setClicked(true)}}
                    >
                        <span className="sr-only">Click gray circle</span>
                    </button>
                    </foreignObject>
                    <line y1="-3" x2="129.716" y2="-3" transform="matrix(0.83715 -0.546973 0.480035 0.877249 29.667 93.2039)" stroke={clicked ? '#2074C7' : '#CFCFCF'} strokeWidth="6"/>
                    <line x1="161.69" y1="33.5213" x2="227.69" y2="78.5213" stroke={clicked2 ? '#2074C7' : '#CFCFCF'} strokeWidth="6"/>
                    <line x1="266.274" y1="78.5466" x2="320.274" y2="40.5466" stroke="#404040" strokeOpacity="0.25" strokeWidth="6"/>
                    <path d="M43 90.5C43 102.374 33.3741 112 21.5 112C9.62588 112 0 102.374 0 90.5C0 78.6259 9.62588 69 21.5 69C33.3741 69 43 78.6259 43 90.5Z" fill="#2074C7"/>
                    <foreignObject x="0" y="69" width="43" height="43">
                            <button
                            className="w-full h-full bg-transparent cursor-pointer"
                            onClick={() => setSelectedNode('node1')}
                            >
                            </button>
                        </foreignObject>
                    <line x1="268" y1="90" x2="364" y2="90" stroke="#404040" strokeOpacity="0.23" strokeWidth="6"/>
                    <line x1="405.543" y1="75.3775" x2="468.543" y2="40.3775" stroke="#404040" strokeOpacity="0.25" strokeWidth="6"/>
                    <path d="M517.09 33.0337L582.14 63.2013" stroke="#404040" strokeOpacity="0.25" strokeWidth="6"/>
                    <line x1="626" y1="78" x2="683" y2="78" stroke="#404040" strokeOpacity="0.25" strokeWidth="6"/>
                    <ellipse cx="491" cy="25.5" rx="21" ry="21.5" fill={clicked5 ? '#EFB920' : '#CFCFCF'}/>
                    <foreignObject x="470" y="4" width="42" height="43">
                        <button
                        className="w-full h-full bg-transparent cursor-pointer"
                        onClick={() => {setSelectedNode('node6'); setClicked5(true)}}/>
                    </foreignObject>
                    <circle cx="605" cy="78" r="21" fill="#CFCFCF"/>
                    <circle cx="385.5" cy="85.5" r="21.5" fill={clicked4 ? '#2074C7' : '#CFCFCF'}/>
                    <foreignObject x="364" y="64" width="43" height="43">
                        <button
                        className="w-full h-full bg-transparent cursor-pointer"
                        onClick={() => {setSelectedNode('node5'); setClicked4(true)}}
                        />
                    </foreignObject>
                    <line x1="266.274" y1="78.5466" x2="320.274" y2="40.5466" stroke={clicked3 ? '#2074C7' : '#CFCFCF'} strokeWidth="6"/>
                    <line x1="268" y1="90" x2="364" y2="90" stroke={clicked4 ? '#2074C7' : '#CFCFCF'} strokeWidth="6"/>
                    <line x1="405.543" y1="75.3775" x2="468.543" y2="40.3775" stroke={clicked5 ? '#2074C7' : '#CFCFCF'} strokeWidth="6"/>
                    <path d="M517.09 33.0337L582.14 63.2013" stroke="#CFCFCF" strokeWidth="6"/>
                    <line x1="626" y1="78" x2="683" y2="78" stroke="#CFCFCF" strokeWidth="6"/>
            </svg>

            </div>
            <div className="mt-8 pt-4 text-black px-14">
                {selectedNode === 'node1' && (
                    <>
                        <h1 className='font-semibold text-xl mb-6'>Skill Pathway to becoming an Embedded Systems Engineer at Nvidia</h1>
                        <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200 mb-4'>
                            <Image
                                src="/img/c1.jpeg"
                                alt="Profile Picture"
                                width={300}
                                height={70}
                                className="rounded-lg object-cover mr-6"
                            />
                            <div className='flex flex-col'>
                                <p className='text-gray-400'>Course</p>
                                <p className='font-semibold text-2xl'>Python Essential Training</p>
                                <div className='flex mb-2'>
                                    <p className='mr-2'>4h 22m</p>
                                    <p className='mr-2'>• Beginner</p>
                                    <p className='mr-2'>• Updated Apr 2024</p>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                    <p className='text-gray-600 mr-2'>LinkedIn</p>
                                    <p className='text-gray-600'> • By Ryan Mitchell</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='mr-1'>4.7</p>
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                    <p className='mr-2'>(15,642)              </p>
                                    <p className='mr-2'> • 503,706 learners
                                    </p>
                                    <p className='mr-2'> • 
                                    </p>
                                    <FaCode className='mr-2' size={24} />
                                    <p className='mr-2'> Hands-on Practice
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200'>
                            <Image
                                src="/img/c2.jpeg"
                                alt="Profile Picture"
                                width={300}
                                height={70}
                                className="rounded-lg object-cover mr-6"
                            />
                            <div className='flex flex-col'>
                                <p className='text-gray-400'>Course</p>
                                <p className='font-semibold text-2xl'>Learning Python</p>
                                <div className='flex mb-2'>
                                    <p className='mr-2'>3h 41m</p>
                                    <p className='mr-2'>• Beginner</p>
                                    <p className='mr-2'>• Updated Sep 2023</p>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                    <p className='text-gray-600 mr-2'>LinkedIn</p>
                                    <p className='text-gray-600'> • By Joe Marini</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='mr-1'>4.7</p>
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStar className='text-yellow-500' size={16} />
                                    <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                    <p className='mr-2'>(9,513)              </p>
                                    <p className='mr-2'> • 554,610 learners
                                    </p>
                                    <p className='mr-2'> • 
                                    </p>
                                    <FaCode className='mr-2' size={24} />
                                    <p className='mr-2'> Hands-on Practice
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {selectedNode === 'node2' && (
                    <>
                    <h1 className='font-semibold text-xl mb-6'>Skill Pathway to becoming an Embedded Systems Engineer at Nvidia</h1>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200 mb-4'>
                        <Image
                            src="/img/c3.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Course</p>
                            <p className='font-semibold text-2xl'>Complete Guide to C Programming Foundations</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>5h 52m</p>
                                <p className='mr-2'>• Beginner</p>
                                <p className='mr-2'>• Mar 2024</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • By: Dan Gookin</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-1'>4.7</p>
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                <p className='mr-2'>(219)              </p>
                                <p className='mr-2'> • 15,269 learners
                                </p>
                                <p className='mr-2'> • 
                                </p>
                                <FaCode className='mr-2' size={24} />
                                <p className='mr-2'> Hands-on Practice
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200'>
                        <Image
                            src="/img/c4.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Course</p>
                            <p className='font-semibold text-2xl'>C Programming for Embedded Applications</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>2h 5m</p>
                                <p className='mr-2'>• Beginner</p>
                                <p className='mr-2'>• Feb 2022</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • By: Eduardo Corpeño</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-1'>4.6</p>
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                <p className='mr-2'>(1,552)</p>
                                <p className='mr-2'> • 86,693 learners
                                </p>
                                <p className='mr-2'> • 
                                </p>
                                <FaCode className='mr-2' size={24} />
                                <p className='mr-2'> Hands-on Practice
                                </p>
                            </div>
                        </div>
                    </div>
                </>
                )
                }
                {selectedNode === 'node3' && (
                    <>
                    <h1 className='font-semibold text-xl mb-6'>Skill Pathway to becoming an Embedded Systems Engineer at Nvidia</h1>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200 mb-4'>
                        <Image
                            src="/img/c5.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Course</p>
                            <p className='font-semibold text-2xl'>Embedded Hardware Fundamentals</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>1h 36m</p>
                                <p className='mr-2'>• Beginner</p>
                                <p className='mr-2'>• Mar 2019</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • By: Allen Holub</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-1'>4.7</p>
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                <p className='mr-2'>(2,698)              </p>
                                <p className='mr-2'> • 134,066 learners
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200'>
                        <Image
                            src="/img/c6.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Video</p>
                            <p className='font-semibold text-2xl'>RTOS Fundamentals</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>7h</p>
                                <p className='mr-2'>• Advanced</p>
                                <p className='mr-2'>• Updated Oct 2023</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • From the course: Top 10 Skills for AI Systems Designers</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2'> • 3,596 learners
                                </p>
                            </div>
                        </div>
                    </div>
                </>
                
                )
                }
                {selectedNode === 'node4' && (
                    <>
                    <h1 className='font-semibold text-xl mb-6'>Skill Pathway to becoming an Embedded Systems Engineer at Nvidia</h1>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200 mb-4'>
                        <Image
                            src="/img/c7.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Course</p>
                            <p className='font-semibold text-2xl'>Git Essential Training</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>1h 41m</p>
                                <p className='mr-2'>• Beginner</p>
                                <p className='mr-2'>• 1 month ago</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • By: Barbara Forbes</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2'> 1,265 learners
                                </p>
                                <p className='mr-2'> • 
                                </p>
                                <FaCode className='mr-2' size={24} />
                                <p className='mr-2'> Hands-on Practice
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200'>
                        <Image
                            src="/img/c8.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Course</p>
                            <p className='font-semibold text-2xl'>Learning Git and GitHub</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>3h 50m</p>
                                <p className='mr-2'>• Beginner</p>
                                <p className='mr-2'>• Updated 1 month ago</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • By: Ray Villalobos</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-1'>4.7</p>
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStar className='text-yellow-500' size={16} />
                                <FaStarHalfAlt className='text-yellow-500 mr-1' size={16} />
                                <p className='mr-2'>(4,014)</p>
                                <p className='mr-2'> • 40,752 learners
                                </p>
                            </div>
                        </div>
                    </div>
                </>
                )
                }
                {selectedNode === 'node5' && (
                    <>
                    <h1 className='font-semibold text-xl mb-6'>Skill Pathway to becoming an Embedded Systems Engineer at Nvidia</h1>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200 mb-4'>
                        <Image
                            src="/img/c9.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Video</p>
                            <p className='font-semibold text-2xl'>Parallel processing: The CPU and GPU</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>4m 14s</p>
                                <p className='mr-2'>• Updated Dec 2019</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • From the course: Programming Foundations: Inside Comput...</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2'>3,072 learners
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-4 flex  border-1 border-gray-200'>
                        <Image
                            src="/img/c10.jpeg"
                            alt="Profile Picture"
                            width={300}
                            height={70}
                            className="rounded-lg object-cover mr-6"
                        />
                        <div className='flex flex-col'>
                            <p className='text-gray-400'>Video</p>
                            <p className='font-semibold text-2xl'>Building a CUDA GPU stress test</p>
                            <div className='flex mb-2'>
                                <p className='mr-2'>7m 38s</p>
                                <p className='mr-2'>• Updated Apr 2024</p>
                            </div>
                            <div className='flex items-center mb-2'>
                                <FaLinkedin className='mr-3 text-blue-500' size={30} />
                                <p className='text-gray-600 mr-2'>LinkedIn</p>
                                <p className='text-gray-600'> • From the course: Google Cloud Professional Machine Learnin...</p>
                            </div>
                        </div>
                    </div>
                </>
                )
                }
                {selectedNode === 'node6' && (
                    <div>
                        <div className='flex items-center mb-4'>
                            <IoHardwareChipOutline  className='mr-3' size={30} />
                            <h1 className='font-semibold text-3xl'>AI-Powered Edge Device for Object Detection with NVIDIA Jetson Nano</h1>
                        </div>
                        <p className='mb-4'>This project will simulate a real-world embedded systems development scenario at Nvidia, focusing on deploying an AI application to an edge device. It leverages all the learner's existing skills and introduces practical aspects of embedded AI development.</p>
                        <p className='mb-4'><span className='font-bold'>Project Goal: </span> Develop and deploy an object detection system on an NVIDIA Jetson Nano, capable of identifying specific objects (e.g., "person," "car," "cat") from a live camera feed. The system should alert the user (e.g., via a visual indicator or log) when a target object is detected.</p>
                        <p className='text-blue-500 font-semibold mb-6'>Let’s put your knowledge into practice.</p>
                        <div className='font-bold mb-2 flex'><TbTargetArrow className='mr-2' size={24} /> <span>Key Learning Objectives:</span></div>
                        <p><span className='ml-8 font-bold'>Embedded System Design: </span>Practical application of hardware-software integration on an embedded platform.</p>
                        <p><span className='ml-8 font-bold'>CUDA: </span>Optimizing AI inference using CUDA for GPU acceleration on the Jetson Nano.</p>
                        <p><span className='ml-8 font-bold'>C++: </span>Developing efficient and low-level code for embedded applications.</p>
                        <p><span className='ml-8 font-bold'>Python: </span>Scripting, data processing, and potentially higher-level application logic.</p>
                        <p><span className='ml-8 font-bold'>Git: </span>Version control and collaborative development best practices.</p>
                    </div>
                )}
                {!selectedNode && <p>No node selected yet.</p>}
            </div>
        </div>
    )
}