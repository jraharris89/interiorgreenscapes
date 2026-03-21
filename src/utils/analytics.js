/**
 * Google Analytics 4 utility
 *
 * Replace GA_MEASUREMENT_ID with your actual GA4 measurement ID (e.g. "G-XXXXXXXXXX").
 * The gtag script is loaded in index.html.
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

/** Send a GA4 page_view event */
export function trackPageView(path, title) {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
}

/** Send a custom GA4 event */
export function trackEvent(eventName, params = {}) {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;
  window.gtag('event', eventName, params);
}

/**
 * Pre-built event helpers
 */
export const analytics = {
  /** Track CTA button clicks */
  ctaClick: (label) =>
    trackEvent('cta_click', { event_category: 'engagement', event_label: label }),

  /** Track phone number clicks */
  phoneClick: () =>
    trackEvent('phone_click', { event_category: 'contact', event_label: '(208) 871-2588' }),

  /** Track email link clicks */
  emailClick: () =>
    trackEvent('email_click', { event_category: 'contact', event_label: 'info@interiorgreenscapes.com' }),

  /** Track contact form submission */
  formSubmit: (service) =>
    trackEvent('form_submit', { event_category: 'lead', event_label: service || 'general' }),

  /** Track service page views */
  serviceView: (serviceName) =>
    trackEvent('service_view', { event_category: 'engagement', event_label: serviceName }),

  /** Track social media clicks */
  socialClick: (platform) =>
    trackEvent('social_click', { event_category: 'engagement', event_label: platform }),

  /** Track portfolio image views */
  portfolioView: (projectName) =>
    trackEvent('portfolio_view', { event_category: 'engagement', event_label: projectName }),

  /** Track outbound link clicks */
  outboundClick: (url) =>
    trackEvent('outbound_click', { event_category: 'engagement', event_label: url }),
};
