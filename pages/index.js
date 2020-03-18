import Link from 'next/link'

const Home = () => (
  <div>
    <h3>This is the landing page</h3>
    <Link href='/app'>
      <a>Go to the app</a>
    </Link>
  </div>
)

export default Home
