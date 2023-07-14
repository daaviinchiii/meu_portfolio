import React from 'react'

const Skills = () => {
    const skills = [
        {
            title: "Linguagens",
            languages: ["HTML", "CSS", "PHP", "JavaScript", "Spring Boot", "Flutter"],
        },
        { title: "Bases de dados", languages: ["MySQL"] },
        {
            title: "Ferramentas",
            languages: [
                "VSCode",
                "Linux",
                "Windows",
                "Sweetalert2h",
                "Git",
                "Font Awesome",
            ],
        },
        {
            title: "Frameworks",
            languages: [
                "React",
                "Discord.js",
                "Srping",
            ],
        },
    ];
    return (
        <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
            {/* title */}
            <div className=" mb-12 text-[32px] font-medium text-white">
                <span className='text-[#C778DD]'>#</span>
                Competências
            </div>
            {/* cards */}
            <div className=" flex justify-around gap-4 flex-wrap">
                {/* card */}
                {skills.map(({ title, languages }) => {
                    return (
                        <>
                            <div className="w-[90%] sm:w-[45%] md:w-[24%] lg:w-[18%] border border-[#ABB2BF]">
                                <div className=" text-white p-2">
                                    <h2 className=" font-semibold">{title}</h2>
                                </div>
                                <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                                    {languages.map((e) => {
                                        return <span>{e}</span>;
                                    })}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills