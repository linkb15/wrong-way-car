import coin from '../assets/coin.png'
import energy from '../assets/energy.png'
import heart from '../assets/heart.png'

export const Stats = () => {
  return (
    <div className='flex gap-4 py-4'>
      <div className='relative'>
        <svg
          width='104.5'
          height='22'
          viewBox='0 0 103 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M98.5 3.05176e-05H12.3745C10.9108 3.05176e-05 9.56388 0.799579 8.86295 2.08462L1.22659 16.0846C-0.227322 18.7501 1.70193 22 4.73817 22H98.5C100.709 22 102.5 20.2092 102.5 18V4.00003C102.5 1.79089 100.709 3.05176e-05 98.5 3.05176e-05Z'
            fill='#0C0A22'
          />
        </svg>
        <img
          src={coin}
          alt=''
          className='w-6 h-6 absolute bottom-1 left-[5px]'
        />
        <div className='absolute w-full bottom-0 h-full'>
          <div className='flex pl-8 w-full h-full justify-between'>
            <div className='font-black text-white text-sm'>{1200}</div>
            <button className='pl-1 pr-1.5 border-l border-[#191241]'>
              <svg
                width='14'
                height='13'
                viewBox='0 0 14 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 12.2092C5 12.6459 5.35409 13 5.79087 13H7.85932C8.2961 13 8.65019 12.6459 8.65019 12.2092V8.2909H12.7091C13.1459 8.2909 13.5 7.93682 13.5 7.50003V5.7909C13.5 5.35412 13.1459 5.00003 12.7091 5.00003H8.65019V0.790905C8.65019 0.354117 8.2961 3.04985e-05 7.85931 3.05176e-05L5.79087 3.06731e-05C5.35409 3.06731e-05 5 0.354117 5 0.790905V5.00003H1.29087C0.854087 5.00003 0.5 5.35412 0.5 5.7909L0.5 7.50003C0.5 7.93682 0.854086 8.2909 1.29087 8.2909H5V12.2092Z'
                  fill='url(#paint0_linear_3620_1672)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_3620_1672'
                    x1='2.95156'
                    y1='1.48446'
                    x2='10.891'
                    y2='13'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.0572917' stopColor='#A0D708' />
                    <stop offset='0.322917' stopColor='#8FC300' />
                    <stop offset='1' stopColor='#306D06' />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='relative'>
        <svg
          width='104.5'
          height='22'
          viewBox='0 0 103 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M98.5 3.05176e-05H12.3745C10.9108 3.05176e-05 9.56388 0.799579 8.86295 2.08462L1.22659 16.0846C-0.227322 18.7501 1.70193 22 4.73817 22H98.5C100.709 22 102.5 20.2092 102.5 18V4.00003C102.5 1.79089 100.709 3.05176e-05 98.5 3.05176e-05Z'
            fill='#0C0A22'
          />
        </svg>
        <img
          src={energy}
          alt=''
          className='w-4 h-6 absolute bottom-1 left-[14px]'
        />
        <div className='absolute w-full bottom-0 h-full'>
          <div className='flex pl-8 w-full h-full justify-between'>
            <div className='font-black text-white text-sm'>{1200}</div>
            <button className='pl-1 pr-1.5 border-l border-[#191241]'>
              <svg
                width='14'
                height='13'
                viewBox='0 0 14 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 12.2092C5 12.6459 5.35409 13 5.79087 13H7.85932C8.2961 13 8.65019 12.6459 8.65019 12.2092V8.2909H12.7091C13.1459 8.2909 13.5 7.93682 13.5 7.50003V5.7909C13.5 5.35412 13.1459 5.00003 12.7091 5.00003H8.65019V0.790905C8.65019 0.354117 8.2961 3.04985e-05 7.85931 3.05176e-05L5.79087 3.06731e-05C5.35409 3.06731e-05 5 0.354117 5 0.790905V5.00003H1.29087C0.854087 5.00003 0.5 5.35412 0.5 5.7909L0.5 7.50003C0.5 7.93682 0.854086 8.2909 1.29087 8.2909H5V12.2092Z'
                  fill='url(#paint0_linear_3620_1672)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_3620_1672'
                    x1='2.95156'
                    y1='1.48446'
                    x2='10.891'
                    y2='13'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.0572917' stopColor='#A0D708' />
                    <stop offset='0.322917' stopColor='#8FC300' />
                    <stop offset='1' stopColor='#306D06' />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='relative'>
        <svg
          width='82'
          height='22'
          viewBox='0 0 82 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M78 3.05176e-05H12.3745C10.9108 3.05176e-05 9.56388 0.799579 8.86295 2.08462L1.22659 16.0846C-0.227322 18.7501 1.70193 22 4.73817 22H78C80.2091 22 82 20.2092 82 18V4.00003C82 1.79089 80.2091 3.05176e-05 78 3.05176e-05Z'
            fill='#0C0A22'
          />
        </svg>

        <img
          src={heart}
          alt=''
          className='w-6 h-6 absolute bottom-1 left-[3px]'
        />
        <div className='absolute w-full bottom-0 h-full'>
          <div className='flex pl-8 w-full h-full justify-between'>
            <div className='font-black text-white text-sm'>{13}</div>
            <button className='pl-1 pr-1.5 border-l border-[#191241]'>
              <svg
                width='14'
                height='13'
                viewBox='0 0 14 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 12.2092C5 12.6459 5.35409 13 5.79087 13H7.85932C8.2961 13 8.65019 12.6459 8.65019 12.2092V8.2909H12.7091C13.1459 8.2909 13.5 7.93682 13.5 7.50003V5.7909C13.5 5.35412 13.1459 5.00003 12.7091 5.00003H8.65019V0.790905C8.65019 0.354117 8.2961 3.04985e-05 7.85931 3.05176e-05L5.79087 3.06731e-05C5.35409 3.06731e-05 5 0.354117 5 0.790905V5.00003H1.29087C0.854087 5.00003 0.5 5.35412 0.5 5.7909L0.5 7.50003C0.5 7.93682 0.854086 8.2909 1.29087 8.2909H5V12.2092Z'
                  fill='url(#paint0_linear_3620_1672)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_3620_1672'
                    x1='2.95156'
                    y1='1.48446'
                    x2='10.891'
                    y2='13'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.0572917' stopColor='#A0D708' />
                    <stop offset='0.322917' stopColor='#8FC300' />
                    <stop offset='1' stopColor='#306D06' />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <StatItem number={1200} image={coin}></StatItem>
      <StatItem number={1200} image={energy}></StatItem>
      <StatItem number={13} image={heart}></StatItem> */}
    </div>
  )
}

const StatItem = ({ number, image }: { number: number; image: string }) => {
  return (
    <div className='relative'>
      <svg
        width='104.5'
        height='22'
        viewBox='0 0 103 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M98.5 3.05176e-05H12.3745C10.9108 3.05176e-05 9.56388 0.799579 8.86295 2.08462L1.22659 16.0846C-0.227322 18.7501 1.70193 22 4.73817 22H98.5C100.709 22 102.5 20.2092 102.5 18V4.00003C102.5 1.79089 100.709 3.05176e-05 98.5 3.05176e-05Z'
          fill='#0C0A22'
        />
      </svg>
      <div className='absolute w-full justify-between -top-0.5 flex gap-3'>
        <img src={image} alt='' className='w-6 h-6 absolute' />

        <div className='flex divide-x-2 gap-3'>
          <div className='font-black text-white text-sm'>{number}</div>
          <button className='px-2'>
            <svg
              width='14'
              height='13'
              viewBox='0 0 14 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5 12.2092C5 12.6459 5.35409 13 5.79087 13H7.85932C8.2961 13 8.65019 12.6459 8.65019 12.2092V8.2909H12.7091C13.1459 8.2909 13.5 7.93682 13.5 7.50003V5.7909C13.5 5.35412 13.1459 5.00003 12.7091 5.00003H8.65019V0.790905C8.65019 0.354117 8.2961 3.04985e-05 7.85931 3.05176e-05L5.79087 3.06731e-05C5.35409 3.06731e-05 5 0.354117 5 0.790905V5.00003H1.29087C0.854087 5.00003 0.5 5.35412 0.5 5.7909L0.5 7.50003C0.5 7.93682 0.854086 8.2909 1.29087 8.2909H5V12.2092Z'
                fill='url(#paint0_linear_3620_1672)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_3620_1672'
                  x1='2.95156'
                  y1='1.48446'
                  x2='10.891'
                  y2='13'
                  gradientUnits='userSpaceOnUse'>
                  <stop offset='0.0572917' stopColor='#A0D708' />
                  <stop offset='0.322917' stopColor='#8FC300' />
                  <stop offset='1' stopColor='#306D06' />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
