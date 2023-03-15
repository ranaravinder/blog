import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from '@next/font/local';
import Sidebar from '../components/sidebar';
import AnalyticsWrapper from '../components/analytics';
import { blogTagline } from '@/lib/info';
const env = process.env

const kaisei = localFont({
  src: '../../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rana Ravider Singh',
    template: '%s | Rana Ravider Singh',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Rana Ravider Singh',
    description: 'Developer, writer, and creator.',
    url: `${env.HOST}`,
    siteName: 'Rana Ravider Singh',
    images: [
      {
        url: `${env.HOST}/rlogo.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Rana Ravider Singh',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <div className="profile-background-image__image-container">
        <img className="profile-background-image__image relative full-width full-height" alt="Background Image" src="https://media.licdn.com/dms/image/C4D16AQFoL6WZNaOmbA/profile-displaybackgroundimage-shrink_350_1400/0/1597425465655?e=1683763200&amp;v=beta&amp;t=oAotK0GFVc1m2ZuNRI3W3pUeH6yjnS16hVI4Rio9RqE"></img>
      </div>
      <div className="ph5 mb-10">
        <div className="display-flex">
          <div className="pv-top-card--photo text-align-left
          pv-top-card--photo-resize">
            <div className="pv-top-card__photo-wrapper ml0">
              <div className="profile-photo-edit pv-top-card__edit-photo">
                <button className="profile-photo-edit__edit-btn" type="button">
                  <img width="200" src="https://media.licdn.com/dms/image/C4D03AQEh-FaAT-_fAw/profile-displayphoto-shrink_400_400/0/1621185926970?e=1683763200&amp;v=beta&amp;t=05Hy7Y3YGvytERUhxal7DtmB87ASehF-s6ApTuFe4WU" height="200" alt="Ravinder Singh Rana" id="ember342" className="ember-view profile-photo-edit__preview" />
                </button>
              </div>
            </div>
          </div>
          <div className="-mt-10 text-right text-lg font-sans text-cyan-500">{blogTagline()}</div>
        </div>
      </div>    

          {children}
          {/* <AnalyticsWrapper /> */}
        </main>
      </body>
    </html>
  );
}


