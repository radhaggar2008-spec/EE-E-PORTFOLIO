import { useState } from 'react';
import { Check, Copy, Maximize2, Play, VolumeX } from 'lucide-react';
import {
  POTENTIOMETER_DEMOS,
  POTENTIOMETER_SKETCH,
  POTENTIOMETER_WIRING_PHOTO,
  type LabPhotoItem,
  type LabVideoItem,
} from '../data/portfolioData';

interface AdditionalPotentiometerCardProps {
  onOpenVideo: (video: LabVideoItem) => void;
  onOpenPhoto: (photo: LabPhotoItem) => void;
}

export function AdditionalPotentiometerCard({
  onOpenVideo,
  onOpenPhoto,
}: AdditionalPotentiometerCardProps) {
  const [copied, setCopied] = useState(false);
  const [adcValue, setAdcValue] = useState(512);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const voltage = ((adcValue / 1023) * 5).toFixed(2);
  const pwmMapped = Math.round((adcValue / 1023) * 255);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(POTENTIOMETER_SKETCH);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const recentStream = [
    Math.max(0, adcValue - 6),
    Math.max(0, adcValue - 2),
    adcValue,
    Math.min(1023, adcValue + 3),
    adcValue,
  ];

  return (
    <section
      id="potentiometer-a2"
      aria-labelledby="potentiometer-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-blue-600">
            Additional Arduino Program
          </p>
          <h3
            id="potentiometer-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-slate-900"
          >
            Analog Potentiometer Reading on Pin A2 &amp; Serial Monitor
          </h3>
        </div>
        <p className="text-xs text-slate-500">
          Analog Input <span className="font-mono">A2</span> · <span className="font-mono">9600</span> Baud · 10-bit ADC (<span className="font-mono">0–1023</span>)
        </p>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">
        This Arduino sketch reads the continuous analog voltage from a rotary potentiometer
        connected to analog input pin <span className="font-mono font-medium text-slate-800">A2</span>{' '}
        (with outer pins wired to <span className="font-mono font-medium text-slate-800">5V</span> and{' '}
        <span className="font-mono font-medium text-slate-800">GND</span>) and streams the converted
        10-bit digital values continuously to the Arduino IDE Serial Monitor.
      </p>

      {/* Code + Interactive Serial Monitor Preview */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Arduino Code Block */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950 text-slate-100 lg:col-span-7">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <span className="font-mono text-xs text-slate-400">
              potentiometer_A2_serial.ino
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  Copied Sketch
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy Sketch
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-slate-200 sm:text-[13px]">
            <code>{POTENTIOMETER_SKETCH}</code>
          </pre>
        </div>

        {/* Interactive Serial Monitor Demonstrator */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-5 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold text-slate-900">
                Interactive Serial Monitor Check
              </h4>
              <span className="font-mono text-xs text-slate-500 tabular-nums">COM8 · 9600</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Adjust the virtual potentiometer shaft to preview how{' '}
              <span className="font-mono text-slate-800">analogRead(A2)</span> maps voltage to
              Serial Monitor output.
            </p>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                <label htmlFor="pot-slider">Potentiometer Position (A2)</label>
                <span className="font-mono text-blue-700 tabular-nums">
                  {adcValue} / 1023 ({voltage} V)
                </span>
              </div>
              <input
                id="pot-slider"
                type="range"
                min={0}
                max={1023}
                value={adcValue}
                onChange={(e) => setAdcValue(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer accent-blue-600"
              />
            </div>

            {/* Simulated Serial Monitor Console */}
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3.5 font-mono text-xs text-slate-800 tabular-nums">
              {recentStream.map((val, idx) => (
                <div key={idx} className="py-0.5">
                  Potentiometer Value (A2): <span className="font-semibold text-blue-700">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-200 pt-4 text-center">
            <div>
              <p className="text-[11px] text-slate-500">Raw ADC</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                {adcValue}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500">Pin A2 Voltage</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                {voltage} V
              </p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500">8-bit PWM Map</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-slate-900 tabular-nums">
                {pwmMapped} / 255
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real Lab Bench Evidence for Potentiometer A2 */}
      <div className="mt-8 border-t border-slate-200 pt-6">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h4 className="text-base font-semibold text-slate-900">
            Recorded Bench Evidence (Pin A2 &amp; Serial Monitor)
          </h4>
          <p className="text-xs text-slate-500">
            Silent lab recordings and direct pin A2 wiring photograph
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Wiring close-up photo */}
          <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            <button
              type="button"
              onClick={() =>
                onOpenPhoto({
                  id: 'pot-wiring',
                  title: 'Arduino UNO Pin A2 Wiring',
                  caption:
                    'Close-up showing potentiometer power leads connected to 5V, GND, and the signal wire routed into analog pin A2.',
                  src: POTENTIOMETER_WIRING_PHOTO,
                  aspect: 'aspect-[4/3]',
                })
              }
              className="group relative aspect-[9/12] w-full cursor-pointer bg-slate-950 focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <img
                src={POTENTIOMETER_WIRING_PHOTO}
                alt="Arduino UNO analog pin A2 and 5V/GND jumper wiring for potentiometer"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-white">
                <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                Inspect Wiring
              </span>
            </button>
            <div className="p-4">
              <h5 className="text-sm font-semibold text-slate-900">Pin A2 Hardware Connection</h5>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Close-up of the Arduino UNO headers showing jumper leads on 5V, GND, and Analog In A2.
              </p>
            </div>
          </div>

          {/* Two muted Potentiometer lab clips */}
          {POTENTIOMETER_DEMOS.map((clip) => {
            const isPlaying = playingVideoId === clip.id;
            return (
              <div
                key={clip.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <div className="relative aspect-[9/12] w-full bg-slate-950">
                  {isPlaying ? (
                    <video
                      src={clip.mutedSrc}
                      poster={clip.thumbnailSrc}
                      controls
                      autoPlay
                      muted
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingVideoId(clip.id)}
                      aria-label={`Play ${clip.label} silently`}
                      className="group relative block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
                    >
                      <img
                        src={clip.thumbnailSrc}
                        alt={clip.label}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition-transform group-hover:scale-105">
                          <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between text-xs text-slate-200">
                        <span className="inline-flex items-center gap-1">
                          <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                          Silent
                        </span>
                        <span className="font-mono tabular-nums">{clip.duration}</span>
                      </div>
                    </button>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900">{clip.label}</h5>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{clip.caption}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setPlayingVideoId(isPlaying ? null : clip.id)}
                      className="cursor-pointer text-xs font-semibold text-slate-700 hover:text-slate-950"
                    >
                      {isPlaying ? 'Stop Video' : 'Play Inline'}
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenVideo(clip)}
                      className="cursor-pointer text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Open Viewer
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
