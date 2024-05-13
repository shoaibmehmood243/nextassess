'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdHome } from "react-icons/md";

export default function Admin() {
    const [selected, setSelected] = useState(null);
    return (
        <div>
            <div>
                <Link href='/assessment'>
                    <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                        <MdHome className="w-5 h-5" /> Home
                    </button>
                </Link>
            </div>
            {
                !selected ? (
                    <div className="my-0">
                        <div className="flex justify-center">
                            <Image className="w-14 h-14" src='/bulb-icon.png' width={64} height={64} />
                        </div>
                        <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-2">Create with AI</h1>
                        <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Ask anything, get your Assessment</p>
                        <div className="flex justify-center my-3">
                            <Image src='/sun.svg' width='20' height='20' />
                        </div>
                        <div className="grid grid-cols-3 gap-6 md:w-3/4 mx-auto">
                            <div onClick={()=> setSelected('upload')} className="m-0 cursor-pointer shadow-[0px 4px 19.5px 0px #0000001A] relative">
                                <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="210" height="122" viewBox="0 0 210 122" fill="none">
                                        <path d="M0.5 8.47024C0.5 3.51775 4.95421 -0.244946 9.83704 0.582766L103.663 16.4876C104.548 16.6377 105.452 16.6377 106.337 16.4876L200.163 0.582767C205.046 -0.244945 209.5 3.51775 209.5 8.47024V113.032C209.5 118.149 204.764 121.95 199.769 120.843L106.731 100.219C105.591 99.9662 104.409 99.9662 103.269 100.219L10.2314 120.843C5.23635 121.95 0.5 118.149 0.5 113.032V8.47024Z" fill="#AAF2F1" />
                                    </svg>
                                    <div className="absolute left-0 w-full h-auto top-[22%] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
                                            <rect x="0.5" width="164" height="5" rx="2.5" fill="white" />
                                            <rect x="0.5" y="26" width="164" height="5" rx="2.5" fill="white" />
                                            <rect x="0.5" y="13" width="85" height="5" rx="2.5" fill="white" />
                                            <rect x="0.5" y="39" width="85" height="5" rx="2.5" fill="white" />
                                            <rect x="92.5" y="13" width="72" height="5" rx="2.5" fill="white" />
                                            <rect x="92.5" y="39" width="72" height="5" rx="2.5" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-4">
                                    <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Upload Assessment</h3>
                                    <p className="text-[#898686] font-medium mt-2 leading-6">Upload anything regarding document and PDF files</p>
                                </div>
                            </div>
                            <div onClick={()=> setSelected('describe')} className="m-0 cursor-pointer shadow-[0px 4px 19.5px 0px #0000001A] relative">
                                <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="279" height="196" viewBox="0 0 279 196" fill="none">
                                        <path d="M139.5 -32L153.242 55.7158L209 -13.3775L177.043 69.4574L259.878 37.5L190.784 93.2584L278.5 107L190.784 120.742L259.878 176.5L177.043 144.543L209 227.378L153.242 158.284L139.5 246L125.758 158.284L70 227.378L101.957 144.543L19.1225 176.5L88.2158 120.742L0.5 107L88.2158 93.2584L19.1225 37.5L101.957 69.4574L70 -13.3775L125.758 55.7158L139.5 -32Z" fill="#AAF2F1"/>
                                    </svg>
                                    <div className="absolute left-0 w-full h-auto top-[22%] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute" width="210" height="35" viewBox="0 0 210 35" fill="none">
                                            <rect x="0.5" width="209" height="35" rx="5" fill="white"/>
                                        </svg>
                                        <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="53" height="54" viewBox="0 0 53 54" fill="none">
                                            <path d="M25.5621 1.5345C25.8843 0.663885 27.1157 0.663888 27.4379 1.53451L33.903 19.0062C34.0043 19.2799 34.2201 19.4957 34.4938 19.597L51.9655 26.0621C52.8361 26.3843 52.8361 27.6157 51.9655 27.9379L34.4938 34.403C34.2201 34.5043 34.0043 34.7201 33.903 34.9938L27.4379 52.4655C27.1157 53.3361 25.8843 53.3361 25.5621 52.4655L19.097 34.9938C18.9957 34.7201 18.7799 34.5043 18.5062 34.403L1.0345 27.9379C0.163885 27.6157 0.163888 26.3843 1.03451 26.0621L18.5062 19.597C18.7799 19.4957 18.9957 19.2799 19.097 19.0062L25.5621 1.5345Z" fill="#84BEBD"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-4">
                                    <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Describe Assessment</h3>
                                    <p className="text-[#898686] font-medium mt-2 leading-6">Describe your assessment and see the magic</p>
                                </div>
                            </div>
                            <Link href='/admin/assessment/programmatic' className="m-0 shadow-[0px 4px 19.5px 0px #0000001A] relative">
                                <div className="bg-[#CBFFFE] rounded-tl-xl rounded-tr-xl flex justify-center items-center p-3 h-48">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="210" height="150" viewBox="0 0 210 150" fill="none">
                                        <path d="M0.5 32.2826C0.5 28.5948 3.02086 25.3849 6.60349 24.5106L103.103 0.962785C104.35 0.658723 105.65 0.658722 106.897 0.962784L203.396 24.5106C206.979 25.3849 209.5 28.5948 209.5 32.2826V142C209.5 146.418 205.918 150 201.5 150H105H8.5C4.08172 150 0.5 146.418 0.5 142V32.2826Z" fill="#AAF2F1"/>
                                    </svg>
                                    <div className="absolute left-0 w-full h-auto top-[25%] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="57" viewBox="0 0 165 57" fill="none">
                                            <rect x="0.5" width="164" height="5" rx="2.5" fill="white"/>
                                            <rect x="0.5" y="52" width="164" height="5" rx="2.5" fill="white"/>
                                            <rect x="0.5" y="26" width="164" height="5" rx="2.5" fill="white"/>
                                            <rect x="0.5" y="13" width="85" height="5" rx="2.5" fill="white"/>
                                            <rect x="0.5" y="39" width="85" height="5" rx="2.5" fill="white"/>
                                            <rect x="92.5" y="13" width="72" height="5" rx="2.5" fill="white"/>
                                            <rect x="92.5" y="39" width="72" height="5" rx="2.5" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-white py-4 px-4">
                                    <h3 className="text-[#3C3838] text-lg font-semibold leading-[27px]">Programmatic Assessment</h3>
                                    <p className="text-[#898686] font-medium mt-2 leading-6">Upload any thing regarding document and pdf files</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="my-0">
                        <div className="flex justify-center">
                            <Image className="w-14 h-14" src='/bulb-icon.png' width={64} height={64} />
                        </div>
                        <h1 className="text-center text-[#202123] font-bold text-5xl leading-[64px] font-serif my-2">AI Generated Assessment</h1>
                        <p className="text-[#202123] text-center font-semibold text-base leading-[18px]">Ask anything, get your Assessment</p>
                        <div className="flex justify-center my-3">
                            <Image src='/sun.svg' width='20' height='20' />
                        </div>
                        <div className="md:w-1/2 mx-auto mt-5">
                            <Link href={`/admin/assessment/${selected}`} className="flex rounded-xl w-full cursor-pointer relative">
                                <div className="bg-[#CBFFFE] p-4 rounded-tl-xl rounded-bl-xl w-1/2 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="263" height="68" viewBox="0 0 263 68" fill="none">
                                        <path d="M244.473 7.67098C212.179 -9.53053 68.0354 6.17085 0 16.1717V36.6736C22.5521 39.6739 86.873 49.3747 163.74 64.176C259.823 82.6776 284.839 29.1729 244.473 7.67098Z" fill="#AAF2F1"/>
                                    </svg>
                                    <div  className="absolute left-[11%] w-auto h-auto top-[35%] flex justify-center items-center">
                                        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="169" height="70" viewBox="0 0 169 70" fill="none">
                                            <rect width="169" height="50" rx="5" fill="white"/>
                                        </svg>
                                        <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
                                            <rect x="0.5" width="160" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="0.5" y="10" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="87.5" y="10" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="0.5" y="20" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="87.5" y="20" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                        </svg>
                                        <svg className="absolute left-[100%] top-[0]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M14.0621 1.5345C14.3843 0.663886 15.6157 0.663887 15.9379 1.53451L19.1619 10.2473C19.2632 10.521 19.479 10.7368 19.7527 10.8381L28.4655 14.0621C29.3361 14.3843 29.3361 15.6157 28.4655 15.9379L19.7527 19.1619C19.479 19.2632 19.2632 19.479 19.1619 19.7527L15.9379 28.4655C15.6157 29.3361 14.3843 29.3361 14.0621 28.4655L10.8381 19.7527C10.7368 19.479 10.521 19.2632 10.2473 19.1619L1.5345 15.9379C0.663886 15.6157 0.663887 14.3843 1.53451 14.0621L10.2473 10.8381C10.521 10.7368 10.7368 10.521 10.8381 10.2473L14.0621 1.5345Z" fill="#84BEBD"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="px-4 py-6 bg-white rounded-tr-xl rounded-br-xl w-1/2">
                                    <h6 className="text-[#3C3838] text-lg font-semibold leading-7">AI-Integrated Assessment</h6>
                                    <p className="mt-1 text-[#898686] font-semibold text-sm leading-6">Upload any thing regarding</p>
                                </div>
                            </Link>
                            <Link href={`/admin/assessment/${selected}`} className="flex rounded-xl mt-3 w-full cursor-pointer relative">
                                <div className="bg-[#CBFFFE] p-4 rounded-tl-xl rounded-bl-xl w-1/2 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="263" height="68" viewBox="0 0 263 68" fill="none">
                                        <path d="M244.473 7.67098C212.179 -9.53053 68.0354 6.17085 0 16.1717V36.6736C22.5521 39.6739 86.873 49.3747 163.74 64.176C259.823 82.6776 284.839 29.1729 244.473 7.67098Z" fill="#AAF2F1"/>
                                    </svg>
                                    <div  className="absolute left-[11%] w-auto h-auto top-[35%] flex justify-center items-center">
                                        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="169" height="70" viewBox="0 0 169 70" fill="none">
                                            <rect width="169" height="50" rx="5" fill="white"/>
                                        </svg>
                                        <svg className="relative" xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
                                            <rect x="0.5" width="160" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="0.5" y="10" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="87.5" y="10" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="0.5" y="20" width="85" height="5" rx="2.5" fill="#CBFFFE" />
                                            <rect x="87.5" y="20" width="72" height="5" rx="2.5" fill="#CBFFFE" />
                                        </svg>
                                        <svg className="absolute left-[100%] top-[0]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <path d="M14.0621 1.5345C14.3843 0.663886 15.6157 0.663887 15.9379 1.53451L19.1619 10.2473C19.2632 10.521 19.479 10.7368 19.7527 10.8381L28.4655 14.0621C29.3361 14.3843 29.3361 15.6157 28.4655 15.9379L19.7527 19.1619C19.479 19.2632 19.2632 19.479 19.1619 19.7527L15.9379 28.4655C15.6157 29.3361 14.3843 29.3361 14.0621 28.4655L10.8381 19.7527C10.7368 19.479 10.521 19.2632 10.2473 19.1619L1.5345 15.9379C0.663886 15.6157 0.663887 14.3843 1.53451 14.0621L10.2473 10.8381C10.521 10.7368 10.7368 10.521 10.8381 10.2473L14.0621 1.5345Z" fill="#84BEBD"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="px-4 py-6 bg-white rounded-tr-xl rounded-br-xl w-1/2">
                                    <h6 className="text-[#3C3838] text-lg font-semibold leading-7">Human-Centric Assessment</h6>
                                    <p className="mt-1 text-[#898686] font-semibold text-sm leading-6">Upload any thing regarding</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
}