import { useState } from 'react';
import { Maximize2, Play, VolumeX } from 'lucide-react';
import {
  ADDITIONAL_LAB_MODULES,
  WORKING_MODEL_PHOTOS,
  WORKING_MODEL_VIDEO,
  type LabPhotoItem,
  type LabVideoItem,
} from '../data/portfolioData';

interface WorkingModelSectionProps {
  onOpenVideo: (video: LabVideoItem) => void;
  onOpenPhoto: (photo: LabPhotoItem) => void;
}

export function WorkingModelSection({
  onOpenVideo,
  onOpenPhoto,
}: WorkingModelSectionProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section id="working-model" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Culminating Working Model Project */}
      <div className="border-b border-slate-200 pb-6">
        <p className="text-xs font-medium tracking-wide text-blue-600">
          Culminating Course Project
        </p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Arduino UNO-Based Ultrasonic Radar Working Model
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
          Synthesizing digital I/O control, sensor timing, and serial communication from the lab
          experiments into a real-time ultrasonic obstacle detection scanner built with an Arduino
          UNO, HC-SR04 sensor, SG90 micro servo, and a live polar radar sweep display.
        </p>
      </div>

      {/* Main Project Bento Showcase */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Team presentation photo & radar detail photos */}
        <div className="flex flex-col gap-6 lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => onOpenPhoto(WORKING_MODEL_PHOTOS[0])}
              className="group relative block aspect-[16/9] w-full cursor-pointer bg-slate-950 focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <img
                src={WORKING_MODEL_PHOTOS[0].src}
                alt={WORKING_MODEL_PHOTOS[0].title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.01]"
              />
              <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                Enlarge Photo
              </span>
            </button>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                {WORKING_MODEL_PHOTOS[0].title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {WORKING_MODEL_PHOTOS[0].caption}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WORKING_MODEL_PHOTOS.slice(1).map((photo) => (
              <div
                key={photo.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => onOpenPhoto(photo)}
                  className="group relative aspect-[4/3] w-full cursor-pointer bg-slate-950 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-white">
                    <Maximize2 className="h-3 w-3" aria-hidden="true" />
                    View
                  </span>
                </button>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-slate-900">{photo.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Silent Demo Video of Working Model */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white lg:col-span-4">
          <div className="relative aspect-[9/15] w-full flex-1 bg-slate-950">
            {activeVideoId === WORKING_MODEL_VIDEO.id ? (
              <video
                src={WORKING_MODEL_VIDEO.mutedSrc}
                poster={WORKING_MODEL_VIDEO.thumbnailSrc}
                controls
                autoPlay
                muted
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActiveVideoId(WORKING_MODEL_VIDEO.id)}
                aria-label="Play working model radar demonstration silently"
                className="group relative block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <img
                  src={WORKING_MODEL_VIDEO.thumbnailSrc}
                  alt="Arduino UNO Ultrasonic Radar Working Model Demonstration"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                  </span>
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-xs text-slate-200">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                    Silent Lab Stream
                  </span>
                  <span className="font-mono tabular-nums">{WORKING_MODEL_VIDEO.duration}</span>
                </div>
              </button>
            )}
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900">
              {WORKING_MODEL_VIDEO.label}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-500">
              {WORKING_MODEL_VIDEO.observedDetail}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              {WORKING_MODEL_VIDEO.caption}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() =>
                  setActiveVideoId(
                    activeVideoId === WORKING_MODEL_VIDEO.id ? null : WORKING_MODEL_VIDEO.id
                  )
                }
                className="min-h-[40px] cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100"
              >
                {activeVideoId === WORKING_MODEL_VIDEO.id ? 'Show Thumbnail' : 'Play Inline'}
              </button>
              <button
                type="button"
                onClick={() => onOpenVideo(WORKING_MODEL_VIDEO)}
                className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700"
              >
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                Open Viewer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Exploration Activities: Mobile App Inventor & Wireless LED Control */}
      <div className="mt-12 border-t border-slate-200 pt-10">
        <div className="mb-6">
          <p className="text-xs font-medium tracking-wide text-blue-600">
            Supporting Exploration Modules
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Mobile Interface &amp; Wireless Hardware Control
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* MIT App Inventor Calculator Video */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative aspect-[9/12] w-full bg-slate-950">
              {activeVideoId === ADDITIONAL_LAB_MODULES.calculatorVideo.id ? (
                <video
                  src={ADDITIONAL_LAB_MODULES.calculatorVideo.mutedSrc}
                  poster={ADDITIONAL_LAB_MODULES.calculatorVideo.thumbnailSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideoId(ADDITIONAL_LAB_MODULES.calculatorVideo.id)}
                  aria-label="Play MIT App Inventor Calculator demo silently"
                  className="group relative block h-full w-full cursor-pointer"
                >
                  <img
                    src={ADDITIONAL_LAB_MODULES.calculatorVideo.thumbnailSrc}
                    alt="MIT App Inventor Calculator App"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h4 className="text-base font-semibold text-slate-900">
                  {ADDITIONAL_LAB_MODULES.calculatorVideo.label}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {ADDITIONAL_LAB_MODULES.calculatorVideo.caption}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                  Silent
                </span>
                <button
                  type="button"
                  onClick={() => onOpenVideo(ADDITIONAL_LAB_MODULES.calculatorVideo)}
                  className="cursor-pointer text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Open Viewer
                </button>
              </div>
            </div>
          </div>

          {/* MIT App Inventor Blocks Logic Screenshot */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() =>
                onOpenPhoto({
                  id: 'app-inventor-blocks',
                  title: 'MIT App Inventor Logic Blocks',
                  caption:
                    'Visual event-driven blocks implementing addition, subtraction, multiplication, and division button handlers.',
                  src: ADDITIONAL_LAB_MODULES.calculatorBlocksPhoto,
                  aspect: 'aspect-[4/3]',
                })
              }
              className="group relative aspect-[9/12] w-full cursor-pointer bg-slate-950"
            >
              <img
                src={ADDITIONAL_LAB_MODULES.calculatorBlocksPhoto}
                alt="MIT App Inventor Calculator Blocks Logic"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-white">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                Inspect Blocks
              </span>
            </button>
            <div className="p-5">
              <h4 className="text-base font-semibold text-slate-900">
                App Inventor Event Logic
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Event handlers connecting UI button clicks to arithmetic evaluation on TextBox1 and TextBox2 inputs.
              </p>
            </div>
          </div>

          {/* Wireless Bluetooth Smartphone LED Control */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative aspect-[9/12] w-full bg-slate-950">
              {activeVideoId === ADDITIONAL_LAB_MODULES.bluetoothVideo.id ? (
                <video
                  src={ADDITIONAL_LAB_MODULES.bluetoothVideo.mutedSrc}
                  poster={ADDITIONAL_LAB_MODULES.bluetoothVideo.thumbnailSrc}
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideoId(ADDITIONAL_LAB_MODULES.bluetoothVideo.id)}
                  aria-label="Play Smartphone Arduino LED demo silently"
                  className="group relative block h-full w-full cursor-pointer"
                >
                  <img
                    src={ADDITIONAL_LAB_MODULES.bluetoothVideo.thumbnailSrc}
                    alt="Smartphone-Controlled Arduino LED"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h4 className="text-base font-semibold text-slate-900">
                  {ADDITIONAL_LAB_MODULES.bluetoothVideo.label}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {ADDITIONAL_LAB_MODULES.bluetoothVideo.caption}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                  Silent
                </span>
                <button
                  type="button"
                  onClick={() => onOpenVideo(ADDITIONAL_LAB_MODULES.bluetoothVideo)}
                  className="cursor-pointer text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Open Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
