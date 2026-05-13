export function useGoogleAnalytics() {
  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, unknown>
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

  const trackPageView = (pagePath: string, pageTitle: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", `G-XXXXXXXXXX`, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  };

  const trackScroll = (scrollPercentage: number) => {
    trackEvent("scroll", {
      scroll_percentage: scrollPercentage,
    });
  };

  const trackExternalLink = (url: string) => {
    trackEvent("click", {
      type: "external_link",
      link_url: url,
    });
  };

  const trackFormSubmission = (formName: string) => {
    trackEvent("form_submit", {
      form_name: formName,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackScroll,
    trackExternalLink,
    trackFormSubmission,
  };
}
