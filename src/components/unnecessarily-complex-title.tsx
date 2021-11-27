// This is a poorly implemented "condensing" title
// Please test your PWA on iPhone SE sizes

import Image from 'next/image'
import profilePic from '../../public/images/brand.png'

import Link from 'next/link'

const UnnecessarilyComplexTitle = () => (
  <Link href='/'>
    <a>
      <Image
        src={profilePic}
        alt="IUT"
        placeholder="blur"
        width="54"
        height="54"
      />

      <style jsx>{`
        a {
          position: absolute;
          z-index: 3;
        }

        h1 {
          color: var(--text);
          padding-right: var(--gap-small);
          width: 100%;
          line-height: 32px;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.0035em;
          background: var(--base);
          transition: var(--transition-colors);
        }

        h1 span {
          color: var(--text);
          position: relative;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </a>
  </Link>
)

export default UnnecessarilyComplexTitle
