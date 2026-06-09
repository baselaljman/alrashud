import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, isNewTab = false) {
  if (typeof window !== 'undefined') {
    const gtagReport = (window as any).gtag_report_conversion;
    if (gtagReport) {
      e.preventDefault();
      if (isNewTab) {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17281020875/PPm7CJ2r9rkcEMvnnbBA',
            'event_callback': () => {
              window.open(href, '_blank', 'noopener,noreferrer');
            }
          });
        } else {
          window.open(href, '_blank', 'noopener,noreferrer');
        }
      } else {
        gtagReport(href);
      }
    }
  }
}
