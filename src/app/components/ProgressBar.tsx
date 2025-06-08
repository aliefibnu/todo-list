import { cn } from "@/lib/utils"; // Asumsi ada utilitas untuk menggabungkan className

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  // Pastikan progress berada dalam rentang 0-100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full flex items-center gap-4 mt-6 px-4">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        Tugas Selesai:
      </p>
      <div
        className="grow bg-gray-200 dark:bg-gray-700 rounded-full shadow-sm overflow-hidden"
        role="progressbar"
        aria-label="Progres penyelesaian tugas"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn(
            "h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-in-out",
            "flex items-center justify-center text-white text-xs font-semibold",
            clampedProgress < 20 ? "px-2" : "px-4"
          )}
          style={{ width: `${clampedProgress}%` }}
        >
          <span
            className={cn(
              "transition-opacity duration-300",
              clampedProgress < 20 ? "opacity-0" : "opacity-100"
            )}
          >
            {clampedProgress}%
          </span>
        </div>
      </div>
    </div>
  );
}
