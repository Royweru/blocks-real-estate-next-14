import Image from 'next/image'
import { Navbar } from '@/components/Navbar/main-navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between p-0 w-full">
      <Navbar />
    </main>
  )
}
