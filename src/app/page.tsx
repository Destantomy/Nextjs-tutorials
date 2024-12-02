import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Home',
  description: 'Next.js tutorial from scratch',
  authors: [{
    name: 'desta',
    url: 'https://github.com/destantomy'
  }],
  icons: {
    icon: '/images/icon.png',
  },
  openGraph: {
    title: 'Home | from openGraph'
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This from home
      </div>
    </main>
  )
}
