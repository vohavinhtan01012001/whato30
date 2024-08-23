import bannerImage from '../../assets/main-banner.png';
import introductionImage from '../../assets/introduction-bg.png';
import production01 from '../../assets/best-image-01.png';
import production02 from '../../assets/best-image-02.png';
import production03 from '../../assets/best-image-03.png';
import ProductionBest from '../../components/shared/ProductionBest';
import Button from '../../components/shared/ButtonSeeMore';
import HeaderSection from '../../components/shared/HeaderSection';
import collaboration from '../../assets/collaboration.png';
import note from '../../assets/note.png';
import book from '../../assets/book.png';
import book2 from '../../assets/book2.png';
import calendar from '../../assets/calendar.png';
import jar from '../../assets/jar.png';
import newsImg02 from '../../assets/news-img-02.png';
import newsImg03 from '../../assets/news-img-03.png';
import newsImg04 from '../../assets/news-img-04.png';
import newsImg05 from '../../assets/news-img-05.png';
import dice from '../../assets/dice.png';
import dice2 from '../../assets/dice2.png';
import newObject3 from '../../assets/newObject3.png';
import newObject5 from '../../assets/newObject5.png';
import video from '../../assets/video.png';
import videoObject4 from '../../assets/video-object-04.png';
import videoObject8 from '../../assets/video-object-08.png';
import videoObject1 from '../../assets/video-object-01.png';
import videoObject2 from '../../assets/video-object-02.png';
import ProductionList from './components/ProductionList';


const newsItems = [
    { img: newsImg02, bg: '#111111', title: 'b brand', border: 'border-x-[2px] border-[#110e03]' },
    { img: newsImg03, bg: '#111111', title: 'c brand', border: 'border-x-[2px] border-[#110e03]' },
    { img: newsImg04, bg: '#ff5500', title: 'd brand', border: 'border-x-[2px] border-[#110e03]' },
    { img: newsImg05, bg: '#111111', title: 'e brand', border: 'border-x-[2px] border-[#110e03]' },
];

function Home() {
    return (
        <div>
            <div>
                <img src={bannerImage} alt="banner" className='w-full h-auto' />
            </div>
            <div style={{
                backgroundImage: `url(${introductionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '576px',
            }}
                className='relative '
            >
                <div className='absolute top-0 h-full left-[174px] max-[900px]:left-0 max-[900px]:px-3 flex items-center justify-center text-white'>
                    <div className='text-white text-left max-w-[667px] '>
                        <h2 className='font-sans text-[50px] font-extrabold'>What Happened!</h2>
                        <p className='mt-[59px] text-left text-xl font-sans '>
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                            step to your brand's success. How to create mobile-optimized videos
                            in minutes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#fcd426] w-full h-[1073px] max-[1100px]:h-[1350px] max-md:h-[2000px] relative'>
                <div className='absolute  right-0 top-[150px] bottom-[150px] left-0'>
                    <HeaderSection title='Best Product'
                        className='text-[#f96400]'
                        classNameText='tracking-tight font-sans text-[20px] '
                    >
                        How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                    </HeaderSection>
                    <div className='container mx-auto'>
                        <div className="flex items-center justify-center pt-[74px]  max-md:block max-md:w-full">
                            <ProductionBest image={production01} number={1} className=' w-[523px] max-md:w-[350px] max-md:mx-auto max-md:px-2 ' />
                            <ProductionBest image={production02} number={2} className=' w-[523px] max-md:w-[350px] max-md:mx-auto max-md:px-2 max-md:my-32' />
                            <ProductionBest image={production03} number={3} className='w-[523px] max-[1100px]:hidden max-md:block max-md:w-[350px] max-md:mx-auto max-md:px-2 ' />
                        </div>
                        <div className='hidden max-[1100px]:flex items-center justify-center max-w-[1046px] pt-[100px] max-md:hidden'>
                            <ProductionBest image={production03} number={3} className='w-[384px]' />
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-white pt-[142px] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:px-[130px]'>
                <ProductionList />
            </div>
            <div className='pb-[143px] w-full flex justify-center items-center pt-[116px]'>
                <Button />
            </div>
            <div className='w-full bg-[#0565bb] overflow-hidden'>
                <div className='w-full h-full relative '>
                    <HeaderSection
                        title='Brand Story'
                        className='text-[#fcd32a] pt-[149px] z-10 relative'
                        classNameText=' tracking-tight font-noto font-light '
                    >
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </HeaderSection>
                    <div
                        className='mx-auto max-w-[1250px] pt-[77px] z-10 relative mb-[170px] max-[1200px]:min-h-[120vh] max-[1200px]:px-3'
                    >
                        <div className='bg-[#111111] w-full h-6 z-10 relative '>
                            <div className='flex items-center justify-center flex-col gap-y-2 h-full'>
                                <div className='bg-[#0565bb] h-[2px] w-[98%]  '></div>
                                <div className='bg-[#0565bb] h-[2px] w-[98%]  '></div>
                            </div>
                        </div>
                        <div className='max-w-[1250px] flex items-center max-h-[418px] z-10 relative max-[1200px]:block '>
                            <div>
                                <img src={collaboration} alt="collaboration" className='max-[1200px]:w-full' />
                            </div>
                            <div className='bg-white h-[418px] w-[638px] border-[3px] border-[#111111] max-[1200px]:w-full max-sm:h-[600px]'>
                                <div className='py-[63px] px-[65px]  max-w-[600px]'>
                                    <h2 className='text-[25px] font-extrabold uppercase pb-[30px]'>What Happened’s Brand story</h2>
                                    <p className='text-base text-[#222] font-noto font-light text-left max-w-[528px] tracking-tighter'>
                                        청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                                    </p>
                                    <div className='pt-[47px]'>
                                        <Button />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute -top-[90px] -left-[160px] z-0'>
                            <img src={note} alt="note" />
                        </div>

                    </div>
                    <div className='absolute right-[13.3%] top-[6.4%] z-0'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="147">
                                <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#FCD32A" d="M7.334 6.485h145.8V140.14H7.334V6.485z" />
                                <text font-family="Montserrat" fill="#222" transform="translate(24.076 62.778) scale(.68301)" font-weight="bold" font-size="18"> <tspan>WHAT HAPP</tspan><tspan x="0" dy="1.5em">ENED’S</tspan><tspan x="0" dy="1.5em">BRAND SRORY</tspan><tspan x="0" dy="1.5em">PLAN</tspan>
                                </text>
                                <text font-family="Montserrat" fill="#222" transform="translate(79.184 34.623) scale(.68301)" font-weight="bold" font-size="20">JIN</text>
                                <text font-family="Montserrat" fill="#222" transform="translate(24.287 34.623) scale(.68301)" font-weight="bold" font-size="20">NAME</text>
                            </svg>
                        </div>
                        <div className='absolute top-[23%] -right-[55%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="161" height="199">
                                <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#FFF" d="M6.5 27.5h148v165H6.5v-165z" />
                                <text font-family="Montserrat" fill="#222" font-weight="bold" font-size="20" x="27.5" y="125.5"> <tspan dy="-53.938">JIN’S</tspan><tspan x="27.5" dy="1.35em">WEEKLY</tspan><tspan x="27.5" dy="1.35em">PLAN</tspan>
                                </text>
                                <path fill-rule="evenodd" fill="#FCD32A" d="M26.5 173.5v-3.001h107v3.001h-107zm0-13h107v2.999h-107V160.5zm0-10h107v3h-107v-3zm0-10.001h107v3.001h-107v-3.001z" />
                                <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#111" d="M106.499 6.5h24v43.999h-24V6.5z" />
                            </svg>
                        </div>
                    </div>
                    <div className='absolute top-[55%] left-0'>
                        <div className='flex items-end'>
                            <img src={book} alt="book" />
                            <img src={book2} alt="book2" />
                        </div>
                    </div>
                    <div className='absolute top-[70%] -right-[35px] z-[2]'>
                        <img src={calendar} alt="calendar" />
                    </div>
                    <div className='absolute top-[30%] -right-[100px] z-0'>
                        <img src={jar} alt="jar" />
                    </div>
                </div>
            </div>
            <div className='relative w-full bg-[#fccb05] h-full pb-[142px] max-[1000px]:min-h-[200vh] max-md:min-h-[225vh] '>
                <div className='w-full h-full relative pb-[128px] z-10'>
                    <HeaderSection
                        title='Happened’s issue'
                        className='text-[#110e03] pt-[149px] z-10 relative'
                        classNameText=' tracking-tight font-noto font-light '
                    >
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </HeaderSection>
                    <div className='flex justify-center mx-auto pt-[55px]'>
                        <Button />
                    </div>
                </div>
                <div className='w-full grid grid-cols-2  lg:grid-cols-5  gap-0 h-[480px] border-y-[3px] border-[#110e03] relative  z-10'>
                    <div className='bg-[#ff5500] text-center h-[474px] max-md:h-[261px]'>
                        <h2 className='text-[#110e03] text-[55px] font-extrabold pt-[87px] leading-none uppercase'>whpn <br />
                            issue
                        </h2>
                        <div className='pt-[63px] max-md:h-auto'>
                            <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="167" height="166">
                                <path fill-rule="evenodd" stroke-width="8" stroke="#111" fill="#FFF" d="M9.999 9h148v147.999h-148V9z" />
                                <text font-family="Noto Sans CJK KR" fill="#1C2027" transform="matrix(1.30973 0 0 1.30956 28.146 127.025)" font-size="90">→</text>
                            </svg>
                        </div>
                    </div>
                    {
                        newsItems.map((newsItem) => {
                            return <div className={`h-full  ${newsItem.border}`}>
                                <div className={`bg-[${newsItem.bg}] h-[75px] ${newsItem.border}`}>
                                    <h2 className="w-full text-white font-extrabold text-[30px] uppercase h-full flex justify-center items-center">
                                        {newsItem.title}
                                    </h2>
                                </div>
                                <div>
                                    <img src={newsItem.img} alt="news" className={`h-[399px] w-full max-md:h-auto`} />
                                </div>
                            </div>
                        })
                    }
                    <div className='absolute -top-8 left-[21.4%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="72">
                            <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#F50" d="M61.999 6.498c30.652 0 55.5 13.208 55.5 29.5 0 16.293-24.848 29.5-55.5 29.5s-55.5-13.207-55.5-29.5c0-16.292 24.848-29.5 55.5-29.5z" />
                            <text font-family="Montserrat" fill="#111" transform="matrix(4.07277 0 0 4.07277 30.044 44.076)" font-weight="bold" text-decoration="underline" font-size="7">HOT</text>
                        </svg>
                    </div>
                    <div className='absolute -bottom-[20%] left-[12%]'>
                        <img src={newObject3} alt="newObject3" />
                    </div>
                    <div className='absolute -bottom-[13%] right-[18.4%]'>
                        <img src={newObject5} alt="newObject3" className='w-[133px] h-[100px]' />
                    </div>
                </div>
                <div className='absolute top-[3.8%] right-[3.6%]'>
                    <img src={dice} alt="dice" className='w-[95px] h-[95px]' />
                </div>
                <div className='absolute top-[14.3%] right-[3.5%]'>
                    <img src={dice2} alt="dice2" className='w-[119px] h-[111px]' />
                </div>
            </div>
            <div className='bg-white w-full h-full relative overflow-hidden'>
                <HeaderSection
                    title='what happened'
                    className='pt-[148px] text-[#111111] relative z-10'
                    classNameText='tracking-tight font-sans text-[20px]'
                >
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </HeaderSection>
                <div className='w-full flex justify-center pt-[53px] pb-[72px] relative z-10'>
                    <Button />
                </div>
                <div className='w-full relative z-10 pb-[392px]'>
                    <div className='relative'>
                        <img src={video} alt="video" className='mx-auto z-10 relative' />
                        <div className=' absolute left-[11%] -bottom-[10%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159">
                                <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#F50" d="M6.5 6.499h145.999v146H6.5v-146z" />
                                <text font-family="Montserrat" fill="#111" transform="translate(41.985 109.328) scale(.87545)" font-style="italic" font-size="95" className='font-black'>H</text>
                            </svg>
                        </div>
                        <div className='absolute -bottom-[30%] left-[18.1%]'>
                            <img src={videoObject1} alt="videoObject1" />
                        </div>
                        <div className='absolute -bottom-[15%] right-[33.8%]'>
                            <img src={videoObject2} alt="videoObject2" className='w-[90px] h-[83px]' />

                        </div>
                    </div>
                </div>
                <div className='absolute left-[11.8%] -top-[5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="159" height="127">
                        <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#111" d="M6.5 6.5h145.999v113.999H6.5V6.5z" />
                        <text font-family="Montserrat" fill="#FFF" transform="translate(41.985 77.328) scale(.87545)" font-style="italic" font-size="95" className='font-black'>H</text>
                    </svg>
                </div>
                <div className='absolute top-[11.6%] right-[7.2%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="164.5" height="164.5">
                        <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#FCD32A" d="M6.5 12h145.999v146H6.5V12z" />
                        <path fill-rule="evenodd" fill="#222" d="M135.333.833h28.333v28.333h-28.333V.833z" />
                        <path fill-rule="evenodd" fill="#FFF" d="m155.788 19.616-1.102 1.1-4.887-4.881-5.462 5.456-1.135-1.132 5.463-5.457-4.887-4.88 1.101-1.102 4.888 4.882 4.661-4.655 1.133 1.843-4.66 3.944 4.887 4.882z" />
                        <text font-family="Montserrat" fill="#111" transform="translate(28.174 113.828) scale(.87545)" font-style="italic" font-size="95" className='font-black'>W</text>
                    </svg>
                    <div className='absolute -left-[47%] -bottom-[47%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130">
                            <path fill-rule="evenodd" fill="#111" d="M65 .249c35.76 0 64.748 28.989 64.748 64.75 0 35.76-28.988 64.75-64.748 64.75-35.762 0-64.751-28.99-64.751-64.75C.249 29.238 29.238.249 65 .249z" />
                            <path fill-rule="evenodd" fill="#FFF" d="m45.577 79.698 19.412 19.155L95.988 68.27a14.994 14.994 0 0 0-.007-21.631c-6.045-5.961-15.031-5.964-21.521.004v.003l-9.471 8.935-9.057-8.938c-6.048-5.953-15.432-5.958-21.935.003-2.267 2.885-4.537 6.728-4.537 10.815 0 4.081 2.27 7.919 4.64 10.804l11.493 11.43-.016.003z" />
                        </svg>
                    </div>
                </div>
                <div className='absolute top-[19%] -left-[333px] '>
                    <img src={videoObject4} alt="videoObject4" className='h-[512px] opacity-85' />
                </div>
                <div className='absolute top-[41%] -right-[9%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="355" height="383.5">
                        <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#EEE" d="M6.499 6.499h318V321.5h-318V6.499z" />
                        <path fill-rule="evenodd" fill="#111" d="m22.581 221.965 90.063 7.613c4.863.414 8.721 1.08 12.276 1.707-2.615 2.451-5.292 5.306-8.616 7.421l-29.921 19.068c-6.988 4.455-10.836 6.906-9.213 12.469l1.627 4.891h5.074c1.812 0 3.242-.36 10.229-3.993l31.687-16.492c5.613-2.731 9.963-4.148 12.799-4.468.907 3.257 1.787 10.237-.88 15.357l-16.842 32.365c-3.62 6.952-5.271 10.377-2.95 13.94l2.07 3.302h3.848c4.325 0 6.103-2.787 10.398-9.525l19.727-30.96c2.393-3.256 4.023-5.929 5.66-7.97 1.165 2.936 2.316 6.784 2.656 10.795l8.177 91.938c.124 6.272.784 14.081 8.054 14.081 7.269 0 7.934-7.806 8.464-14.081l7.773-91.935c.359-4.253.89-7.808 1.44-10.532 2.236 1.854 4.806 4.465 7.319 7.7l19.282 30.967c5.008 6.735 6.081 9.522 10.453 9.522l3.899.705 1.986-4.048c2.304-3.522.647-6.947-2.97-13.899l-16.842-32.361c-2.883-5.543-4-9.937-4.418-12.084 1.488.452 3.839-.772 6.795-.772 2.633 0 6.425.574 9.543 1.959l31.693 16.496c6.935 3.613 8.444 3.993 10.282 3.993h.007l5.245.236 1.43-5.249c1.581-5.441-2.264-7.892-9.254-12.347l-29.92-19.061c-3.403-2.171-6.143-4.223-8.163-5.913 3.117-1.4 7.366-2.844 11.819-3.222l90.067-7.613c6.275-.529 14.082-1.189 14.082-8.462s-7.807-7.933-14.082-8.083l-90.067-7.994c-4.856-.276-8.714-1.081-11.441-1.707 1.789-2.455 4.463-5.31 7.785-7.425l29.92-19.068c6.99-4.454 10.835-6.906 9.213-12.465l-1.63-4.895h-5.072c-1.77 0-3.272.377-10.221 3.997l-31.693 16.488c-5.253 3.499-9.963 4.152-12.797 4.472-.908-3.257-1.791-10.236.877-15.357l16.842-31.556c3.617-7.763 5.259-10.931 2.951-14.759l-1.841-3.296h-4.079c-4.331 0-5.451 2.787-10.399 9.525l-19.212 30.96c-2.59 3.257-4.25 5.933-6.173 7.97-1.164-2.939-1.587-6.788-2.656-10.791l-7.773-91.945c-.53-6.268-1.195-14.071-8.464-14.071-7.27 0-7.93 7.804-8.054 14.078l-8.177 91.935c-.363 4.255-.895 7.811-1.444 10.974-2.229-2.294-4.549-4.903-6.866-8.143l-19.734-30.967c-4.294-6.738-6.072-9.525-10.443-9.525l-3.899.054-1.997 3.289c-2.297 3.772-.646 6.944 2.974 14.752l16.842 31.516c2.654 5.09 1.808 12.262 1.02 15.371-2.818-.287-7.588-1.708-12.926-4.482l-30.82-16.492c-7.826-3.617-9.332-3.997-11.169-3.997h-.004l-5.24.097-1.433 4.92c-1.587 5.437 2.261 7.889 9.249 12.337l29.921 19.077c3.408 2.169 6.152 4.216 8.166 5.903-3.114 1.404-7.37 3.28-11.822 3.226l-90.067 7.994c-6.272.15-14.083.81-14.083 8.083s7.811 7.933 14.083 8.462z" />
                        <path fill-rule="evenodd" stroke-width="3" stroke="#111" fill="#FFF" d="M6.499 6.499H348.5V44.5H6.499V6.499z" />
                    </svg>
                    <div className='absolute -bottom-[100%] -left-[50%]'>
                        <img src={videoObject8} alt="videoObject8" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home