import {SVGProps} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}>
    <path
      fillRule='evenodd'
      d='M.999.999a1.534 1.534 0 0 1 2.17 0l4.699 4.7 4.7-4.7a1.534 1.534 0 0 1 2.169 2.169l-4.7 4.7 4.7 4.7a1.534 1.534 0 0 1-2.17 2.169l-4.699-4.7-4.7 4.7a1.534 1.534 0 1 1-2.17-2.17l4.7-4.7-4.7-4.699a1.534 1.534 0 0 1 0-2.17Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgComponent
