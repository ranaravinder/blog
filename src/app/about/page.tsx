import Image from 'next/image';
import { name, about, bio, avatar, blogTitle } from '../../lib/info';
import type { Metadata } from 'next';
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon
} from '../../components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'VP of Developer Experience at Vercel.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl font-serif">{blogTitle()}</h1>

      <div className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </div>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 flex flex-col items-left text-neutral-500 dark:text-neutral-400">
            <div className="flex gap-2">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ranaravinder"
                className="flex items-center gap-2"
              >
                <TwitterIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ranaravinder"
                className="flex items-center gap-2"
              >
                <GitHubIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ranaravinder"
                className="flex items-center gap-2"
              >
                <FacebookIcon />

              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ranaravinder"
                className="flex items-center gap-2"
              >
                <LinkedInIcon />
              </a>
            </div>

          </div>
        </div>



        <hr />



      </div>
    </section>
  );
}
