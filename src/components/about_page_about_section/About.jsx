import React from 'react'

const About = () => {
    return (
        <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" mb-12">
                <div className=" text-white w-2/3 font-semibold text-[32px]">
                    <div className="">
                        <span className="text-[#C778DD]">/</span>
                        Sobre mim
                    </div>
                </div>
            </div>
            <div className=" flex-wrap flex items-center justify-between">
                {/* left */}
                <div className="md:w-[48%] w-full">
                    {/* disc */}
                    <p className="text-[#ABB2BF] ">
                        Ola eu chamo-me David
                        <br />
                        <br />
                        Sou um estudante interessado pela área de programação. Neste momento, estou à
                        procura de oportunidades para aumentar o meu conhecimento e adquirir
                        experiência na área de trabalho. Durante o meu percurso no curso de programador
                        de informática, adquiri conhecimentos em: Spring Boot, JavaScript, MySQL,
                        Flutter, PHP, HTML e CSS. Também obtive conhecimentos na área de gestão de
                        sistemas: Windows e Windows Server.
                        <br />
                        <br />
                        Sou uma pessoa motivada, empenhada, criativa e determinada a enfrentar
                        desafios. Tenho facilidade em aprender novos conceitos e estou aberto a receber feedback construtivo para melhorar o meu desempenho. Valorizo o trabalho em
                        equipa e tenho boas capacidades de relacionamento interpessoal.
                        Estou determinado a trabalhar arduamente para alcançar os meus objetivos
                        académicos e profissionais. Agradeço a oportunidade de partilhar um pouco sobre
                        mim
                    </p>
                </div>
                {/* right */}
                <div className=" mx-auto">
                    <img className="mx-auto" src={require("./imgs/david.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About