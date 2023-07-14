import React from 'react'

const Contact = () => {
    return (
        <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" text-white font-semibold text-[32px] mt-12">
                <span className=' text-[#C778DD]'>/</span>
                Contactos</div>
            {/* h2 title */}
            <div className=" text-white mt-[14px] mb-[46px]"></div>
            {/* flex main */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* left side */}
                <div className="  md:w-3/5 w-full">
                    {/* some text */}
                    <div className=" text-[#ABB2BF] font-medium">
                        Estou interessado em oportunidades de trabalho de curto prazo. No entanto, se tiver outra ideia, não hesite em contactar-me.
                    </div>
                </div>
                {/* right side */}
                <div className=" flex gap-3">
                    {/* boxes/flex */}
                    {/* 1 */}

                    {/* 2 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-4 '>Contactos</h2>
                        <div className=" text-[#ABB2BF]">
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <img src={require("./imgs/Discord.png")} alt="" />
                                {/* text */}
                                <span>daaviinchiii</span>
                            </div>
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <img src={require("./imgs/Email.png")} alt="" />
                                {/* text */}
                                <span>daaviinchiii@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all media */}
            <div className=" mt-6 mb-5x">
                {/* title */}
                <div className=" text-[32px] font-medium text-white"><span className='text-[#C778DD]'>#</span>Redes Sociais</div>
                {/* media */}
                <div className=" flex gap-6">
                    <a href="https://www.instagram.com/david_23_c/">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={require('./imgs/insta.png')} alt="" />
                            <span>@david_23_c</span>
                        </div>
                    </a>
                    <a href="https://twitter.com/david_23_c">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={require('./imgs/Twitter.png')} alt="" />
                            <span>@david_23_c</span>
                        </div>
                    </a>
                    <a href="https://github.com/daaviinchiii">
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={require('./imgs/Github.png')} alt="" />
                            <span>@daaviinchiii</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
