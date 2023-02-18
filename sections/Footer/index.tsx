import hyperlinks from '../../utils/hyperlinks';

function Footer() {
  return (
    <footer className="bg-gray-900" id="contact">
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h3 className="flex justify-center text-white font-medium">Contact</h3>

        <ul className="max-w-xs mx-auto mt-6 leading-relaxed text-center text-gray-400">
          <li>
            <div className="flex items-center justify-center gap-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span className="text-white transition group-hover:text-white/75">
                malek.ssmida@gmail.com
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center justify-center gap-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="text-white transition group-hover:text-white/75">
                91300, Massy, France
              </span>
            </div>
          </li>

          <li>
            <div className="flex items-center justify-center gap-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <span className="text-white transition group-hover:text-white/75">
                +33 7 53 14 29 46
              </span>
            </div>
          </li>
        </ul>

        <ul className="flex justify-center gap-6 mt-12 md:gap-8">
          <li>
            <a
              href={hyperlinks.LinkedIn}
              rel="noopener noreferrer"
              target="_blank"
              className="text-white transition hover:text-white/75">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href={hyperlinks.GitHub}
              rel="noopener noreferrer"
              target="_blank"
              className="text-white transition hover:text-white/75">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
        <div className="pt-6 mt-6 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">&copy; 2022 Malek Smida</p>
          <span className="sr-only">Thanks to https://www.hyperui.dev/</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
