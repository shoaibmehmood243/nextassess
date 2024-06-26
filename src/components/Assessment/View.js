'use client'

import { ImPencil } from "react-icons/im";
import { BiSolidLike, BiSolidDislike, BiSolidPencil } from "react-icons/bi";
import { MdRefresh, MdDownload } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import { useRef, useState } from "react";
import EditAssessment from "./Edit";

export default function ViewAssessment({ data, setConvertResponse, tryAgain, type }) {
    const options = {
        filename: `${data?.title_assessment}.pdf`,
        method: "save",
        resolution: Resolution.MEDIUM,
        page: {
            margin: Margin.MEDIUM,
            format: "A4",
            orientation: "portrait"
        },
        canvas: {
            mimeType: "image/jpeg",
            qualityRatio: 1
        },
        overrides: {
            pdf: {
                compress: true
            },
            canvas: {
                useCORS: true,
                windowWidth: 1500,
            }
        }
    };
    const targetRef = useRef();
    const downloadPdf = () => {
        generatePDF(targetRef, options)
    };
    const [edit, setEdit] = useState(false);
    return (
        <>
        {
            !edit ? (<>
                <div className="flex justify-between items-center md:flex-row flex-col gap-5 my-4">
                    <div onClick={()=> setConvertResponse()}>
                        <button className="flex items-center gap-2 bg-white rounded-md py-3 px-5 text-[#202123] font-semibold">
                            <IoMdArrowBack className="w-5 h-5" /> Back
                        </button>
                    </div>
                    <div onClick={()=> setEdit(true)}>
                        <button className="flex items-center gap-2 bg-white rounded-md py-3 px-7 text-[#202123] font-semibold">
                            <ImPencil className="w-4 h-4" /> Edit
                        </button>
                    </div>
                </div>
                <div ref={targetRef} id="container" className="mx-auto md:w-2/3 bg-white rounded-[10px] border border-[#A9A9A9] mt-5">
                    <div className="p-8">
                        <h1 className="text-black text-3xl font-bold mb-3">
                            {data?.title_assessment}
                        </h1>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px] mb-2">
                            Overview And Rationale:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px]">
                            {data?.overview_and_rationale}
                        </p>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Assessment Unit:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.assessment_unit}
                        </p>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Weighting:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.percentage_weighting}
                        </p>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Due Date:{" "}
                        </h6>
                        <p className="text-[#666666] font-normal text-[15px] leading-[26px] mb-3">
                            {data?.due_date}
                        </p>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Assessment Description:{" "}
                        </h6>
                        {
                            data?.assessment_description?.map((item, index) => (
                                <div key={index}>
                                    {Object.keys(item).map((sectionKey) => (
                                        <div key={sectionKey} className="mb-1">
                                            <h6 className="text-[#666666] font-bold text-[15px] leading-[26px] capitalize">
                                                {sectionKey.replace(/_/g, ' ')}
                                            </h6>
                                            <ul>
                                                {item[sectionKey].map((listItem, itemIndex) => (
                                                <li key={itemIndex} className="text-[#666666] font-normal text-[15px] leading-[26px]">
                                                    {listItem}
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="px-8 py-6">
                        <h6 className="text-black font-bold text-[15px] leading-[26px]">
                            Submission Requirements
                        </h6>
                        <ul className="m-0 list-disc pl-4">
                            {
                                data?.submission_requirements.map((outcome, index) => (
                                    <li key={index} className="text-[#666666] font-normal text-sm leading-[26px]">
                                        {outcome}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="m-0 h-[1px] bg-[#A9A9A9]"></div>
                    <div className="w-full py-8 px-4">
                        <h6 className="text-black font-bold text-[15px] leading-[26px] mb-2">
                            Marking Rubric:{" "}
                        </h6>
                        <div className="overflow-x-auto">
                            <div className="min-w-full">
                                <table className="w-full min-w-max  table-fixed">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-32 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Criteria
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Weighting
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-20 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Fail
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Pass Grade
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Credit
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                Distinction
                                            </th>
                                            <th scope="col" className="py-3 px-1 md:px-1 w-24 font-normal md:font-semibold text-sm uppercase border border-[#A9A9A9]">
                                                High Distinction
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {data?.marking_rubric.map((item, index) => (
                                            <tr key={index} className='bg-white'>
                                                <td className="py-3 px-1 md:px-1 font-normal md:font-semibold text-sm border border-[#A9A9A9]">
                                                    {item.criteria}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.weighting}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.fail}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.pass_grade}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.credit}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.distinction}
                                                </td>
                                                <td className="py-3 px-1 md:px-1 font-normal text-xs text-[#666666] border border-[#A9A9A9]">
                                                    {item.high_distinction}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-1 md:gap-3 mt-5 md:w-1/2 mx-auto">
                    <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <BiSolidLike className="w-7 h-7" />
                        <p className="text-[#666666] text-center text-[13px]">Like</p>
                    </div>
                    <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <BiSolidDislike className="w-7 h-7" />
                        <p className="text-[#666666] text-center text-[13px]">Unlike</p>
                    </div>
                    <div onClick={()=> tryAgain(type)} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <MdRefresh className="w-7 h-7 text-[#FF0000]" />
                        <p className="text-[#FF0000] text-center text-[13px]">Try Again</p>
                    </div>
                    <div className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <IoSaveSharp className="w-7 h-7" />
                        <p className="text-[#666666] text-center text-[13px]">Save</p>
                    </div>
                    <div onClick={()=> setEdit(true)} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <BiSolidPencil className="w-7 h-7" />
                        <p className="text-[#666666] text-center text-[13px]">Edit</p>
                    </div>
                    <div onClick={()=> downloadPdf()} className="py-4 cursor-pointer flex justify-center items-center bg-white flex-col gap-1 border border-[#A9A9A9] rounded-lg">
                        <MdDownload className="w-7 h-7" />
                        <p className="text-[#666666] text-center text-[13px]">Download</p>
                    </div>
                </div>
            </>) : (
                <EditAssessment data={data} back={()=> setEdit(false)} tryAgain={()=> tryAgain(type)} downloadPdf={()=> downloadPdf()} />
            )
        }
        </>
    );
}
