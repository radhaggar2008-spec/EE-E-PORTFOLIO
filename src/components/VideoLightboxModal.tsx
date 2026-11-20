import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, VolumeX, X } from 'lucide-react';
import type { LabPhotoItem, LabVideoItem } from '../data/portfolioData';

export type LightboxMedia =
  | { kind: 'video'; item: LabVideoItem; index?: number; total?: number }
  | { kind: 'photo'; item: LabPhotoItem; index?: number; total?: number };

interface VideoLightboxModalProps {
  media: LightboxMedia | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function VideoLightboxModal({
  media,
  onClose,
  onPrev,
  onNext,
}: VideoLightboxModalProps) {
  useEffect(() => {
    if (!media) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [media, onClose, onPrev, onNext]);

  if (!media) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={media.kind === 'video' ? media.item.label : media.item.title}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-white">
              {media.kind === 'video' ? media.item.label : media.item.title}
            </h3>
            <p className="mt-0.5 truncate text-xs text-slate-400">
              {media.kind === 'video' ? media.item.observedDetail : 'Laboratory Evidence Photograph'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous item"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next item"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-200 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Media viewport — uncropped, original orientation preserved */}
        <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-950 p-4">
          {media.kind === 'video' ? (
            <video
              key={media.item.mutedSrc}
              src={media.item.mutedSrc}
              poster={media.item.thumbnailSrc}
              controls
              autoPlay
              muted
              playsInline
              className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain"
            />
          ) : (
            <img
              src={media.item.src}
              alt={media.item.title}
              referrerPolicy="no-referrer"
              className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain"
            />
          )}
        </div>

        {/* Caption & Audio/Preservation Metadata */}
        <div className="flex flex-col gap-3 border-t border-slate-800 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-slate-300">
            {media.item.caption}
          </p>
          {media.kind === 'video' && (
            <div className="flex flex-wrap items-center gap-4 shrink-0 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                <VolumeX className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                Silent lab track
              </span>
              <a
                href={media.item.originalSrc}
                download
                className="inline-flex items-center gap-1.5 font-medium text-blue-400 transition-colors hover:text-blue-300 whitespace-nowrap"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                Preserved original
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
