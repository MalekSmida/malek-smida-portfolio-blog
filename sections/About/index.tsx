// node modules
import Image from 'next/image';
import Link from 'next/link';

// local files
import AcousticGuitar from '../../public/static/layout/acoustic-guitar.png';
import hyperlinks from '../../utils/hyperlinks';

function About() {
  return (
    <section
      id="about"
      className="mx-auto grid grid-cols-1 px-4 py-16 lg:grid-cols-2"
    >
      <div className="z-10 flex flex-col items-center justify-center lg:py-16">
        <div className="flex w-full justify-center">
          <span className="mr-8 h-24 w-24 rounded-full bg-green-500 transition-transform duration-300 ease-in-out hover:scale-90 md:h-32 md:w-32"></span>
          <div className="rounded-full border-2 border-dashed border-gray-400 p-0.5">
            <Image
              src="/static/pictures/MalekSmida_Tozeur.jpg"
              alt="Malek Smida à Tozeur"
              height={220}
              width={220}
              objectFit="cover"
              loading="lazy"
              className="rounded-full"
              unoptimized={true}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="rounded-full border-2 border-dashed border-gray-400 p-0.5">
            <Image
              src="/static/pictures/MalekSmida_Sousse.jpg"
              alt="Malek Smida à jardin japonais"
              height={270}
              width={270}
              objectFit="cover"
              loading="lazy"
              className="rounded-full"
              unoptimized={true}
            />
          </div>
          <span className="ml-8 h-12 w-12 rounded-full bg-orange-400 transition-transform duration-300 ease-in-out hover:scale-90 md:h-16 md:w-16"></span>
        </div>

        {/* <div className="absolute bottom-10 max-w-sm rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-1 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="block rounded-xl bg-white p-6">
                <blockquote
                  className="text-xs font-semibold text-gray-500"
                  cite="http://maleksmida.blog/"
                >
                  I believe in love, love of being, love of everything as it is
                  with no judgement. I always consider myself a student of life.
                  I hope to continue learning and growing.
                </blockquote>
              </div>
            </div> */}
      </div>

      <div className="relative flex items-center bg-gray-50">
        <div className="xl:text-md p-8 text-sm sm:p-16 lg:p-24">
          <h2 className="mb-3 text-2xl font-bold sm:mb-6 sm:text-3xl">
            About me
          </h2>

          <ul className="list-disc space-y-2 text-gray-600">
            <li>
              A passionate, agile-minded Software Engineer who is scrupulous
              about the details
            </li>
            <li>A natural leader and mentor.</li>
            <li>
              Manage full software development life-cycle of Mobile and Web apps
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-bold">Education</h3>

          <p className="mt-3 text-gray-600">
            Graduated as{' '}
            <span className="font-semibold text-gray-800">
              Software Engineer
            </span>{' '}
            in September 2020, from National Engineering School of Carthage in
            Tunisia
          </p>
          <p className="mt-3 text-gray-600">
            I have{' '}
            <span className="font-semibold text-gray-800">
              e-dgree in Social Psychology
            </span>
          </p>
          <p className="mt-3 text-gray-600">
            I am in continuous reading and learning about{' '}
            <span className="font-semibold text-gray-800">
              Software engineering, Psychology, Philosophy and Spirituality
            </span>
          </p>

          <Link href="/blog">
            <p className="mt-4 inline-block cursor-pointer border-b border-indigo-500 pb-1 text-sm font-medium text-indigo-600">
              Check my Blog
              <span className="ml-2" aria-hidden="true">
                &rarr;
              </span>
            </p>
          </Link>

          <h3 className="mt-7 text-xl font-bold">Activities</h3>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>Guitar</li>
            <li>Workout</li>
            <li>Yoga / Meditation 🧘‍♂️</li>
            <li>Public speaking / Storytelling</li>
            <li>Reading 📚</li>
            <li>Camping / Vagabonding 🏕️</li>
          </ul>
        </div>
        <div className="absolute bottom-8 right-0 w-52 transition-transform duration-300 ease-in-out hover:scale-105 md:right-2 md:w-64">
          <Image
            src={AcousticGuitar}
            alt="Acoustic Guitar"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
