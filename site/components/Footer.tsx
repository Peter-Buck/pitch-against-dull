export default function Footer() {
  return (
    <footer className="bg-yellow">
      <div className="max-w-[1500px] mx-auto px-[4vw] md:px-[4vw] px-[6vw] py-12">
        <p className="font-body text-ink text-[16px] font-bold leading-[1.5] mb-4">
          KILL DULL.
        </p>

        <p className="font-body text-ink text-[16px] leading-[1.5] mb-4">
          <a
            href="tel:+13108717775"
            className="text-ink transition-opacity duration-[450ms] hover:opacity-50"
          >
            +1 (310) 871 7775
          </a>
          {" / "}
          <a
            href="mailto:peterbuckworks@gmail.com"
            className="text-ink transition-opacity duration-[450ms] hover:opacity-50"
          >
            peterbuckworks@gmail.com
          </a>
        </p>

        <nav className="flex items-center gap-4" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/peter-buck-52932833/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="font-body text-ink text-[16px] transition-opacity duration-[450ms] hover:opacity-50"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/peterbuck/#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="font-body text-ink text-[16px] transition-opacity duration-[450ms] hover:opacity-50"
          >
            Instagram
          </a>
        </nav>

        {/* AI widget integration slot — renders nothing until provider supplies embed code */}
      </div>
    </footer>
  );
}
