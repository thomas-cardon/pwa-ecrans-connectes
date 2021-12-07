import Image from 'next/image'
import Link from 'next/link'

import profilePic from '../../public/images/brand.png'

const Brand = () => (
  <Link href='/'>
    <a className="d-block">
      <Image
        src={process.env.brand || profilePic}
        alt='IUT'
        placeholder='blur'
        width='54'
        height='54'
      />
    </a>
  </Link>
)

export default Brand
