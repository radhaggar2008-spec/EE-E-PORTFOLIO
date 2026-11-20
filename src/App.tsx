import { useCallback, useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, Maximize2 } from 'lucide-react';
import {
  EXPERIMENT_01_DATA,
  LAB_SECTION_INTRO,
  LED_DEMONSTRATIONS,
  PORTFOLIO_PROFILE,
  type LabPhotoItem,
  type LabVideoItem,
} from './data/portfolioData';
import {
  HardwareIllustrationsStrip,
  SignalFlowDiagram,
} from './components/TechnicalIllustrations';
import { VideoGallerySection } from './components/VideoGallerySection';
import { AdditionalPotentiometerCard } from './components/AdditionalPotentiometerCard';
import { WorkingModelSection } from './components/WorkingModelSection';
import {
  VideoLightboxModal,
  type LightboxMedia,
} from './components/VideoLightboxModal';

export default function App() {
  const [lightboxMedia, setLightboxMedia] = useState<LightboxMedia | null>(null);
  const [lightboxLedIndex, setLightboxLedIndex] = useState<number | null>(null);

  const handleOpenLedVideo = useCallback((video: LabVideoItem, index: number) => {
    setLightboxLedIndex(index);
    setLightboxMedia({
      kind: 'video',
      item: video,
      index,
      total: LED_DEMONSTRATIONS.length,
    });
  }, []);

  const handleOpenAnyVideo = useCallback((video: LabVideoItem) => {
    setLightboxLedIndex(null);
    setLightboxMedia({ kind: 'video', item: video });
  }, []);

  const handleOpenPhoto = useCallback((photo: LabPhotoItem) => {
    setLightboxLedIndex(null);
    setLightboxMedia({ kind: 'photo', item: photo });
  }, []);

  const handleCloseModal = useCallback(() => {
    setLightboxMedia(null);
    setLightboxLedIndex(null);
  }, []);

  const handlePrevLed = useCallback(() => {
    if (lightboxLedIndex === null) return;
    const prevIdx =
      (lightboxLedIndex - 1 + LED_DEMONSTRATIONS.length) % LED_DEMONSTRATIONS.length;
    setLightboxLedIndex(prevIdx);
    setLightboxMedia({
      kind: 'video',
      item: LED_DEMONSTRATIONS[prevIdx],
      index: prevIdx,
      total: LED_DEMONSTRATIONS.length,
    });
  }, [lightboxLedIndex]);

  const handleNextLed = useCallback(() => {
    if (lightboxLedIndex === null) return;
    const nextIdx = (lightboxLedIndex + 1) % LED_DEMONSTRATIONS.length;
    setLightboxLedIndex(nextIdx);
    setLightboxMedia({
      kind: 'video',
      item: LED_DEMONSTRATIONS[nextIdx],
      index: nextIdx,
      total: LED_DEMONSTRATIONS.length,
    });
  }, [lightboxLedIndex]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="#overview"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            {PORTFOLIO_PROFILE.studentName}
          </a>

          <nav
            aria-label="Primary sections"
            className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex"
          >
            <a
              href="#overview"
              className="transition-colors hover:text-slate-950 whitespace-nowrap shrink-0"
            >
              Overview
            </a>
            <a
              href="#lab-activities"
              className="transition-colors hover:text-slate-950 whitespace-nowrap shrink-0"
            >
              Lab Activities
            </a>
            <a
              href="#demonstrations"
              className="transition-colors hover:text-slate-950 whitespace-nowrap shrink-0"
            >
              Demonstrations
            </a>
            <a
              href="#potentiometer-a2"
              className="transition-colors hover:text-slate-950 whitespace-nowrap shrink-0"
            >
              Potentiometer A2
            </a>
            <a
              href="#working-model"
              className="transition-colors hover:text-slate-950 whitespace-nowrap shrink-0"
            >
              Working Model
            </a>
          </nav>

          <a
            href="#demonstrations"
            className="inline-flex min-h-[40px] items-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            View Lab Videos
          </a>
        </div>
      </header>

      <main>
        {/* Split-Screen Portfolio Hero */}
        <section id="overview" className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:px-6 lg:px-8 lg:pt-14">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* Left Typographic Column */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 lg:col-span-7">
              <div>
                <p className="text-xs font-medium tracking-wide text-blue-600">
                  {PORTFOLIO_PROFILE.degree} · {PORTFOLIO_PROFILE.course}
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {PORTFOLIO_PROFILE.greetingHeadline}
                </h1>
                <p className="mt-2 text-lg font-medium text-slate-700">
                  {PORTFOLIO_PROFILE.greetingSubline}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                  {PORTFOLIO_PROFILE.introStatement}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
                <a
                  href="#lab-activities"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  Explore Lab Activities
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#working-model"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  Working Model Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Cohort Visual Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-5">
              <button
                type="button"
                onClick={() =>
                  handleOpenPhoto({
                    id: 'ee-cohort',
                    title: 'Engineering Exploration Laboratory Cohort',
                    caption:
                      'First-year B.Tech CSE Core laboratory group session with Arduino UNO kits and laptop workstations.',
                    src: PORTFOLIO_PROFILE.cohortPhoto,
                    aspect: 'aspect-[4/3]',
                  })
                }
                className="group relative flex-1 cursor-pointer bg-slate-950 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <img
                  src={PORTFOLIO_PROFILE.cohortPhoto}
                  alt="Engineering Exploration Lab group session with Arduino setups"
                  referrerPolicy="no-referrer"
                  className="h-72 w-full object-cover transition-transform duration-200 group-hover:scale-[1.02] lg:h-full"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3 text-left">
                  <div>
                    <p className="text-xs font-medium text-blue-300">Lab Cohort Session</p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      Hands-on hardware and Arduino bench prototyping
                    </p>
                  </div>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-xs">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Full-width 4-Column Summary Strip below Hero Split */}
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-4">
            <div className="border-slate-100 md:border-r md:pr-4">
              <p className="font-mono text-2xl font-bold text-slate-900 tabular-nums">01</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Core Experiment · LED Interfacing
              </p>
            </div>
            <div className="border-slate-100 md:border-r md:pr-4">
              <p className="font-mono text-2xl font-bold text-slate-900 tabular-nums">07</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Silent Demonstration Videos
              </p>
            </div>
            <div className="border-slate-100 md:border-r md:pr-4">
              <p className="font-mono text-2xl font-bold text-slate-900 tabular-nums">Pin A2</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Analog Potentiometer &amp; Serial Lab
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-slate-900 tabular-nums">HC-SR04</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Ultrasonic Radar Working Model
              </p>
            </div>
          </div>
        </section>

        {/* Main Section: ENGINEERING EXPLORATION – LABORATORY ACTIVITIES */}
        <section
          id="lab-activities"
          className="border-y border-slate-200 bg-white py-16"
        >
          <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
            {/* Section Title & Introduction */}
            <div className="border-b border-slate-200 pb-8">
              <p className="text-xs font-medium tracking-wide text-blue-600">
                Laboratory Documentation
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
                Engineering Exploration – Laboratory Activities
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                {LAB_SECTION_INTRO}
              </p>
            </div>

            {/* Experiment 01 Header & Objective */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Category: {EXPERIMENT_01_DATA.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {EXPERIMENT_01_DATA.number}: {EXPERIMENT_01_DATA.title}
                </h3>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="text-sm font-semibold text-slate-900">Objective</h4>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {EXPERIMENT_01_DATA.objective}
                </p>
              </div>
            </div>

            {/* Visual Working Diagram: Arduino -> Digital Output -> LED Patterns */}
            <SignalFlowDiagram />

            {/* Small Technical Illustrations: Arduino UNO, Four LEDs, Breadboard */}
            <div>
              <div className="mb-4">
                <p className="text-xs font-medium tracking-wide text-blue-600">
                  Circuit Building Blocks
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Primary Hardware Components Illustrated
                </h3>
              </div>
              <HardwareIllustrationsStrip />
            </div>

            {/* Structured Cards: Components, Working Principle, Patterns, What I Learned */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Components Used */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h4 className="text-lg font-semibold text-slate-900">Components Used</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {EXPERIMENT_01_DATA.components.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working Principle */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h4 className="text-lg font-semibold text-slate-900">Working Principle</h4>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {EXPERIMENT_01_DATA.workingPrinciple.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Patterns Demonstrated */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h4 className="text-lg font-semibold text-slate-900">Patterns Demonstrated</h4>
                <ol className="mt-4 space-y-3 text-sm text-slate-700">
                  {EXPERIMENT_01_DATA.patternsDemonstrated.map((pattern, idx) => (
                    <li key={pattern.name} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-semibold text-blue-600 tabular-nums">
                        0{idx + 1}.
                      </span>
                      <div>
                        <span className="font-semibold text-slate-900">{pattern.name}</span>
                        <span className="text-slate-600"> — {pattern.description}</span>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-600">
                  {EXPERIMENT_01_DATA.verifiedCodeNote} Note: Each uploaded recording captures a
                  distinct run of the LED-interfacing activity rather than all four patterns in a
                  single clip.
                </p>
              </div>

              {/* What I Learned */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h4 className="text-lg font-semibold text-slate-900">What I Learned</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {EXPERIMENT_01_DATA.learningOutcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Five Original Laboratory Videos Gallery */}
            <VideoGallerySection onOpenVideo={handleOpenLedVideo} />

            {/* Separate Additional Arduino Program Card (Potentiometer A2 + Serial Monitor) */}
            <AdditionalPotentiometerCard
              onOpenVideo={handleOpenAnyVideo}
              onOpenPhoto={handleOpenPhoto}
            />

            {/* Key Takeaway */}
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-7 text-slate-100 sm:p-9">
              <p className="text-xs font-medium tracking-wide text-blue-400">Key Takeaway</p>
              <blockquote className="mt-3 max-w-3xl text-lg leading-relaxed font-medium text-white sm:text-xl">
                “{EXPERIMENT_01_DATA.keyTakeaway}”
              </blockquote>
            </div>
          </div>
        </section>

        {/* Culminating Working Model Project & Supporting Lab Modules */}
        <WorkingModelSection
          onOpenVideo={handleOpenAnyVideo}
          onOpenPhoto={handleOpenPhoto}
        />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            <span className="font-semibold text-slate-800">{PORTFOLIO_PROFILE.studentName}</span>{' '}
            · First-Year B.Tech CSE Core · Engineering Exploration E-Portfolio
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#overview" className="hover:text-slate-900">
              Overview
            </a>
            <a href="#lab-activities" className="hover:text-slate-900">
              Lab Activities
            </a>
            <a href="#demonstrations" className="hover:text-slate-900">
              Demonstrations
            </a>
            <a href="#potentiometer-a2" className="hover:text-slate-900">
              Potentiometer A2
            </a>
            <a href="#working-model" className="hover:text-slate-900">
              Working Model
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <VideoLightboxModal
        media={lightboxMedia}
        onClose={handleCloseModal}
        onPrev={lightboxLedIndex !== null ? handlePrevLed : undefined}
        onNext={lightboxLedIndex !== null ? handleNextLed : undefined}
      />
    </div>
  );
}
