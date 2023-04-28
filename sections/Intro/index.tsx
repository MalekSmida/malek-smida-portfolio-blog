// node modules
import Link from 'next/link';
import Image from 'next/image';

// local files
import MalekJammel from '../../public/static/pictures/MalekSmida_Jammel.png';
import SirineReview from '../../public/static/layout/sirine-review.png';
import hyperlinks from '../../utils/hyperlinks';

function Intro() {
  return (
    <section>
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="group relative order-last h-full max-w-lg p-4 lg:max-w-none lg:flex-1 lg:p-0">
            <svg
              className="absolute bottom-6 right-0 transition-transform duration-1000 ease-in-out group-hover:rotate-12"
              height="100%"
              viewBox="0 0 1010 1005"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-74"
                y="641.438"
                width="834.091"
                height="849.994"
                rx="200"
                transform="rotate(-59.0645 -74 641.438)"
                fill="#6C63FF"
              />
            </svg>

            <Image src={MalekJammel} alt="Malek Smida jebba" priority />

            <div className="absolute bottom-20 right-0 z-10 w-3/4 border border-black transition-transform duration-300 ease-in-out group-hover:scale-110 lg:bottom-32 lg:right-80">
              <Image
                src={SirineReview}
                alt="Sirine ben Hamida linkedin's recommendation"
                layout="responsive"
              />
            </div>
          </div>
          <div className="pb-20 text-center lg:flex-1 lg:py-24 lg:text-start">
            <h1 className="text-3xl font-bold sm:text-4xl">Malek Smida</h1>
            <h2 className="mt-4 text-xl text-gray-500 sm:text-2xl">
              Software Engineer
            </h2>
            <h2 className="mt-2 text-xl text-gray-500 sm:text-2xl">
              Full stack Web/Mobile
            </h2>
            <Link href={`/experience/coming-soon`}>
              <a
                className="group relative mt-4 inline-flex cursor-pointer items-center overflow-hidden rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-8"
                href={hyperlinks.CVPDF}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium transition-all group-hover:mr-4">
                  Resume PDF
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
