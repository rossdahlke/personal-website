import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[85vh] flex flex-col">
      <div className="flex-1 grid md:grid-cols-[2fr,3fr] gap-6 md:gap-16 py-8 md:py-24">
        <div className="order-2 md:order-1 space-y-4 md:space-y-6">
          <div className="card overflow-hidden p-0">
            <div className="relative aspect-[4/5] transform hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/images/_MG_2663.jpeg"
                alt="Ross Dahlke"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            <a 
              href="https://github.com/rossdahlke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--background-secondary)] rounded-xl border border-[var(--border-color)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://x.com/ross_dahlke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--background-secondary)] rounded-xl border border-[var(--border-color)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>
            <a 
              href="https://bsky.app/profile/did:plc:tpjypws5r3t3xvjqswqnxnf6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--background-secondary)] rounded-xl border border-[var(--border-color)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 19H6.5C4.29086 19 2.5 17.2091 2.5 15C2.5 13.1858 3.66389 11.6332 5.28107 11.1599C5.27493 11.0417 5.27165 10.9222 5.27165 10.8015C5.27165 7.32925 8.09339 4.5 11.5575 4.5C14.5134 4.5 17.0003 6.50245 17.6514 9.23952C19.5417 9.66062 21 11.3789 21 13.4C21 16.0346 19.4346 18 17.5 18V19Z"/>
              </svg>
              Bluesky
            </a>
            <a 
              href="https://scholar.google.com/citations?user=y2g0vNwAAAAJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--background-secondary)] rounded-xl border border-[var(--border-color)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
              Google Scholar
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-6xl">Ross Dahlke</h1>
            <div className="space-y-2">
              <h2 className="text-[var(--muted)] font-sans text-xl md:text-3xl font-normal tracking-tight">
                Assistant Professor
              </h2>
              <p className="text-[var(--muted)] text-base md:text-xl">
                University of Wisconsin–Madison
                <br />
                School of Journalism and Mass Communication
                <br />
                Affiliate, Elections Research Center
              </p>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="card">
              <p className="text-base md:text-lg leading-relaxed mb-0">
                I am an assistant professor at the University of Wisconsin-Madison School of Journalism and Mass Communication. I use computational social science, data science, and software development to study  information exposure and effects on the open web and private communication channels, such as in text messaging, WhatsApp, Facebook Messenger, and Telegram. My research has been published in journals and venues including the Proceedings of the National Academy of Sciences (PNAS), Nature Human Behavior, Journal of Computer-Mediated Communication, and Proceedings of the ACM on Human-Computer Interaction (CSCW). I received my PhD from Stanford University where I was a Knight-Hennessy Scholar and Stanford Data Science Scholar.
              </p>
            </div>
            
            <div className="card">
              <p className="text-base md:text-lg leading-relaxed mb-0">
                Prior to my PhD, I was a data scientist at a digital marketing and measurement firm where I developed and deployed Bayesian machine learning models, conducted large-scale A/B testing, and worked with client teams to optimize digital marketing budgets for Fortune 500 companies such as Coach Bags, Calvin Klein, and Facebook Marketplace. I have also consulted on over 80 political campaigns to implement cutting-edge data analytics techniques. While in high school, I started a cheese distribution business that grossed over $5M in sales. I did my undergraduate education at the University of Wisconsin-Madison where I graduated with Comprehensive Honors and won the Theodore Herfurth Award for Initiative and Efficiency, which is awarded to the top graduating male student at UW.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
