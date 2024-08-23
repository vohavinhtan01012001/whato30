import { Link } from 'react-router-dom'
import { AuthHeader, MenuHeader } from './components/menu'
import { MenuMobile } from './components/MenuMobile'

function Header() {
    return (
        <div className='h-[80px] bg-[#111] w-full fixed z-50 '>
            <div className='flex items-center justify-between h-full px-24 max-[1200px]:hidden'>
                <Link to={'/'} className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="226px" height="26px">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M222.0,20.298 L222.0,18.435 C221.443,19.119 220.754,19.632 219.936,19.973 C219.116,20.316 218.211,20.487 217.221,20.487 C215.836,20.487 214.589,20.181 213.482,19.568 C212.375,18.957 211.506,18.88 210.877,16.963 C210.247,15.839 209.931,14.547 209.931,13.89 C209.931,11.631 210.247,10.344 210.877,9.228 C211.506,8.112 212.375,7.249 213.482,6.636 C214.589,6.24 215.836,5.718 217.221,5.718 C218.175,5.718 219.50,5.880 219.841,6.204 C220.633,6.528 221.307,7.14 221.867,7.662 L221.867,0.264 L225.241,0.264 L225.241,20.298 L222.0,20.298 ZM221.353,10.713 C220.976,10.29 220.461,9.502 219.814,9.134 C219.167,8.765 218.437,8.580 217.627,8.580 C216.818,8.580 216.88,8.765 215.440,9.134 C214.793,9.502 214.279,10.29 213.901,10.713 C213.522,11.398 213.333,12.189 213.333,13.89 C213.333,13.989 213.522,14.781 213.901,15.465 C214.279,16.149 214.793,16.676 215.440,17.44 C216.88,17.414 216.818,17.598 217.627,17.598 C218.437,17.598 219.167,17.414 219.814,17.44 C220.461,16.676 220.976,16.149 221.353,15.465 C221.731,14.781 221.920,13.989 221.920,13.89 C221.920,12.189 221.731,11.398 221.353,10.713 ZM196.512,14.169 C196.711,15.231 197.228,16.73 198.66,16.694 C198.903,17.315 199.941,17.625 201.184,17.625 C202.768,17.625 204.73,17.103 205.98,16.59 L206.907,18.138 C206.260,18.912 205.441,19.497 204.451,19.893 C203.461,20.289 202.346,20.487 201.102,20.487 C199.518,20.487 198.124,20.172 196.919,19.542 C195.712,18.912 194.781,18.35 194.123,16.909 C193.467,15.785 193.137,14.511 193.137,13.89 C193.137,11.685 193.458,10.421 194.97,9.295 C194.736,8.171 195.622,7.293 196.756,6.662 C197.891,6.33 199.168,5.718 200.591,5.718 C201.995,5.718 203.251,6.29 204.357,6.650 C205.464,7.270 206.329,8.144 206.949,9.268 C207.571,10.394 207.880,11.694 207.880,13.170 C207.880,13.404 207.861,13.737 207.826,14.169 L196.512,14.169 ZM203.344,9.390 C202.606,8.742 201.688,8.417 200.591,8.417 C199.510,8.417 198.597,8.738 197.849,9.376 C197.103,10.16 196.647,10.866 196.486,11.928 L204.666,11.928 C204.523,10.885 204.82,10.38 203.344,9.390 ZM186.523,12.468 C186.523,11.208 186.225,10.259 185.633,9.620 C185.38,8.981 184.191,8.661 183.96,8.661 C181.851,8.661 180.872,9.34 180.151,9.782 C179.432,10.528 179.72,11.604 179.72,13.8 L179.72,20.298 L175.696,20.298 L175.696,5.880 L178.909,5.880 L178.909,7.743 C179.467,7.77 180.170,6.573 181.16,6.231 C181.860,5.889 182.815,5.718 183.877,5.718 C185.696,5.718 187.154,6.249 188.252,7.311 C189.350,8.373 189.899,9.948 189.899,12.36 L189.899,20.298 L186.523,20.298 L186.523,12.468 ZM161.90,14.169 C161.289,15.231 161.805,16.73 162.642,16.694 C163.479,17.315 164.518,17.625 165.761,17.625 C167.344,17.625 168.649,17.103 169.676,16.59 L171.485,18.138 C170.837,18.912 170.18,19.497 169.27,19.893 C168.38,20.289 166.922,20.487 165.679,20.487 C164.95,20.487 162.700,20.172 161.493,19.542 C160.289,18.912 159.357,18.35 158.701,16.909 C158.42,15.785 157.714,14.511 157.714,13.89 C157.714,11.685 158.33,10.421 158.673,9.295 C159.312,8.171 160.198,7.293 161.333,6.662 C162.467,6.33 163.744,5.718 165.166,5.718 C166.570,5.718 167.825,6.29 168.933,6.650 C170.39,7.270 170.904,8.144 171.525,9.268 C172.146,10.394 172.457,11.694 172.457,13.170 C172.457,13.404 172.438,13.737 172.404,14.169 L161.90,14.169 ZM167.920,9.390 C167.182,8.742 166.264,8.417 165.166,8.417 C164.87,8.417 163.173,8.738 162.426,9.376 C161.679,10.16 161.224,10.866 161.62,11.928 L169.244,11.928 C169.98,10.885 168.659,10.38 167.920,9.390 ZM152.139,19.568 C151.32,20.181 149.776,20.487 148.373,20.487 C146.429,20.487 144.890,19.839 143.757,18.543 L143.757,25.536 L140.380,25.536 L140.380,5.880 L143.594,5.880 L143.594,7.770 C144.152,7.86 144.840,6.573 145.660,6.231 C146.478,5.889 147.383,5.718 148.373,5.718 C149.776,5.718 151.32,6.24 152.139,6.636 C153.247,7.249 154.114,8.112 154.744,9.228 C155.375,10.344 155.690,11.631 155.690,13.89 C155.690,14.547 155.375,15.839 154.744,16.963 C154.114,18.88 153.247,18.957 152.139,19.568 ZM151.59,9.822 C150.258,8.995 149.237,8.580 147.995,8.580 C147.185,8.580 146.457,8.765 145.808,9.134 C145.160,9.502 144.648,10.29 144.268,10.713 C143.891,11.398 143.703,12.189 143.703,13.89 C143.703,13.989 143.891,14.781 144.268,15.465 C144.648,16.149 145.160,16.676 145.808,17.44 C146.457,17.414 147.185,17.598 147.995,17.598 C149.237,17.598 150.258,17.184 151.59,16.356 C151.860,15.529 152.262,14.440 152.262,13.89 C152.262,11.739 151.860,10.650 151.59,9.822 ZM133.617,19.568 C132.509,20.181 131.255,20.487 129.851,20.487 C127.908,20.487 126.369,19.839 125.233,18.543 L125.233,25.536 L121.859,25.536 L121.859,5.880 L125.72,5.880 L125.72,7.770 C125.630,7.86 126.317,6.573 127.138,6.231 C127.956,5.889 128.862,5.718 129.851,5.718 C131.255,5.718 132.509,6.24 133.617,6.636 C134.725,7.249 135.593,8.112 136.222,9.228 C136.853,10.344 137.167,11.631 137.167,13.89 C137.167,14.547 136.853,15.839 136.222,16.963 C135.593,18.88 134.725,18.957 133.617,19.568 ZM132.538,9.822 C131.737,8.995 130.716,8.580 129.473,8.580 C128.663,8.580 127.934,8.765 127.286,9.134 C126.638,9.502 126.125,10.29 125.748,10.713 C125.369,11.398 125.180,12.189 125.180,13.89 C125.180,13.989 125.369,14.781 125.748,15.465 C126.125,16.149 126.638,16.676 127.286,17.44 C127.934,17.414 128.663,17.598 129.473,17.598 C130.716,17.598 131.737,17.184 132.538,16.356 C133.339,15.529 133.739,14.440 133.739,13.89 C133.739,11.739 133.339,10.650 132.538,9.822 ZM114.353,18.543 C113.940,19.173 113.350,19.655 112.585,19.988 C111.819,20.320 110.897,20.487 109.818,20.487 C108.738,20.487 107.792,20.302 106.982,19.934 C106.173,19.565 105.546,19.51 105.106,18.395 C104.665,17.738 104.444,16.995 104.444,16.166 C104.444,14.870 104.926,13.832 105.889,13.48 C106.852,12.266 108.368,11.874 110.437,11.874 L114.164,11.874 L114.164,11.658 C114.164,10.650 113.863,9.876 113.259,9.336 C112.657,8.796 111.760,8.526 110.573,8.526 C109.764,8.526 108.968,8.652 108.184,8.903 C107.401,9.156 106.740,9.507 106.200,9.957 L104.876,7.501 C105.632,6.924 106.541,6.483 107.602,6.177 C108.666,5.871 109.791,5.718 110.978,5.718 C113.101,5.718 114.728,6.227 115.851,7.244 C116.976,8.261 117.539,9.795 117.539,11.847 L117.539,20.298 L114.353,20.298 L114.353,18.543 ZM114.164,14.115 L110.681,14.115 C108.738,14.115 107.766,14.754 107.766,16.32 C107.766,16.644 108.10,17.130 108.495,17.490 C108.980,17.850 109.654,18.30 110.520,18.30 C111.367,18.30 112.117,17.837 112.772,17.450 C113.431,17.62 113.894,16.509 114.164,15.789 L114.164,14.115 ZM97.803,12.468 C97.803,11.208 97.505,10.259 96.911,9.620 C96.318,8.981 95.471,8.661 94.373,8.661 C93.131,8.661 92.149,9.34 91.432,9.782 C90.710,10.528 90.350,11.604 90.350,13.8 L90.350,20.298 L86.976,20.298 L86.976,0.264 L90.350,0.264 L90.350,7.554 C90.908,6.960 91.597,6.506 92.415,6.190 C93.235,5.876 94.148,5.718 95.157,5.718 C96.975,5.718 98.432,6.249 99.531,7.311 C100.629,8.373 101.176,9.948 101.176,12.36 L101.176,20.298 L97.803,20.298 L97.803,12.468 ZM73.503,20.487 C71.919,20.487 70.695,20.74 69.831,19.245 C68.967,18.417 68.535,17.211 68.535,15.627 L68.535,8.688 L66.159,8.688 L66.159,5.988 L68.535,5.988 L68.535,2.694 L71.909,2.694 L71.909,5.988 L75.771,5.988 L75.771,8.688 L71.909,8.688 L71.909,15.546 C71.909,16.248 72.80,16.783 72.424,17.152 C72.765,17.521 73.260,17.706 73.907,17.706 C74.663,17.706 75.294,17.508 75.798,17.111 L76.744,19.515 C76.347,19.839 75.865,20.82 75.298,20.244 C74.731,20.406 74.132,20.487 73.503,20.487 ZM60.570,18.543 C60.155,19.173 59.567,19.655 58.801,19.988 C58.37,20.320 57.113,20.487 56.34,20.487 C54.954,20.487 54.9,20.302 53.200,19.934 C52.389,19.565 51.764,19.51 51.321,18.395 C50.881,17.738 50.662,16.995 50.662,16.166 C50.662,14.870 51.143,13.832 52.106,13.48 C53.68,12.266 54.585,11.874 56.656,11.874 L60.380,11.874 L60.380,11.658 C60.380,10.650 60.79,9.876 59.477,9.336 C58.874,8.796 57.978,8.526 56.789,8.526 C55.980,8.526 55.184,8.652 54.400,8.903 C53.618,9.156 52.956,9.507 52.416,9.957 L51.93,7.501 C51.849,6.924 52.759,6.483 53.820,6.177 C54.881,5.871 56.7,5.718 57.196,5.718 C59.319,5.718 60.943,6.227 62.70,7.244 C63.194,8.261 63.757,9.795 63.757,11.847 L63.757,20.298 L60.570,20.298 L60.570,18.543 ZM60.380,14.115 L56.899,14.115 C54.954,14.115 53.980,14.754 53.980,16.32 C53.980,16.644 54.224,17.130 54.710,17.490 C55.197,17.850 55.872,18.30 56.735,18.30 C57.582,18.30 58.332,17.837 58.991,17.450 C59.647,17.62 60.112,16.509 60.380,15.789 L60.380,14.115 ZM44.18,12.468 C44.18,11.208 43.723,10.259 43.128,9.620 C42.533,8.981 41.688,8.661 40.591,8.661 C39.348,8.661 38.367,9.34 37.647,9.782 C36.927,10.528 36.567,11.604 36.567,13.8 L36.567,20.298 L33.192,20.298 L33.192,0.264 L36.567,0.264 L36.567,7.554 C37.125,6.960 37.812,6.506 38.633,6.190 C39.451,5.876 40.364,5.718 41.372,5.718 C43.192,5.718 44.649,6.249 45.747,7.311 C46.844,8.373 47.394,9.948 47.394,12.36 L47.394,20.298 L44.18,20.298 L44.18,12.468 ZM20.258,20.298 L15.590,6.312 L10.837,20.298 L7.83,20.298 L0.819,1.398 L4.464,1.398 L9.164,15.762 L14.50,1.398 L17.288,1.398 L22.67,15.843 L26.900,1.398 L30.250,1.398 L23.984,20.298 L20.258,20.298 Z" />
                    </svg>
                </Link>
                <div className='flex items-center w-full justify-end '>
                    <div className=''>
                        {
                            MenuHeader.map(menu => {
                                return <Link to={menu.link} className='uppercase text-sm font-sans px-8 text-white'>
                                    {menu.name}
                                </Link>
                            })
                        }
                    </div>
                    <div className='bg-[#ccc8c6] w-[1px] h-[23px]'>
                    </div>
                    <div>
                        {
                            AuthHeader.map(menu => {
                                return <Link to={menu.link} className='uppercase px-8 text-sm font-sans text-white'>
                                    {menu.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='hidden max-[1200px]:flex justify-start items-center h-full px-5'>
                <MenuMobile />
                <div className='mx-auto'>
                    <Link to={'/'} className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="226px" height="26px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M222.0,20.298 L222.0,18.435 C221.443,19.119 220.754,19.632 219.936,19.973 C219.116,20.316 218.211,20.487 217.221,20.487 C215.836,20.487 214.589,20.181 213.482,19.568 C212.375,18.957 211.506,18.88 210.877,16.963 C210.247,15.839 209.931,14.547 209.931,13.89 C209.931,11.631 210.247,10.344 210.877,9.228 C211.506,8.112 212.375,7.249 213.482,6.636 C214.589,6.24 215.836,5.718 217.221,5.718 C218.175,5.718 219.50,5.880 219.841,6.204 C220.633,6.528 221.307,7.14 221.867,7.662 L221.867,0.264 L225.241,0.264 L225.241,20.298 L222.0,20.298 ZM221.353,10.713 C220.976,10.29 220.461,9.502 219.814,9.134 C219.167,8.765 218.437,8.580 217.627,8.580 C216.818,8.580 216.88,8.765 215.440,9.134 C214.793,9.502 214.279,10.29 213.901,10.713 C213.522,11.398 213.333,12.189 213.333,13.89 C213.333,13.989 213.522,14.781 213.901,15.465 C214.279,16.149 214.793,16.676 215.440,17.44 C216.88,17.414 216.818,17.598 217.627,17.598 C218.437,17.598 219.167,17.414 219.814,17.44 C220.461,16.676 220.976,16.149 221.353,15.465 C221.731,14.781 221.920,13.989 221.920,13.89 C221.920,12.189 221.731,11.398 221.353,10.713 ZM196.512,14.169 C196.711,15.231 197.228,16.73 198.66,16.694 C198.903,17.315 199.941,17.625 201.184,17.625 C202.768,17.625 204.73,17.103 205.98,16.59 L206.907,18.138 C206.260,18.912 205.441,19.497 204.451,19.893 C203.461,20.289 202.346,20.487 201.102,20.487 C199.518,20.487 198.124,20.172 196.919,19.542 C195.712,18.912 194.781,18.35 194.123,16.909 C193.467,15.785 193.137,14.511 193.137,13.89 C193.137,11.685 193.458,10.421 194.97,9.295 C194.736,8.171 195.622,7.293 196.756,6.662 C197.891,6.33 199.168,5.718 200.591,5.718 C201.995,5.718 203.251,6.29 204.357,6.650 C205.464,7.270 206.329,8.144 206.949,9.268 C207.571,10.394 207.880,11.694 207.880,13.170 C207.880,13.404 207.861,13.737 207.826,14.169 L196.512,14.169 ZM203.344,9.390 C202.606,8.742 201.688,8.417 200.591,8.417 C199.510,8.417 198.597,8.738 197.849,9.376 C197.103,10.16 196.647,10.866 196.486,11.928 L204.666,11.928 C204.523,10.885 204.82,10.38 203.344,9.390 ZM186.523,12.468 C186.523,11.208 186.225,10.259 185.633,9.620 C185.38,8.981 184.191,8.661 183.96,8.661 C181.851,8.661 180.872,9.34 180.151,9.782 C179.432,10.528 179.72,11.604 179.72,13.8 L179.72,20.298 L175.696,20.298 L175.696,5.880 L178.909,5.880 L178.909,7.743 C179.467,7.77 180.170,6.573 181.16,6.231 C181.860,5.889 182.815,5.718 183.877,5.718 C185.696,5.718 187.154,6.249 188.252,7.311 C189.350,8.373 189.899,9.948 189.899,12.36 L189.899,20.298 L186.523,20.298 L186.523,12.468 ZM161.90,14.169 C161.289,15.231 161.805,16.73 162.642,16.694 C163.479,17.315 164.518,17.625 165.761,17.625 C167.344,17.625 168.649,17.103 169.676,16.59 L171.485,18.138 C170.837,18.912 170.18,19.497 169.27,19.893 C168.38,20.289 166.922,20.487 165.679,20.487 C164.95,20.487 162.700,20.172 161.493,19.542 C160.289,18.912 159.357,18.35 158.701,16.909 C158.42,15.785 157.714,14.511 157.714,13.89 C157.714,11.685 158.33,10.421 158.673,9.295 C159.312,8.171 160.198,7.293 161.333,6.662 C162.467,6.33 163.744,5.718 165.166,5.718 C166.570,5.718 167.825,6.29 168.933,6.650 C170.39,7.270 170.904,8.144 171.525,9.268 C172.146,10.394 172.457,11.694 172.457,13.170 C172.457,13.404 172.438,13.737 172.404,14.169 L161.90,14.169 ZM167.920,9.390 C167.182,8.742 166.264,8.417 165.166,8.417 C164.87,8.417 163.173,8.738 162.426,9.376 C161.679,10.16 161.224,10.866 161.62,11.928 L169.244,11.928 C169.98,10.885 168.659,10.38 167.920,9.390 ZM152.139,19.568 C151.32,20.181 149.776,20.487 148.373,20.487 C146.429,20.487 144.890,19.839 143.757,18.543 L143.757,25.536 L140.380,25.536 L140.380,5.880 L143.594,5.880 L143.594,7.770 C144.152,7.86 144.840,6.573 145.660,6.231 C146.478,5.889 147.383,5.718 148.373,5.718 C149.776,5.718 151.32,6.24 152.139,6.636 C153.247,7.249 154.114,8.112 154.744,9.228 C155.375,10.344 155.690,11.631 155.690,13.89 C155.690,14.547 155.375,15.839 154.744,16.963 C154.114,18.88 153.247,18.957 152.139,19.568 ZM151.59,9.822 C150.258,8.995 149.237,8.580 147.995,8.580 C147.185,8.580 146.457,8.765 145.808,9.134 C145.160,9.502 144.648,10.29 144.268,10.713 C143.891,11.398 143.703,12.189 143.703,13.89 C143.703,13.989 143.891,14.781 144.268,15.465 C144.648,16.149 145.160,16.676 145.808,17.44 C146.457,17.414 147.185,17.598 147.995,17.598 C149.237,17.598 150.258,17.184 151.59,16.356 C151.860,15.529 152.262,14.440 152.262,13.89 C152.262,11.739 151.860,10.650 151.59,9.822 ZM133.617,19.568 C132.509,20.181 131.255,20.487 129.851,20.487 C127.908,20.487 126.369,19.839 125.233,18.543 L125.233,25.536 L121.859,25.536 L121.859,5.880 L125.72,5.880 L125.72,7.770 C125.630,7.86 126.317,6.573 127.138,6.231 C127.956,5.889 128.862,5.718 129.851,5.718 C131.255,5.718 132.509,6.24 133.617,6.636 C134.725,7.249 135.593,8.112 136.222,9.228 C136.853,10.344 137.167,11.631 137.167,13.89 C137.167,14.547 136.853,15.839 136.222,16.963 C135.593,18.88 134.725,18.957 133.617,19.568 ZM132.538,9.822 C131.737,8.995 130.716,8.580 129.473,8.580 C128.663,8.580 127.934,8.765 127.286,9.134 C126.638,9.502 126.125,10.29 125.748,10.713 C125.369,11.398 125.180,12.189 125.180,13.89 C125.180,13.989 125.369,14.781 125.748,15.465 C126.125,16.149 126.638,16.676 127.286,17.44 C127.934,17.414 128.663,17.598 129.473,17.598 C130.716,17.598 131.737,17.184 132.538,16.356 C133.339,15.529 133.739,14.440 133.739,13.89 C133.739,11.739 133.339,10.650 132.538,9.822 ZM114.353,18.543 C113.940,19.173 113.350,19.655 112.585,19.988 C111.819,20.320 110.897,20.487 109.818,20.487 C108.738,20.487 107.792,20.302 106.982,19.934 C106.173,19.565 105.546,19.51 105.106,18.395 C104.665,17.738 104.444,16.995 104.444,16.166 C104.444,14.870 104.926,13.832 105.889,13.48 C106.852,12.266 108.368,11.874 110.437,11.874 L114.164,11.874 L114.164,11.658 C114.164,10.650 113.863,9.876 113.259,9.336 C112.657,8.796 111.760,8.526 110.573,8.526 C109.764,8.526 108.968,8.652 108.184,8.903 C107.401,9.156 106.740,9.507 106.200,9.957 L104.876,7.501 C105.632,6.924 106.541,6.483 107.602,6.177 C108.666,5.871 109.791,5.718 110.978,5.718 C113.101,5.718 114.728,6.227 115.851,7.244 C116.976,8.261 117.539,9.795 117.539,11.847 L117.539,20.298 L114.353,20.298 L114.353,18.543 ZM114.164,14.115 L110.681,14.115 C108.738,14.115 107.766,14.754 107.766,16.32 C107.766,16.644 108.10,17.130 108.495,17.490 C108.980,17.850 109.654,18.30 110.520,18.30 C111.367,18.30 112.117,17.837 112.772,17.450 C113.431,17.62 113.894,16.509 114.164,15.789 L114.164,14.115 ZM97.803,12.468 C97.803,11.208 97.505,10.259 96.911,9.620 C96.318,8.981 95.471,8.661 94.373,8.661 C93.131,8.661 92.149,9.34 91.432,9.782 C90.710,10.528 90.350,11.604 90.350,13.8 L90.350,20.298 L86.976,20.298 L86.976,0.264 L90.350,0.264 L90.350,7.554 C90.908,6.960 91.597,6.506 92.415,6.190 C93.235,5.876 94.148,5.718 95.157,5.718 C96.975,5.718 98.432,6.249 99.531,7.311 C100.629,8.373 101.176,9.948 101.176,12.36 L101.176,20.298 L97.803,20.298 L97.803,12.468 ZM73.503,20.487 C71.919,20.487 70.695,20.74 69.831,19.245 C68.967,18.417 68.535,17.211 68.535,15.627 L68.535,8.688 L66.159,8.688 L66.159,5.988 L68.535,5.988 L68.535,2.694 L71.909,2.694 L71.909,5.988 L75.771,5.988 L75.771,8.688 L71.909,8.688 L71.909,15.546 C71.909,16.248 72.80,16.783 72.424,17.152 C72.765,17.521 73.260,17.706 73.907,17.706 C74.663,17.706 75.294,17.508 75.798,17.111 L76.744,19.515 C76.347,19.839 75.865,20.82 75.298,20.244 C74.731,20.406 74.132,20.487 73.503,20.487 ZM60.570,18.543 C60.155,19.173 59.567,19.655 58.801,19.988 C58.37,20.320 57.113,20.487 56.34,20.487 C54.954,20.487 54.9,20.302 53.200,19.934 C52.389,19.565 51.764,19.51 51.321,18.395 C50.881,17.738 50.662,16.995 50.662,16.166 C50.662,14.870 51.143,13.832 52.106,13.48 C53.68,12.266 54.585,11.874 56.656,11.874 L60.380,11.874 L60.380,11.658 C60.380,10.650 60.79,9.876 59.477,9.336 C58.874,8.796 57.978,8.526 56.789,8.526 C55.980,8.526 55.184,8.652 54.400,8.903 C53.618,9.156 52.956,9.507 52.416,9.957 L51.93,7.501 C51.849,6.924 52.759,6.483 53.820,6.177 C54.881,5.871 56.7,5.718 57.196,5.718 C59.319,5.718 60.943,6.227 62.70,7.244 C63.194,8.261 63.757,9.795 63.757,11.847 L63.757,20.298 L60.570,20.298 L60.570,18.543 ZM60.380,14.115 L56.899,14.115 C54.954,14.115 53.980,14.754 53.980,16.32 C53.980,16.644 54.224,17.130 54.710,17.490 C55.197,17.850 55.872,18.30 56.735,18.30 C57.582,18.30 58.332,17.837 58.991,17.450 C59.647,17.62 60.112,16.509 60.380,15.789 L60.380,14.115 ZM44.18,12.468 C44.18,11.208 43.723,10.259 43.128,9.620 C42.533,8.981 41.688,8.661 40.591,8.661 C39.348,8.661 38.367,9.34 37.647,9.782 C36.927,10.528 36.567,11.604 36.567,13.8 L36.567,20.298 L33.192,20.298 L33.192,0.264 L36.567,0.264 L36.567,7.554 C37.125,6.960 37.812,6.506 38.633,6.190 C39.451,5.876 40.364,5.718 41.372,5.718 C43.192,5.718 44.649,6.249 45.747,7.311 C46.844,8.373 47.394,9.948 47.394,12.36 L47.394,20.298 L44.18,20.298 L44.18,12.468 ZM20.258,20.298 L15.590,6.312 L10.837,20.298 L7.83,20.298 L0.819,1.398 L4.464,1.398 L9.164,15.762 L14.50,1.398 L17.288,1.398 L22.67,15.843 L26.900,1.398 L30.250,1.398 L23.984,20.298 L20.258,20.298 Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header