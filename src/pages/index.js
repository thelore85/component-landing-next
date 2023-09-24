import Head from 'next/head'
import Cover from '@/Components/Cover/Cover.js'
import Date from '@/Components/Date/Date.js'
import Location from '@/Components/Location/Location.js'
import Contact from '@/Components/Contact/Contact.js'
import Thanks from '@/Components/Thanks/Thanks.js'
import Gift from '@/Components/Gift/Gift.js'



////////////////////////////////////////////////////
/////----------- WEB APP 
//////////////////////////////////////////////////

console.log('APP START: running on server: 3000');

export default function Home() {
  return (

    <>
      <Head>
        <title>PIQUS - Landing page component - open source</title>
        <meta name="description" content="An opend source project by picus - landing page component base on Next.js and React " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cover />
      <Date />
      <Location />
      <Contact />
      <Gift />
      <Thanks />
    </>
  )
}
