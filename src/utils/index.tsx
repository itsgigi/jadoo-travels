
// import ReactGA from "react-ga";
import ReactGA4 from "react-ga4";

const InitializeGoogleAnalytics = () => {
  // Initialize UA
//   ReactGA.initialize("UA-XXXXXXXX-X");
  // Initialize GA4 - Add your measurement ID
  ReactGA4.initialize('G-VPCCL6W4YR');

  console.log("GA INITIALIZED");
};

const TrackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send UA Event
//   ReactGA.event({
//     category: category,
//     action: action,
//     label: label,
//   });
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };