import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Stuff I have built',
};

type Project = {
  name: string;
  bg: string;
  description: string;
  url: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: 'TweetWidget',
    bg: 'sky-600',
    description: 'Glance at tweets from your home screen',
    url: 'https://apps.apple.com/us/app/tweetwidget/id1671704240',
    tech: ['swift', 'SwiftUI', 'supabase'],
  },
  {
    name: 'CoLive',
    bg: 'violet-600',
    description: 'Find sublets and roommates easily',
    url: 'https://www.getcolive.com',
    tech: ['next.js', 'typescript', 'tailwindcss'],
  },
  {
    name: 'Hermes',
    bg: 'cyan-600',
    description: 'Binance USD-M Futures trading bot',
    url: 'https://github.com/carlos-garciamoran/hermes',
    tech: ['go', 'websockets'],
  },
  {
    name: 'Delfos',
    bg: 'fuchsia-700',
    description: 'Cryptocurrency trading bot',
    url: 'https://github.com/carlos-garciamoran/delfos',
    tech: ['python', 'numpy', 'ta-lib'],
  },
  {
    name: 'Matrix',
    bg: 'emerald-700',
    description: 'Student information system built for UWC ISAK Japan',
    url: 'https://github.com/carlos-garciamoran/matrix',
    tech: ['laravel', 'bootstrap', 'php'],
  },
  {
    name: 'CNCPT',
    bg: 'pink-600',
    description: 'Connecting media with social good',
    url: 'https://apps.apple.com/us/app/cncpt/id1662094973',
    tech: ['react-native', 'typescript', 'firebase'],
  },
];

// TODO: display language with FA icons or style badges accordingly (see GitHub)
// TODO: add dates to projects
// TODO: on page load, display projects with fade in
// TODO: swap colors on hover smoothly > https://stackoverflow.com/a/67853821
// NOTE: it'd be cool if the cards `were draggable and could be rearranged` (thx Copilot)
export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-28 gap-y-5 sm:gap-y-6 xl:gap-y-10 lg:mt-8">
      {projects.map(project => (
        <a
          key={project.name}
          href={`${project.url}/`}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={clsx({
              'flex flex-grow flex-col justify-center transition ease-in-out delay-50 bg-gradient-to-tl from-zinc-800 sm:hover:to-zinc-900 hover:-translate-y-1 hover:scale-105 duration-300 lg:h-56 rounded-3xl px-6 sm:px-8 lg:px-12 py-7 sm:py-8 lg:py-10 shadow-sm sm:shadow-lg':
                true,
              'to-emerald-600 sm:hover:from-emerald-600':
                project.bg === 'emerald-700',
              'to-cyan-600 sm:hover:from-cyan-600': project.bg === 'cyan-600',
              'to-sky-600 sm:hover:from-sky-600': project.bg === 'sky-600',
              'to-violet-600 sm:hover:from-violet-600':
                project.bg === 'violet-600',
              'to-fuchsia-700 sm:hover:from-fuchsia-700':
                project.bg === 'fuchsia-700',
              'to-pink-600 sm:hover:from-pink-600': project.bg === 'pink-600',
            })}
          >
            <h2 className="font-extralight text-4xl underline underline-offset-4 decoration-2">
              {project.name}
            </h2>
            <div className="flex flex-row mt-2 lg:mt-3 space-x-1">
              {project.tech.map(language => (
                <div
                  key={language}
                  className={clsx({
                    'bg-zinc-800 rounded-lg px-3 py-1': true,
                    // 'from-sky-600 to-cyan-600': language === 'swift',
                    // 'from-purple-700 to-purple-800': language === 'python',
                  })}
                >
                  <span className="text-sm">{language}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 lg:mt-4">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
