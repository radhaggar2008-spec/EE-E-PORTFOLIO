import { useState } from 'react';
import { Maximize2, Play, VolumeX } from 'lucide-react';
import { LED_DEMONSTRATIONS, type LabVideoItem } from '../data/portfolioData';

interface VideoGallerySectionProps {
  onOpenVideo: (video: LabVideoItem, index: number) => void;
}

export function VideoGallerySection({ onOpenVideo }: VideoGallerySectionProps) {
  const [activeInlineId, setActiveInlineId] = useState<string | null>(null);

  return (
    <div id="demonstrations" className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-blue-600">
            Practical Hardware Evidence
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            Recorded Laboratory Demonstrations
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          Silent audio-removed streams · Original framing and orientation preserved
        </p>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
        Each recording below documents a distinct laboratory run from the Arduino UNO hardware
        activities—covering digital LED patterns, potentiometer-driven LED control, and sensor
        threshold switching. Background noise has been stripped from every video while keeping the
        original circuit wiring, blinking patterns, and IDE code unobstructed.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LED_DEMONSTRATIONS.map((demo, index) => {
          const isPlayingInline = activeInlineId === demo.id;

          return (
            <article
              key={demo.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {/* Video / Thumbnail Stage (Portrait 9:16 preserved via object-contain, zero cropping) */}
              <div className="relative aspect-[9/14] w-full bg-slate-950">
                {isPlayingInline ? (
                  <video
                    src={demo.mutedSrc}
                    poster={demo.thumbnailSrc}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveInlineId(demo.id)}
                    aria-label={`Play ${demo.label} silently`}
                    className="group relative block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    <img
                      src={demo.thumbnailSrc}
                      alt={`${demo.label} — Arduino UNO and breadboard LED circuit`}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform duration-150 group-hover:scale-105">
                        <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between text-xs text-slate-200">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                        Silent Video
                      </span>
                      <span className="font-mono tabular-nums">{demo.duration}</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-lg font-semibold text-slate-900">{demo.label}</h4>
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {demo.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {demo.observedDetail}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {demo.caption}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveInlineId(isPlayingInline ? null : demo.id)}
                    className="min-h-[40px] cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {isPlayingInline ? 'Show Thumbnail' : 'Play Inline'}
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenVideo(demo, index)}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Open Viewer
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
