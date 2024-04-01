# Rendering
* Rendering is the process that transforms the code you write into user interfaces
* In Next.js, choosing the right time and place to do this rendering is vital for building a performant application
CSS, SSR and RSCs
* Rendering in React → Rendering in Next.js
* If you don't fully understand something in a video, try watching it again, maybe even a third time


# Client-side Rendering
* This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering (CSR)
* CSR quickly became the standard for SPAs, with widespread adoption
* It wasn't long before developers began noticing some inherent drawbacks to this approach

//WHEN WE MAKE A REQUEST TO SERVER  FROM CLient side , server give html file + ref js ,requestjs it give js ,then html parse and generate HTml and it also create dom from root elmennt and isplay UI intercative


# Drawbacks of CSR
* SEO
Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index

* Performance
Having the browser (the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or a loading spinner while the page loads

* Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the Ul


# Hydration
* During hydration, React takes control in the browser, reconstructing the component tree in memory based on the static HTML that was served
* It carefully plans the placement of interactive elements within this tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
* This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience


# Server-side Solutions
1. Static Site Generation (SSG)
2. Server-Side Rendering (SSR)
SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts
SSR, on the other hand, renders pages on-demand in response to user requests.
It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user
Server-Side Rendering (SSR) was a significant improvement over Client-Side
Rendering (CSR), providing faster initial page loads and better SFO HD
SU

//WHEN WE MAKE A REQUEST TO SERVER  FROM CLient side , server it give generated html file + ref js ,requestjs it give js , the it do hydration on client side

# Drawbacks of SSR
1. You have to fetch everything before you can show anything
Components cannot start rendering and then pause or "wait" while data is still being loaded
If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client
SU

Drawbacks of SSR
2. You have to load everything before you can hydrate anything
For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them

Drawbacks of SSR
3. You have to hydrate everything before you can interact with anything
React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
As a consequence, all components must be hydrated before you can interact with any of them.

# Drawbacks of SSR - All or Nothing Waterfall
1. having to load the data for the entire page
2. load the JavaScript for the entire page, and
3. hydrate the entire page
create an "all or nothing" waterfall problem that spans from the server to the client, where each issue must be resolved before moving to the next one
This is inefficient if some parts of your app are slower than others, as is often the case in real-world apps



# React Server Components (RSC)
1) React Server Components (RSC) represent a new architecture designed by the React team
2) This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times, and interactivity
3) The architecture introduces a dual-component model
- Client Components
- Server Components
This distinction is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact
with


# React Server Components (RSC)
React Server Components (RSC) represent a new architecture designed by the React team
This approach aims to leverage the strengths of both server and client environments, optimizing for efficiency, load times, and interactivity
The architecture introduces a dual-component model
- Client Components
Server Components
This distinction is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact
with
SU

# Client Components
Client Components are the familiar React components we've been using
They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
Components that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy

# Client Components contd.
Client Components have access to the client environment, such as the browser, allowing them to use state, effects, and event listeners to handle interactivity and also access browser-exclusive APIs like geolocation or localStorage, allowing you to build Ul for specific use cases



# HTML streaming on the Server
* You don't have to fetch everything before you can show anything
* If a particular section delays the initial HTML, it can be seamlessly integrated into the stream later
* This is the essence of how Suspense facilitates server-side HTML streaming


# The other challenge
* Until the JavaScript for the main section is loaded, client-side app hydration cannot start
* And if the JavaScript bundle for the main section is large, this could significantly delay the process

# Code splitting
* Code splitting allows you to mark specific code segments as not immediately necessary for loading, signalling your bundler to segregate them into separate `<script>' tags
* Using 'React.lazy' for code splitting enables you to separate the main section's code from the primary JavaScript bundle
* The JavaScript containing React and the code for the entire application, excluding the main section, can now be downloaded independently by the client, without having to wait for the main section's code



# Selective Hydration on the Client contd.
* Selective Hydration offers a solution to the third issue: the necessity to "hydrate everything to interact with anything"
* React begins hydrating as soon as possible, enabling interactions with elements like the header and side navigation without waiting for the main content to be hydrated
* This process is managed automatically by React
* In scenarios where multiple components are awaiting hydration, React prioritizes hydration based on user interactions

# Selective Hydration on the Client contd.
* Selective Hydration offers a solution to the third issue: the necessity to "hydrate everything to interact with anything"
* React begins hydrating as soon as possible, enabling interactions with elements like the header and side navigation without waiting for the main content to be hydrated
* This process is managed automatically by React
* In scenarios where multiple components are awaiting hydration, React prioritizes hydration based on user interactions

# Client Components
* Client Components are the familiar React components we've been using
* They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
* Components that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy


# Benefits of Server Components
Reduced Bundle Sizes
Server Components do not send code to the client, allowing large dependencies to remain server-side
This benefits users with slower internet connections or less capable devices by eliminating the need to download, parse, and execute JavaScript for these components
Additionally, it removes the hydration step, speeding up app loading and interaction


# Summary
* In the RSC architecture and by extension in the Next.js app router, components are server components by default
* To use client components, you must include the use client directive at the top
* Server components are rendered only on the server
* Client components are rendered once on the server and then on the client



# Static Rendering
* Static rendering is a server rendering strategy where we generate HTML pages at the time of building our application
* This approach allows the page to be built once, cached by a CDN, and served to the client almost instantly
* This optimization also enables you to share the result of the rendering work among different users, resulting in a significant performance boost for your application
* Static rendering is particularly useful for blog pages, e-commerce product pages documentation, and marketing pages
SUB


# Production Server vs Dev Server
* For production, an optimized build is created once, and you deploy that build
* A development server, on the other hand, focuses on the developer experience
* We can't afford to build our app once, make changes, rebuild, and so on
* For production builds, a page will be pre-rendered once when we run the build command
* In development mode, a page will be pre-rendered for every request


# Prefetching
* Prefetching is a technique used to preload a route in the background before the user navigates to it
* Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or as it comes into view through scrolling
* For static routes, the entire route is prefetched and cached by default
When we load the homepage, Next.js prefetches the About and Dashboard routes, keeping them ready for instant navigation

# Static Rendering Summary
* Static rendering is a strategy where the HTML is generated at build time
* Along with the HTML, the RSC payload is created for each component, and * JavaScript chunks are produced for client-side component hydration in the browser
* If you navigate directly to a page route, the corresponding HTML file is served
* I you navigate to the route from a different one, the route is created on the client side using the RSC payload and JavaScript chunks, without any additional requests to the server
* Static rendering is great for performance and use cases include blogs,
documentation, marketing pages etc.

# Dynamic Rendering
* Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
* It is useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters
* News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial


# How to Dynamically Render
* During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route
* In Next.js, these dynamic functions are: cookies(), headers(), and searchParams
* Using any of these will opt the whole route into dynamic rendering at request time


# Dynamic Rendering Summary
* Dynamic rendering is a strategy where the HTML is generated at request time
Next.js automatically switches to dynamic rendering when it comes across a dynamic function in the component, such as cookies(), headers(), or the searchParams object
* This form of rendering is great for when we need to render HTML personalized to a user, such as a social media feed
* As a developer, you do not need to choose between static and dynamic rendering.
* Next.js will automatically choose the best rendering strategy for each route based on the features and APIs used


# Streaming
* Streaming is a strategy that allows for progressive Ul rendering from the server
* Work is divided into chunks and streamed to the client as soon as it's ready
* This enables users to see parts of the page immediately, before the entire content has finished rendering
* Streaming significantly improves both the initial page loading performance and the rendering of Ul elements that rely on slower data fetches, which would otherwise block the render boundaries in our application and rely
on streaming for better
* Streaming is integrated into the Next.js App Router by default

