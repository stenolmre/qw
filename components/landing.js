import Link from 'next/link'

export default function Landing({ children }) {
  return <div className="landing-container">
    <h1>Travel to inspire your life</h1>
    <p>Come to above artic circle to visit magical lapland and to gather amazing experiences that last forever. Our goal is to give you wonderful memories worth remembering for years.</p>
    <div className="heading-read-more">
      <hr/>
      <Link href="/adventures"><a>Show all experiences</a></Link>
    </div>
  </div>
}
