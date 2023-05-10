import {SVGProps} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    {...props}>
    <g
      stroke='#232232'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={3}
      clipPath='url(#a)'>
      <path d='M25.313 15H4.688M13.125 6.563 4.687 15l8.438 8.438' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h30v30H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
