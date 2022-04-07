# Candidate tracker

Demo app showing tabular data with filtering in React.

I began this app strictly using styled components, aspiring to build some sort of a
design system. Since this app is for a coding test, time ran out and I reverted to
global styles. Styled components gives the codebase the opportunity to be more
organised, making things like theming really easy and preventing excessive
amounts of CSS being shipped to the client. But for this little app, those
benefits are not utilised, so I reverted to writing global CSS on a stylesheet
which is much quicker for me.

Pixel perfect design replication was the biggest casualty here, since that
takes (me) the most time. Also, I don't have access to Proxima Nova and
without that typeface it's pretty tough to get anywhere near the design.

If I had more time I'd look to decouple the filter to prevent unnecessary
re-renders. Currently, any change to the filter triggers re-renders of
each component involved in the filter. So clicking the 'Archive' button
triggers a re-render of each 'Candidate' component and vice versa.
Likewise with search. Add some search fields and you can start to
accumulate performance bottlenecks (React DevTools profiler with
the setting 'Highlight updates when components render' is helpful
to visualise this).

I took the better part of a day to build this ... not quite 4 hours,
probably closer to 8. Note: I'm still learning React!

## Usage

This app was created with [Vite](https://vitejs.dev/). To run, clone this repo and run `npm install` and `npm run dev` from the project root.

Once it's running, open localhost:3000, enter some search terms and click away!