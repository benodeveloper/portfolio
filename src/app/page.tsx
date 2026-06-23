import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-16 px-6 md:px-8 pb-16">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">

        <div className="shrink-0 relative group">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/me.png"
            className="relative block w-48 h-48 md:w-64 md:h-72 rounded-2xl shadow-lg overflow-hidden bg-slate-800 z-10 transition-transform duration-300 group-hover:-translate-y-1"
          >
            <Image
              src="/me.png"
              alt="Hassan Benadardor"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </a>
        </div>

        <div className="pt-2 flex flex-col space-y-2 text-lg leading-relaxed text-slate-200">
          <p>
            Hello there! I&apos;m Hassan Benadardor <span className="text-nowrap text-base text-slate-400 font-medium">(pronounced hah-SAHN ben-ah-dar-DOR)</span>, <br />
            a Software Developer at{" "}
            <a href="https://www.doctori.ma" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">Doctori</a>,
            and a passionate builder of full-stack web and mobile applications.
          </p>
          <p>
            I hold a Diploma in Software Development, as well as a Diploma
            in IT Systems Maintenance and Network Support from Morocco.
          </p>
          <p>
            During my time as a developer at{" "}
            <a href="https://www.dicton.ma" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">Dicton</a>, I developed comprehensive management software for a large-scale military hospital.
          </p>
        </div>

      </div>

      <div className="pt-8 md:pt-10 mt-10 border-t border-slate-800 space-y-2">
        <p className="text-lg leading-relaxed text-slate-200">
          Before my current role at Doctori, I maintained and scaled
          various software projects at{" "}
          <a href="https://www.grafimage.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">Grafimage</a>.
          And before diving fully into programming, I laid my technical foundation working as a
          Network Manager at Souretel.
        </p>
        <p className="text-lg leading-relaxed text-slate-200">
          Outside of my day job, I enjoy exploring new technologies,
          building scalable side projects, and continually refining my
          development workflow.
        </p>

        {/* Contact Links Added Here */}
        <p className="text-lg leading-relaxed text-slate-200 mt-6 pt-4">
          You can check out my code on{" "}
          <a href="https://github.com/benodeveloper" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">
            GitHub
          </a>
          , or get in touch with me via email at{" "}
          <a href="mailto:contact@benodeveloper.com" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">
            contact@benodeveloper.com
          </a>{" "}
          (or{" "}
          <a href="mailto:listoun.developer@gmail.com" className="font-semibold underline decoration-blue-400/30 underline-offset-4 hover:decoration-blue-400 transition-all duration-200">
            listoun.developer@gmail.com
          </a>).
        </p>
      </div>
    </main>
  );
}
