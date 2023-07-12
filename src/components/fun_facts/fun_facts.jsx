import React from 'react'

const Fun_facts = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-[#C778DD]'>#</span>
                factos sobre mim
            </div>
            <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
                {/* left */}
                <div className=" flex justify-start gap-4 w-full md:w-[48%] flex-wrap">
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        Pratico ginásio
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        Faço streams na twitch
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        Prefiro frio do que calor
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        os meus filmes favoritos são de terror
                    </div>
                    <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                        Não gosto de futebol
                    </div>
                </div>
                {/* right */}
                <div className=" flex justify-center items-center  w-full md:w-[48%]">
                    <img className=' w-[250px]' src={require("./imgs/Group 53.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Fun_facts