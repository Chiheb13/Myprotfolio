# Google Analytics Integration Setup Guide

## Overview
Your portfolio now has Google Analytics integrated to track:
- ✅ Number of visitors
- ✅ Most viewed pages
- ✅ Traffic sources (Direct, Google Search, Social Media, Referral)
- ✅ Visitor countries/geographic distribution
- ✅ Traffic evolution over time

## Setup Steps

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Start measuring** and sign in with your Google account
3. Create a new property for your portfolio

### Step 2: Get Your Measurement ID
1. In Google Analytics, go to **Admin** (bottom left)
2. Under **Property**, select **Data Streams**
3. Click on your web stream
4. Copy your **Measurement ID** (looks like: `G-XXXXXXXXXX`)

### Step 3: Update Your Configuration
1. Open `src/routes/__root.tsx`
2. Find the line: `const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX";`
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID

4. Also update `src/lib/useAnalytics.ts`
5. Find the line: `gtag('config', 'G-XXXXXXXXXX',`
6. Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Step 4: Deploy Your Site
1. Push your changes to your repository
2. Deploy your portfolio
3. Wait 24-48 hours for Google Analytics to start collecting data

## Features Implemented

### 1. **Automatic Page View Tracking**
- Every page navigation is automatically tracked
- Route changes trigger Google Analytics events
- Located in: `src/routes/__root.tsx` (useEffect hook)

### 2. **Analytics Dashboard** (`/analytics`)
- Beautiful dashboard showing key metrics
- Displays:
  - Total visitors
  - Total sessions
  - Average session duration
  - Bounce rate
  - Visitor growth chart (monthly trends)
  - Traffic sources pie chart
  - Top pages bar chart
  - Top countries with visitor distribution

### 3. **Analytics Utility Hook**
- File: `src/lib/useAnalytics.ts`
- Use in your components:

```typescript
import { useGoogleAnalytics } from '@/lib/useAnalytics';

export function MyComponent() {
  const { trackEvent, trackExternalLink, trackFormSubmission } = useGoogleAnalytics();
  
  // Track custom events
  const handleClick = () => {
    trackEvent('button_click', { button_name: 'signup' });
  };
  
  // Track external links
  const handleExternalLink = (url) => {
    trackExternalLink(url);
  };
  
  // Track form submissions
  const handleFormSubmit = () => {
    trackFormSubmission('contact_form');
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <a href="https://example.com" onClick={() => handleExternalLink('https://example.com')}>
        External Link
      </a>
    </div>
  );
}
```

### 4. **Analytics Navigation**
- Added analytics icon to navbar
- Click the chart icon in the top navigation to access the dashboard
- Dashboard shows mock data initially, will display real data after setup

## Available Events to Track

The utility hook provides several pre-configured event types:

1. **trackEvent(eventName, params)**
   - Generic event tracker
   - Example: `trackEvent('scroll', { scroll_percentage: 50 })`

2. **trackPageView(pagePath, pageTitle)**
   - Manual page view tracking
   - Already automatic but can be used manually if needed

3. **trackScroll(scrollPercentage)**
   - Track scroll depth
   - Example: `trackScroll(50)`

4. **trackExternalLink(url)**
   - Track clicks to external websites
   - Example: `trackExternalLink('https://github.com')`

5. **trackFormSubmission(formName)**
   - Track form submissions
   - Example: `trackFormSubmission('contact_form')`

## Common Use Cases

### Tracking Button Clicks
```typescript
const { trackEvent } = useGoogleAnalytics();

<button onClick={() => trackEvent('view_project', { project_id: '123' })}>
  View Project
</button>
```

### Tracking Download Events
```typescript
<a 
  href="/resume.pdf" 
  onClick={() => trackEvent('download_file', { file_type: 'resume' })}
>
  Download Resume
</a>
```

### Tracking Video Play
```typescript
const handleVideoPlay = () => {
  trackEvent('video_play', { video_title: 'My Demo' });
};
```

## Viewing Your Analytics Data

1. Go to [Google Analytics Dashboard](https://analytics.google.com)
2. Select your portfolio property
3. View real-time data in the **Realtime** section
4. Check **Reports** section for:
   - User acquisition
   - User engagement
   - Monetization (if applicable)
   - User retention
   - Demographic information

## Dashboard URL
Once deployed, access your analytics at: `yoursite.com/analytics`

## Tips for Better Tracking

1. **Set User Properties** - Track logged-in users
2. **Create Custom Audiences** - Segment visitors based on behavior
3. **Set Up Goals/Conversions** - Track important actions (contact form, project view, etc.)
4. **Use Custom Events** - Track specific user interactions important to your portfolio

## Troubleshooting

### Google Analytics Not Receiving Data
1. Check that your Measurement ID is correct
2. Ensure your site is deployed (localhost won't send data)
3. Wait 24 hours for initial data collection
4. Check Google Analytics real-time view for immediate confirmation

### Dashboard Shows Mock Data
- This is intentional for the initial setup
- Replace mock data with real Google Analytics API data once you set up the API
- See "Advanced Setup" section below

## Advanced Setup: Real-time Data in Dashboard

To display real data from Google Analytics in your dashboard:

1. Set up [Google Analytics Reporting API](https://developers.google.com/analytics/devguides/reporting/core/v4)
2. Create a service account in Google Cloud Console
3. Add API credentials to your environment variables
4. Update `src/routes/analytics.tsx` to fetch real data

Example environment variables:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA_API_SECRET=your_api_secret_here
```

## Support
For more information:
- [Google Analytics Documentation](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
