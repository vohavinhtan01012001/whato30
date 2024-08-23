import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import naverIcon from '../../assets/naver-icon.png'
import kakaoIcon from '../../assets/kakao-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
import googleIcon from '../../assets/google-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchema } from '../../validators/auth'

function Login() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log('Form data:', values);
        },
    });
    return (
        <div className='flex items-center justify-center flex-col pb-[147px] pt-[121px]'>
            <h2 className='text-[#0565bb] text-[45px] font-extrabold pb-[57px]'>Welcome!</h2>
            <form onSubmit={formik.handleSubmit} className='pt-[33px] border-t-2 border-[#222222]'>
                <div className='flex items-center gap-4 flex-col'>
                    <div className='w-full'>
                        <Input
                            name='email'
                            type='email'
                            placeholder='아이디 (이메일)'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-[#a1a1a1]'}`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-500 text-sm'>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className='w-full'>
                        <Input
                            name='password'
                            type='password'
                            placeholder='비밀번호'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-[#a1a1a1]'}`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-red-500 text-sm'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                </div>
                <div className='pt-[23px]'>
                    <Button >로그인하기</Button>
                </div>
                <div className='pt-[73px] pb-[43px] text-center'>
                    <p className='font-noto text-[#404142] text-base font-medium'>SNS 계정으로 로그인</p>
                </div>
                <div className='flex items-center justify-between w-full pb-[53px]'>
                    <div>
                        <img src={naverIcon} alt="naverIcon" className='h-[66px]' />
                    </div>
                    <div>
                        <img src={kakaoIcon} alt="naverIcon" className='h-[66px]' />
                    </div>
                    <div>
                        <img src={facebookIcon} alt="naverIcon" className='h-[66px]' />
                    </div>
                    <div>
                        <img src={googleIcon} alt="naverIcon" className='h-[66px]' />
                    </div>
                </div>
                <div className='pb-[32px]'>
                    <Button variant='secondary' onClick={() => navigate('/register')} >계정이 없으신가요? 간편가입하기</Button>
                </div>
                <div className='flex items-center justify-around'>
                    <p><Link to={'/'} className='font-light text-[14px] text-[#1a58f2]'>아이디(이메일)찾기</Link></p>
                    <p><Link to={'/'} className='font-light text-[14px] text-[#1a58f2]'>비밀번호 찾기</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login