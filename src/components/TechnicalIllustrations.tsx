import { ArrowRight } from 'lucide-react';

export function SignalFlowDiagram() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-blue-600">
            Visual Working Diagram
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            How Program Instructions Drive Physical LED Outputs
          </h3>
        </div>
        <p className="font-mono text-xs text-slate-500 tabular-nums">
          Pins 8, 9, 10, 11 · 5V Logic
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {/* Stage 1: Arduino UNO */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-medium text-slate-500">01. Controller</span>
            <ArduinoUnoMiniIllustration />
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold text-slate-900">Arduino UNO</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Executes uploaded C/C++ sketch instructions via USB power and configures pins{' '}
              <span className="font-mono text-slate-800">8–11</span> as <span className="font-mono text-slate-800">OUTPUT</span>.
            </p>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* Stage 2: Digital Output */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-medium text-slate-500">02. Signal Logic</span>
            <DigitalPulseIllustration />
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold text-slate-900">Digital Output</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Switches pin states between <span className="font-mono text-slate-800">HIGH (5V)</span> and{' '}
              <span className="font-mono text-slate-800">LOW (0V)</span> using{' '}
              <span className="font-mono text-slate-800">delay(500)</span> or{' '}
              <span className="font-mono text-slate-800">delay(250)</span>.
            </p>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600">
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* Stage 3: LED Patterns */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-medium text-slate-500">03. Hardware Output</span>
            <FourLedsMiniIllustration />
          </div>
          <div className="mt-4">
            <h4 className="text-base font-semibold text-slate-900">LED Patterns</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Four breadboard LEDs light up sequentially, in alternating pairs, or in timed combinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HardwareIllustrationsStrip() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Illustration 1: Arduino UNO */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-4">
          <svg
            viewBox="0 0 220 128"
            className="h-full w-full max-w-[210px]"
            role="img"
            aria-label="Technical schematic illustration of an Arduino UNO microcontroller board"
          >
            {/* PCB body */}
            <rect x="26" y="14" width="176" height="100" rx="6" fill="#0F4C81" stroke="#0B3861" strokeWidth="2" />
            {/* USB-B Port */}
            <rect x="10" y="30" width="24" height="28" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
            {/* DC Barrel Jack */}
            <rect x="12" y="74" width="22" height="22" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            {/* Digital header top (pins 8-11 highlighted) */}
            <rect x="64" y="18" width="116" height="11" rx="1.5" fill="#1E293B" />
            <rect x="92" y="19" width="28" height="9" rx="1" fill="#2563EB" />
            <text x="106" y="38" textAnchor="middle" fill="#E2E8F0" fontSize="8" fontFamily="monospace">
              D8–D11
            </text>
            {/* ATmega328P IC */}
            <rect x="88" y="64" width="84" height="22" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="1" />
            <text x="130" y="78" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">
              ATmega328P
            </text>
            {/* Analog / Power headers bottom */}
            <rect x="70" y="99" width="52" height="10" rx="1.5" fill="#1E293B" />
            <rect x="132" y="99" width="48" height="10" rx="1.5" fill="#1E293B" />
            {/* UNO label */}
            <text x="180" y="54" textAnchor="end" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              UNO
            </text>
            {/* Crystal & LED */}
            <ellipse cx="64" cy="54" rx="8" ry="4" fill="#E2E8F0" />
            <circle cx="176" cy="64" r="3" fill="#22C55E" />
          </svg>
        </div>
        <h4 className="mt-4 text-base font-semibold text-slate-900">Arduino UNO</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          ATmega328P microcontroller board providing 14 digital I/O pins (pins 8–11 used here) and 6 analog inputs (A0–A5).
        </p>
      </div>

      {/* Illustration 2: Four LEDs */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-4">
          <svg
            viewBox="0 0 220 128"
            className="h-full w-full max-w-[210px]"
            role="img"
            aria-label="Technical illustration of four LEDs in red, yellow, and green with polarity legs"
          >
            {[
              { x: 40, color: '#EF4444', glow: '#FEE2E2', label: 'D8' },
              { x: 86, color: '#F59E0B', glow: '#FEF3C7', label: 'D9' },
              { x: 132, color: '#EF4444', glow: '#FEE2E2', label: 'D10' },
              { x: 178, color: '#22C55E', glow: '#DCFCE7', label: 'D11' },
            ].map((led) => (
              <g key={led.label}>
                <circle cx={led.x} cy="40" r="18" fill={led.glow} />
                <path
                  d={`M${led.x - 10} 52 V34 a10 10 0 0 1 20 0 v18 Z`}
                  fill={led.color}
                  stroke="#0F172A"
                  strokeWidth="1.4"
                />
                <rect x={led.x - 12} y="52" width="24" height="4" rx="1" fill={led.color} stroke="#0F172A" strokeWidth="1.2" />
                {/* Anode longer leg */}
                <line x1={led.x - 4} y1="56" x2={led.x - 4} y2="96" stroke="#475569" strokeWidth="2" />
                {/* Cathode shorter leg */}
                <line x1={led.x + 4} y1="56" x2={led.x + 4} y2="86" stroke="#64748B" strokeWidth="2" />
                <text x={led.x} y="114" textAnchor="middle" fill="#334155" fontSize="9" fontFamily="monospace">
                  {led.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <h4 className="mt-4 text-base font-semibold text-slate-900">Four LEDs</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Light-emitting diodes wired with anode (+) legs to digital output pins and cathodes (−) returning to common GND.
        </p>
      </div>

      {/* Illustration 3: Breadboard */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-4">
          <svg
            viewBox="0 0 220 128"
            className="h-full w-full max-w-[210px]"
            role="img"
            aria-label="Technical schematic illustration of a solderless breadboard with power rails and tie-point rows"
          >
            <rect x="20" y="14" width="180" height="100" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Top power rail */}
            <line x1="28" y1="24" x2="192" y2="24" stroke="#EF4444" strokeWidth="1.2" />
            <line x1="28" y1="32" x2="192" y2="32" stroke="#2563EB" strokeWidth="1.2" />
            {/* Central ravine */}
            <rect x="24" y="60" width="172" height="8" rx="1" fill="#E2E8F0" />
            {/* Terminal strip tie-points */}
            {Array.from({ length: 14 }).map((_, col) => {
              const cx = 34 + col * 11.5;
              return (
                <g key={col}>
                  <rect x={cx} y="41" width="4" height="4" rx="0.5" fill="#475569" />
                  <rect x={cx} y="49" width="4" height="4" rx="0.5" fill="#475569" />
                  <rect x={cx} y="75" width="4" height="4" rx="0.5" fill="#475569" />
                  <rect x={cx} y="83" width="4" height="4" rx="0.5" fill="#475569" />
                </g>
              );
            })}
            {/* Bottom power rail */}
            <line x1="28" y1="96" x2="192" y2="96" stroke="#EF4444" strokeWidth="1.2" />
            <line x1="28" y1="104" x2="192" y2="104" stroke="#2563EB" strokeWidth="1.2" />
          </svg>
        </div>
        <h4 className="mt-4 text-base font-semibold text-slate-900">Solderless Breadboard</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Reusable prototyping board with interconnected terminal columns and horizontal ground bus rails for jumper wiring.
        </p>
      </div>
    </div>
  );
}

function ArduinoUnoMiniIllustration() {
  return (
    <svg viewBox="0 0 64 40" className="h-9 w-14" aria-hidden="true">
      <rect x="8" y="4" width="52" height="32" rx="3" fill="#0F4C81" />
      <rect x="2" y="10" width="8" height="10" rx="1" fill="#94A3B8" />
      <rect x="22" y="6" width="26" height="4" fill="#2563EB" />
      <rect x="24" y="18" width="24" height="7" rx="1" fill="#1E293B" />
    </svg>
  );
}

function DigitalPulseIllustration() {
  return (
    <svg viewBox="0 0 64 40" className="h-9 w-14" aria-hidden="true">
      <path
        d="M4 30 H16 V10 H32 V30 H48 V10 H60"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FourLedsMiniIllustration() {
  return (
    <svg viewBox="0 0 64 40" className="h-9 w-14" aria-hidden="true">
      {[
        { x: 10, fill: '#EF4444' },
        { x: 24, fill: '#F59E0B' },
        { x: 38, fill: '#EF4444' },
        { x: 52, fill: '#22C55E' },
      ].map((item, idx) => (
        <g key={idx}>
          <circle cx={item.x} cy="16" r="5" fill={item.fill} />
          <line x1={item.x} y1="21" x2={item.x} y2="33" stroke="#475569" strokeWidth="1.8" />
        </g>
      ))}
    </svg>
  );
}
