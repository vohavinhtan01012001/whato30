import Button from '../../components/ui/Button';
import CheckBox from "../../components/ui/CheckBox";
import Input from "../../components/ui/Input"
import Label from '../../components/ui/Label';
import { useFormik } from 'formik';
import { registerSchema } from '../../validators/auth';
import { useState } from 'react';

function Register() {
    const [isTermsAccepted, setIsTermsAccepted] = useState(true);
    const [isMarketingAccepted, setIsMarketingAccepted] = useState(false);

    const handleChangeCheckBox = (type: 'terms' | 'marketing', checked: boolean) => {
        if (type === 'terms') {
            setIsTermsAccepted(checked);
        } else if (type === 'marketing') {
            setIsMarketingAccepted(checked);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            additionalAddress: '',
            contact: '',
            isTermsAccepted: false,
            isMarketingAccepted: false,
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            values.isMarketingAccepted = isMarketingAccepted;
            values.isTermsAccepted = isTermsAccepted;
            console.log('Form submitted with values: ', values);
        },
    });


    return (
        <form onSubmit={formik.handleSubmit} className='flex items-center justify-center flex-col pb-[177px] pt-[121px] '>
            <h2 className='text-[#0565bb] text-[45px] font-extrabold pb-[57px] uppercase'>Join us</h2>
            <div className='pt-[33px] border-y-2 border-[#222222] pb-[42px] max-md:w-full max-md:px-2'>
                <div className='flex items-center gap-4 flex-col'>
                    <div className="max-md:w-full">
                        <Label required>아이디(이메일)</Label>
                        <Input
                            name='email'
                            placeholder='example@email.com'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className='text-red-500 text-sm'>{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="max-md:w-full">
                        <Label required>비밀번호</Label>
                        <Input
                            type='password'
                            name='password'
                            placeholder='영문, 숫자, 특수문자를 포함한 8~12자리'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className='text-red-500 text-sm'>{formik.errors.password}</p>
                        ) : null}
                    </div>
                    <div className="max-md:w-full">
                        <Label required>비밀번호 확인</Label>
                        <Input
                            type='password'
                            name='confirmPassword'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <p className='text-red-500 text-sm'>{formik.errors.confirmPassword}</p>
                        ) : null}
                    </div>
                    <div className="max-md:w-full">
                        <Label>주소</Label>
                        <Input
                            name='address'
                            buttonEnd="검색"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <p className='text-red-500 text-sm'>{formik.errors.address}</p>
                        ) : null}
                    </div>
                    <div className="max-md:w-full">
                        <Input
                            name='additionalAddress'
                            placeholder="추가 주소"
                            value={formik.values.additionalAddress}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="max-md:w-full">
                        <Label>연락처</Label>
                        <Input
                            name='contact'
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.contact && formik.errors.contact ? (
                            <p className='text-red-500 text-sm'>{formik.errors.contact}</p>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="w-[454px] pt-[27px] pb-[50px] max-[454px]:w-[320px]">
                <div className="flex justify-end items-center pb-[15px]">
                    <CheckBox checked={isTermsAccepted} onClick={(checked) => handleChangeCheckBox('terms', checked)} />
                    <div className="font-noto text-[#000000] font-light text-[14px]">
                        <span className="text-[#659bf5]">이용약관</span> 및 <span className="text-[#659bf5]">개인정보 처리 방침</span>에 동의합니다. (필수)
                    </div>
                </div>
                <div className=" flex justify-end items-center">
                    <CheckBox checked={isMarketingAccepted} onClick={(checked) => handleChangeCheckBox('marketing', checked)} />
                    <div className="font-noto text-[#000000] font-light text-[14px]">
                        광고 및 메일 수신에 동의합니다. (선택)
                    </div>
                </div>
            </div>
            <div>
                <Button>가입하기</Button>
            </div>
        </form>
    )
}

export default Register
