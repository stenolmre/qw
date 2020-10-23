import Link from 'next/link'

export default function Heading({ name, span, href, link }) {
  return <div className="heading">
    <h1>{ name }<br/><span>{ span }</span></h1>
    <Link href={ href ? href : '' }><a>{ link }</a></Link>
  </div>
}
