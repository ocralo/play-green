import {SVGProps} from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={38} height={35} {...props}>
    <path
      fillRule='evenodd'
      d='M26.191.3c1.15 0 2.299.162 3.39.529 6.727 2.187 9.15 9.568 7.126 16.02a23.198 23.198 0 0 1-5.484 8.764 70.088 70.088 0 0 1-11.538 9.04l-.455.274-.474-.293a69.426 69.426 0 0 1-11.608-9.04 23.57 23.57 0 0 1-5.487-8.746C-.4 10.397 2.025 3.016 8.825.79a8.237 8.237 0 0 1 1.62-.38h.219c.512-.075 1.02-.11 1.53-.11h.201c1.148.035 2.26.235 3.337.602h.108a.638.638 0 0 1 .164.107c.402.13.783.275 1.148.476l.692.31c.168.089.356.225.518.343.103.075.195.142.266.185l.09.053c.157.091.32.186.457.292A11.414 11.414 0 0 1 26.19.3Zm4.848 13.123a1.499 1.499 0 0 0 1.44-1.387v-.217c.054-2.554-1.493-4.866-3.846-5.76-.747-.256-1.567.147-1.84.912a1.49 1.49 0 0 0 .91 1.875c1.169.438 1.95 1.588 1.95 2.862v.056c-.034.418.092.82.347 1.13.255.31.638.49 1.039.529Z'
      clipRule='evenodd'
    />
  </svg>
)
export default SvgComponent
