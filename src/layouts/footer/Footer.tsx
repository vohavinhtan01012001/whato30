import { Link } from "react-router-dom";
import { notices, sections } from "./menu";
import snsicon01 from "../../assets/snsicon-01.png";
import snsicon02 from "../../assets/snsicon-02.png";
import snsicon03 from "../../assets/snsicon-03.png";

export default function Footer() {
    return (
        <div>
            <div className="flex max-md:block items-start justify-between max-w-[1720px] max-[1720px]:px-4 pt-[49px] pb-[60px] border-y border-[#f4f4f4] mx-auto">
                <div className="max-md:pb-14">
                    <h2 className="text-[14px] font-bold pb-[30px]">what happened</h2>
                    <div className="text-[14px] font-light text-[#111111] font-noto">
                        {notices.map((notice, index) => (
                            <p key={index}><Link to="/" className="text-[#111111] leading-[2.14]">{notice}</Link></p>
                        ))}
                    </div>
                </div>
                <div className="grid gap-5 lg:gap-20 grid-cols-2 lg:grid-cols-4 ">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-[14px] font-bold pb-[30px]">{section.title}</h2>
                            {section.links.map((link, i) => (
                                <p key={i}>
                                    <Link to="/" className="font-noto text-[14px] font-light text-[#111111] leading-[2.14]">{link}</Link>
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center  max-w-[1720px] max-[1720px]:px-4  mx-auto pt-[22px] pb-[113px] max-lg:block">
                <div className="font-noto text-[14px] font-light leading-7  text-[#a9a9a9]">
                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr <br />
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                </div>
                <div className="flex items-center max-lg:justify-center">
                    <div className="mr-[25px]">
                        <img src={snsicon01} alt="snsicon01" className="w-[20px] h-[21px]" />
                    </div>
                    <div className="mr-[25px]">
                        <img src={snsicon02} alt="snsicon02" className="w-[20px] h-[21px]" />
                    </div>
                    <div>
                        <img src={snsicon03} alt="snsicon03" className="w-[20px] h-[21px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
