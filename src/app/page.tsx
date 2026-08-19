import { CannageDivider, CannageSwatch } from "@/components/Cannage";
import {
  CannageCabinet,
  MedallionChair,
  ToileConsole,
  TrianonSettee,
} from "@/components/Illustrations";
import Nav from "@/components/Nav";
import AppointmentForm from "@/components/AppointmentForm";

const COLLECTION = [
  {
    Art: MedallionChair,
    name: "The Medallion Chair",
    note: "Hand-caned back in natural rattan, oak frame, Trianon-grey bouclé seat.",
    price: "₹ 4,85,000",
  },
  {
    Art: TrianonSettee,
    name: "The Trianon Settee",
    note: "Two-seat silhouette in walnut, dressed in ivory wool with a single oxblood welt.",
    price: "₹ 9,20,000",
  },
  {
    Art: ToileConsole,
    name: "The Toile Console",
    note: "Brass-capped legs turned by hand, top finished in smoked oak.",
    price: "₹ 3,10,000",
  },
  {
    Art: CannageCabinet,
    name: "The Cannage Cabinet",
    note: "Woven cane doors over cedar-lined interior, brass hardware, one bronze button.",
    price: "₹ 6,75,000",
  },
];

const PROCESS = [
  {
    n: "01",
    t: "The Sketch",
    d: "Every piece begins as a croquis on the same paper stock used for the ready-to-wear ateliers — a chair drafted the way a coat is drafted.",
  },
  {
    n: "02",
    t: "The Frame",
    d: "Solid oak and walnut are cut and joined by furniture-makers who trained alongside the house's tailors, in the same discipline of true seams.",
  },
  {
    n: "03",
    t: "The Weave",
    d: "Cannage caning — the house's signature since 1947 — is worked by hand across each backrest, one artisan, one chair, four days.",
  },
  {
    n: "04",
    t: "The Fitting",
    d: "Upholstery is pinned, adjusted, and finished the way a gown is fitted: on the piece, in the room it will live in.",
  },
];

const PRESS = [
  { quote: "The armchair as couture. Sit in it and the whole idea makes sense.", source: "Maison Review" },
  { quote: "A cannage weave you've seen on a handbag, now holding up a sofa.", source: "Interiors Quarterly" },
  { quote: "Furniture with the posture of a runway silhouette.", source: "The Atelier Journal" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ebony focus:text-bone focus:px-4 focus:py-2 focus:text-xs focus:tracked focus:uppercase"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" className="flex-1">
        {/* HERO */}
        <section
          id="top"
          className="relative overflow-hidden pt-28 sm:pt-32 md:pt-0 min-h-screen flex items-center border-b border-ebony/10"
        >
          <div className="absolute inset-0 cannage-bg pointer-events-none" />
          <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-8 items-center relative">
            <div>
              <p className="text-[11px] tracked uppercase text-brass mb-6">
                Maison Fondée 1947 &nbsp;·&nbsp; Furniture, Since Now
              </p>
              <h1 className="font-display text-[13vw] leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl text-ebony">
                From
                <br />
                Silhouette
                <br />
                <span className="italic text-oxblood">to Seat.</span>
              </h1>
              <p className="mt-8 max-w-md text-base sm:text-lg text-ebony/75 font-light leading-relaxed">
                The ateliers that dressed the New Look now dress a room.
                Every chair caned, every settee tailored, every table finished
                by hand — the house&apos;s couture discipline, turned to
                furniture.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#collection"
                  className="inline-flex items-center bg-ebony text-bone px-7 py-3.5 text-[11px] tracked uppercase hover:bg-oxblood transition-colors focus-ring"
                >
                  View the Collection
                </a>
                <a
                  href="#appointment"
                  className="inline-flex items-center border border-ebony px-7 py-3.5 text-[11px] tracked uppercase text-ebony hover:bg-ebony hover:text-bone transition-colors focus-ring"
                >
                  Book a Private Viewing
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <MedallionChair className="w-56 sm:w-72 md:w-full max-w-sm drop-shadow-[0_30px_40px_rgba(23,21,18,0.12)]" />
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section id="maison" className="py-24 md:py-32 px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracked uppercase text-brass mb-6">
              The Maison
            </p>
            <p className="font-display italic text-2xl sm:text-3xl md:text-4xl leading-snug text-ebony">
              &ldquo;We used to send fabric down a runway for six minutes. Now
              we send it into a living room for sixty years.&rdquo;
            </p>
            <p className="mt-8 text-ebony/60 font-light leading-relaxed max-w-xl mx-auto">
              Dior Maison is not a licensing exercise. It is the house&apos;s
              own atelier discipline — pattern-cutting, hand-finishing,
              fitting — applied to wood, cane, and cloth that stay in one
              place instead of walking down one. The vocabulary is the same:
              structure, line, a single considered detail.
            </p>
            <CannageDivider className="w-40 h-6 mx-auto mt-12 text-ebony/40" />
          </div>
        </section>

        {/* COLLECTION */}
        <section id="collection" className="py-24 md:py-32 px-5 sm:px-8 bg-ebony text-bone">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
              <div>
                <p className="text-[11px] tracked uppercase text-brass mb-4">
                  Autumn Collection
                </p>
                <h2 className="font-display text-4xl sm:text-5xl">
                  Four Pieces, One House
                </h2>
              </div>
              <p className="max-w-xs text-bone/60 font-light text-sm leading-relaxed">
                Each piece is numbered, dated, and signed by the artisan who
                wove it — the same way a couture gown carries its maker&apos;s
                initials.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
              {COLLECTION.map(({ Art, name, note, price }) => (
                <article
                  key={name}
                  className="group bg-ebony p-6 sm:p-8 flex flex-col hover:bg-[#1f1c18] transition-colors"
                >
                  <div className="aspect-[4/5] flex items-center justify-center mb-6">
                    <Art className="w-full h-full [&_path]:stroke-bone/85 [&_pattern_path]:stroke-brass" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{name}</h3>
                  <p className="text-bone/55 text-sm font-light leading-relaxed flex-1">
                    {note}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-bone/15 pt-4">
                    <span className="text-[11px] tracked uppercase text-brass">
                      {price}
                    </span>
                    <a
                      href="#appointment"
                      className="text-[11px] tracked uppercase text-bone/70 group-hover:text-bone transition-colors focus-ring"
                    >
                      Enquire →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ATELIER / PROCESS */}
        <section id="atelier" className="py-24 md:py-32 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] tracked uppercase text-brass mb-6">
                The Atelier
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight text-ebony">
                Built the Way
                <br />a Collection Is Built
              </h2>
              <p className="mt-6 text-ebony/65 font-light leading-relaxed max-w-md">
                No piece leaves the workshop until it has passed through four
                stages — the same sequence, in the same order, that has
                shaped every collection since the house began.
              </p>
            </div>

            <ol className="flex flex-col">
              {PROCESS.map((step, i) => (
                <li
                  key={step.n}
                  className={`grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-8 ${
                    i !== 0 ? "border-t border-ebony/10" : ""
                  }`}
                >
                  <span className="font-display text-3xl sm:text-4xl text-brass/70">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ebony mb-2">
                      {step.t}
                    </h3>
                    <p className="text-ebony/60 font-light leading-relaxed max-w-lg">
                      {step.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRESS STRIP */}
        <section className="py-16 border-y border-ebony/10 px-5 sm:px-8 relative overflow-hidden">
          <CannageSwatch className="absolute inset-0 w-full h-full opacity-[0.35]" stroke="#171512" />
          <div className="mx-auto max-w-6xl relative grid sm:grid-cols-3 gap-10 sm:gap-8">
            {PRESS.map((p) => (
              <blockquote key={p.source} className="text-center sm:text-left">
                <p className="font-display italic text-lg sm:text-xl text-ebony leading-snug">
                  &ldquo;{p.quote}&rdquo;
                </p>
                <footer className="mt-4 text-[11px] tracked uppercase text-ebony/50">
                  {p.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* APPOINTMENT / CTA */}
        <section id="appointment" className="py-24 md:py-32 px-5 sm:px-8 bg-ebony text-bone relative overflow-hidden">
          <div className="absolute inset-0 cannage-bg-dark pointer-events-none" />
          <div className="mx-auto max-w-2xl text-center relative">
            <p className="text-[11px] tracked uppercase text-brass mb-6">
              Private Viewing
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              Sit Before You Decide.
            </h2>
            <p className="text-bone/65 font-light leading-relaxed mb-10 max-w-lg mx-auto">
              The collection is shown by appointment only, at the Maison
              showroom. An advisor will walk you through cane, wood, and
              cloth before a single piece is made to order.
            </p>
            <AppointmentForm />
            <p className="mt-5 text-xs text-bone/40">
              Showrooms in Mumbai, Delhi, and Paris. By appointment, Tuesday
              through Saturday.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-5 sm:px-8 py-14 border-t border-ebony/10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display tracked text-lg text-ebony mb-2">
              DIOR&nbsp;MAISON
            </p>
            <p className="text-xs text-ebony/45 max-w-xs font-light">
              A concept collection reimagining the house of Dior as a
              furniture atelier. Fan-made study project, not affiliated with
              Christian Dior SE.
            </p>
          </div>
          <div className="flex gap-8 text-[11px] tracked uppercase text-ebony/50">
            <a href="#collection" className="hover:text-ebony transition-colors focus-ring rounded-sm">
              Collection
            </a>
            <a href="#atelier" className="hover:text-ebony transition-colors focus-ring rounded-sm">
              Atelier
            </a>
            <a href="#appointment" className="hover:text-ebony transition-colors focus-ring rounded-sm">
              Appointment
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
