/* Installation */

export const installTwWhithNextJS = `> npx create-next-app@latest`;

export const terminalNextJS = `1 What is your project named? my-app
2 Would you liketo use TypeScript? No / Yes 
3 Would you like to use ESLint? No / Yes
4 Would you like to use Tailwind CSS? No / Yes
5 use "src/" directory? No / Yes
6 Router? (recommended) No / Yes
7 default import alias? No / Yes`;

export const installTwWithVite = `> npm create vite@latest my-project -- --template react
> cd my-project`;

export const installTwInVite = `> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p`;

export const configTWfile = `/** @type {import('tailwindcss').Config} */ 
export default { 
    content: [ 
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}", 
    ], 
    theme: { 
    extend: ,
    },
    plugins: [],
},`;

export const globalsCssFile = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

export const runProject = `> npm run dev`;

export const createComponentDemoOfTw = `export default function App() {
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    )
}`;

/* Avatar */

export const codeAvatar = `<Image
src={photoUserProfile}
width={50}
h={50}
className="transition-all rounded-full"
/>

<Image
src={photoUserProfile}
width={50}
h={50}
className="transition-all rounded-full p-0.5 outline outline-green-500"
/>

<div className="relative">
<div className="w-[16px] h-[16px] bg-green-500 rounded-full absolute top-0 right-0 flex items-center justify-center"></div>

<Image
  src={photoUserProfile}
  width={50}
  h={50}
  className="transition-all rounded-full"
/>
</div>`;

/* Alert */

export const codeAlert = `<div
role="alert"
className="bg-red-200 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="rotate-180 text-red-500 w-7 h-7"
    data-testid="geist-icon"
    fill="none"
    height="14"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="14"
  >
    <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
</span>

<p className="text-red-900 sm:text-base text-sm">
  Unexpected error. Please try again later.
</p>
</div>

<div
role="alert"
className="bg-green-200 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-green-600"
    data-testid="geist-icon"
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
</span>

<p className="text-green-900 sm:text-base text-sm">
  Data uploaded to the server!
</p>
</div>

<div
role="alert"
className="bg-yellow-100 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-yellow-500"
    data-testid="geist-icon"
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      fill="var(--geist-fill)"
    />
    <path d="M12 9v4" stroke="var(--geist-stroke)" />
    <path d="M12 17h.01" stroke="var(--geist-stroke)" />
  </svg>
</span>

<p className="text-green-900 sm:text-base text-sm">
  Seems your account is about expire.
</p>
</div>

<div
role="alert"
className="bg-sky-100 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-sky-500 w-7 h-7"
    data-testid="geist-icon"
    fill="none"
    height="14"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="14"
  >
    <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
</span>

<p className="text-sky-900 sm:text-base text-sm">
  Updated information. Please check!
</p>
</div>`;

export const codeAlertVariantTwo = `<div
role="alert"
className="bg-red-500 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="rotate-180 text-white w-7 h-7"
    data-testid="geist-icon"
    fill="none"
    height="14"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="14"
  >
    <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
</span>

<p className="text-white sm:text-base text-sm">
  Unexpected error. Please try again later.
</p>
</div>

<div
role="alert"
className="bg-green-500 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-white"
    data-testid="geist-icon"
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
</span>

<p className="text-white sm:text-base text-sm">
  Data uploaded to the server!
</p>
</div>

<div
role="alert"
className="bg-yellow-500 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-white"
    data-testid="geist-icon"
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      fill="var(--geist-fill)"
    />
    <path d="M12 9v4" stroke="var(--geist-stroke)" />
    <path d="M12 17h.01" stroke="var(--geist-stroke)" />
  </svg>
</span>

<p className="text-white sm:text-base text-sm">
  Seems your account is about expire.
</p>
</div>

<div
role="alert"
className="bg-sky-500 flex items-center gap-3 p-3 w-full"
>
<span>
  <svg
    className="text-white w-7 h-7"
    data-testid="geist-icon"
    fill="none"
    height="14"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="14"
  >
    <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
</span>

<p className="text-white sm:text-base text-sm">
  Updated information. Please check!
</p>
</div>`;

/* Accordion */

export const codeAccordion = `<details
className="group [&_summary::-webkit-details-marker]:hidden transition-all max-w-[500px] min-w-[200px]"
open
>
<summary className="sm:w-[400px] flex cursor-pointer items-center justify-between border-b gap-1.5 p-4 text-black dark:text-white transition-all">
  <h2 className="font-medium">
    This is a title of a Accordion.
  </h2>

  <svg
    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p className="py-5 px-4 leading-relaxed text-black dark:text-white border-b transition-all sm:w-[400px]">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
  hic veritatis molestias culpa in, recusandae laboriosam
  neque aliquid libero nesciunt voluptate dicta quo officiis
  explicabo consequuntur distinctio corporis earum similique!
</p>
</details>`;

/* Badge */

export const codeBadge = `<span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
Live
</span>

<span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="-ms-1 me-1.5 h-4 w-4"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>

<p className="whitespace-nowrap text-sm">Paid</p>
</span>

<span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="-ms-1 me-1.5 h-4 w-4"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
  />
</svg>

<p className="whitespace-nowrap text-sm">Refunded</p>
</span>

<span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="-ms-1 me-1.5 h-4 w-4"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  />
</svg>

<p className="whitespace-nowrap text-sm">Failed</p>
</span>`;

/* Button */

export const codeButton = `<button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
Button
</button>`;

export const codeButtonSizes = `<button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
Button
</button>

<button className="transition rounded border border-pink-600 bg-pink-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
Button x2
</button>

<button className="transition rounded border border-pink-600 bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
Button x3
</button>

<button className="transition rounded border border-pink-600 bg-pink-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
Button x4
</button>`;

export const codeButtonVariants = `<button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
Button
</button>

<button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-700 focus:outline-none">
Button
</button>

<button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white focus:outline-none">
Button
</button>

<button className="transition rounded bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-600 focus:outline-none">
Button
</button>`;

export const terminalCommandNpmIreactIcons = `npm i react-icons`;

export const codeSocialButtons = `import { BsWhatsapp, BsFacebook, BsTwitter } from 'react-icons/bs' 
import { FcGoogle } from 'react-icons/fc' 

<button className="flex items-center gap-2 transition rounded border border-green-500 bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:border-green-600 hover:text-white focus:outline-none">
<BsWhatsapp /> WhatsApp
</button>

<button className="flex items-center gap-2 transition rounded border border-blue-900 bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900/90 hover:border-blue-900/90 hover:text-white focus:outline-none">
<BsFacebook /> Facebook
</button>

<button className="flex items-center gap-2 transition rounded border border-sky-500 bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 hover:border-sky-600 hover:text-white focus:outline-none">
<svg
  data-testid="geist-icon"
  fill="none"
  height="15"
  shape-rendering="geometricPrecision"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="1.5"
  viewBox="0 0 24 24"
  width="15"
>
  <path
    fill="var(--geist-fill, currentColor)"
    stroke="none"
    d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
  />
</svg>{" "}
Twitter
</button>

<button className="flex items-center gap-2 transition rounded border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white hover:border-whibg-white hover:text-black focus:outline-none">
<FcGoogle /> Google
</button>`;

export const codeButtonDisabled = `<button
disabled
className="cursor-no-drop transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white"
>
Button
</button>`;

export const codeButtonLoading = `import { ImSpinner8, ImSpinner2 } from 'react-icons/im' 
import { FaSpinner } from 'react-icons/fa' 
import { CgSpinnerTwoAlt } from 'react-icons/cg'

<button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
<ImSpinner8 className="animate-spin" /> Loading
</button>

<button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
<ImSpinner2 className="animate-spin" /> Loading
</button>

<button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
<FaSpinner className="animate-spin" /> Loading
</button>

<button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
<CgSpinnerTwoAlt className="animate-spin" /> Loading
</button>`;

export const codeButtonGroup = `<span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
<button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
  Button 1
</button>

<button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
  Button 2
</button>

<button className="transition-all inline-block dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
  Button 3
</button>
</span>

<span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
<button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
  Profile
</button>

<button className="transition-all inline-block dark:border-e-white/20 px-2 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
  <svg
    className="h-5 w-5 shrink-0 transition duration-300 dark:text-white text-black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</button>
</span>`;

/* Card */

export const codeCard = `<div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-100/20 p-4 sm:p-6 lg:p-8">
<div className="sm:flex sm:justify-between sm:gap-4">
  <div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl">
      Building a SaaS product as a software developer
    </h3>

    <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
      By John Doe
    </p>
  </div>
</div>

<div className="mt-4">
  <p className="max-w-[40ch] text-sm text-gray-500 dark:text-gray-300">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    At velit illum provident a, ipsa maiores deleniti
    consectetur nobis et eaque.
  </p>
</div>
</div>`;

export const codeCardShop = `<div className="w-[200px] md:w-[400px] bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm shadow-indigo-100 dark:shadow-black/50">
<img
  alt="photo-1434389677669"
  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
  className="h-56 w-full object-cover rounded-md"
/>

<div className="mt-2">
  <dl>
    <div>
      <dd className="text-sm text-gray-500">$15.000</dd>
    </div>

    <div>
      <dd className="font-medium">Chaqueta Bomber</dd>
    </div>
  </dl>

  <div className="mt-6 w-full">
    <button className="w-full transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
      Buy
    </button>
  </div>
</div>
</div>`;

/* Input */

export const codeInput = `<input
type="text"
placeholder="This is a input"
className="text-gray-600 dark:text-white transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
/>`;

export const codeInputLeftAndRightAddons = `<span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
<span className="flex items-center justify-center text-sm md:text-base p-2 text-gray-600 bg-gray-200">
  +54
</span>
<input
  id="input"
  placeholder="9999999999"
  type="number"
  className="transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
/>
</span>

<span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
<span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
  https://
</span>
<input
  id="input"
  placeholder="website"
  type="text"
  className="w-40 md:w-auto transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
/>
<span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
  .com
</span>
</span>`;

export const codePasswordInputExample = `const [showPassword, setShowPassword] = useState(false);

const togglePassword = () => {
  setShowPassword(!showPassword);
};

<span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
<input
  id="input"
  placeholder="Password"
  type={showPassword ? "text" : "password"}
  className="transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
/>

<button
  className="flex items-center justify-center px-2 text-gray-600 bg-white"
  onClick={togglePassword}
>
  {showPassword ? (
    <>
      <svg
        class="w-5 h-5"
        data-testid="geist-icon"
        fill="none"
        height="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
        <path d="M1 1l22 22" />
      </svg>
    </>
  ) : (
    <>
      <svg
        class="w-5 h-5"
        data-testid="geist-icon"
        fill="none"
        height="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </>
  )}
</button>
</span>`;

export const codeInputSelect = `<select
className="transition rounded border dark:border-white/20 focus:outline-none focus:ring-2
focus:ring-inset focus:ring-pink-600 text-gray-600
dark:text-white w-[18rem] px-2 py-1.5 bg-white dark:bg-white/10"
>
<option value="option 1" className="!text-gray-600">
  option 1
</option>
<option value="option 2" className="!text-gray-600">
  option 2
</option>
<option value="option 3" className="!text-gray-600">
  option 3
</option>
</select>`;

/* Animated components */

export const codeModal = `const [openModal, setOpenModal] = useState(false);
const toggleModal = () => {
  setOpenModal(!openModal);
};

<button
onClick={toggleModal}
className="transition rounded border border-pink-600 
bg-pink-600 px-4 py-2 text-sm font-medium text-white
hover:bg-pink-700 hover:border-pink-700 
hover:text-white focus:outline-none"
>
Open Modal
</button>

<AnimatePresence>
{openModal && (
  <div className="fixed top-0 left-0 bg-black/10 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50 px-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl w-full h-auto max-w-[600px] rounded shadow-xl relative"
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold text-gray-800 dark:text-white">
          Lorem, ipsum dolor.
        </span>
        <span
          className="cursor-pointer"
          onClick={toggleModal}
        >
          <svg
            className="transition hover:bg-gray-200 dark:hover:bg-gray-900 rounded"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </span>
      </div>

      <hr />

      <div className="px-4 py-5 space-y-3">
        <p className="text-gray-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolorum, molestiae. Totam excepturi laboriosam
          necessitatibus consequatur voluptas pariatur,
          asperiores nemo dolorem?
        </p>

        <p className="text-gray-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minus, nostrum.
        </p>
      </div>

      <hr />

      <div className="py-3 px-4 w-full h-full flex items-center justify-end space-x-4">
        <button className="transition rounded border border-red-600  px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-white">
          Close
        </button>

        <button
          onClick={toggleModal}
          className="transition rounded border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 hover:border-green-700 hover:text-white focus:outline-none focus:ring active:text-white"
        >
          Accept
        </button>
      </div>
    </motion.div>
  </div>
)}
</AnimatePresence>`;

export const codeMenu = `const [openDropdown, setOpenDropdown] = useState(false);
const toggleDrop = () => {
  setOpenDropdown(!openDropdown);
};

<div className="relative">
<div className="inline-flex items-center overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black">
  <button
    className="h-full flex items-center gap-2 p-2 text-gray-600 dark:text-gray-100 dark:hover:bg-black hover:bg-gray-50 hover:text-gray-700"
    onClick={toggleDrop}
  >
    <span>Menu</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={
        openDropdown
          ? 'h-5 w-5 rotate-180 transition-all'
          : "h-5 w-5 transition-all"
      }
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>

<AnimatePresence>
  {openDropdown && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="absolute z-10 mt-2 w-56 rounded-md border border-gray-100 dark:border-white/20 bg-white shadow-lg dark:bg-black"
      role="menu"
    >
      <div className="p-2">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          View on Storefront
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          View Warehouse Info
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          Duplicate Product
        </motion.a>
      </div>
    </motion.div>
  )}
</AnimatePresence>
</div>`;

export const codeDrawer = `const [openDrawer, setOpenDrawer] = useState(false);
const toggleDrawer = () => {
  setOpenDrawer(!openDrawer);
};

<button
onClick={toggleDrawer}
className="transition rounded border border-pink-600 
bg-pink-600 px-4 py-2 text-sm font-medium text-white
hover:bg-pink-700 hover:border-pink-700 
hover:text-white focus:outline-none"
>
Open Drawer
</button>

<AnimatePresence>
{openDrawer && (
  <div className="fixed top-0 left-0 bg-gray-900/50 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50">
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 100 }}
      className="w-full md:w-[300px] flex h-screen flex-col justify-between border-e bg-white fixed top-0 right-0"
    >
      <div className="px-4 py-6">
        <div className="w-full flex items-center justify-between">
          <span className="grid h-10 w-10 place-content-center rounded-full bg-teal-500 text-xs text-white font-bold"></span>

          <span
            onClick={toggleDrawer}
            className="grid h-7 w-7 place-content-center rounded-sm bg-teal-100 text-xs text-teal-900 font-bold cursor-pointer"
          >
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </span>
        </div>

        <div>
          <p className="mt-10 text-black text-2xl font-bold">
            Drawer
          </p>

          <p className="mt-5 text-black">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nulla vitae molestias, nesciunt
            nemo nam minus adipisci! Quam itaque dolorum vitae
            ad, illum, excepturi enim sunt dolore eaque nam
            iure fuga.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
)}
</AnimatePresence>`;

/* Skeleton */

export const codeSkeleton = `<div className="sm:w-[500px] w-[300px] p-4">
<div className="animate-pulse flex space-x-4">
  <div className="flex-1 space-y-3 py-1">
    <div className="h-5 bg-slate-200"></div>
    <div className="h-5 bg-slate-200"></div>
    <div className="h-5 bg-slate-200"></div>
  </div>
</div>
</div>`;

export const codeSkeletonHeightAndWidth = `<div className="sm:w-[500px] w-[300px] p-4">
<div className="animate-pulse flex space-x-4">
  <div className="flex-1 space-y-3 py-1">
    <div className="h-10 bg-slate-200"></div>
  </div>
</div>
</div>`;

export const codeSkeletonCircleAndTextSkeleton = `<div className="sm:w-[500px] w-[300px] p-4">
<div className="animate-pulse flex flex-col space-y-4">
  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
  <div className="flex-1 space-y-3 py-1">
    <div className="h-2 bg-slate-200 "></div>
    <div className="h-2 bg-slate-200 "></div>
    <div className="h-2 bg-slate-200 "></div>
    <div className="w-[75%] h-2 bg-slate-200 "></div>
  </div>
</div>
</div>`;

export const codeSkeletonCircleAndTextSkeletonVariant2 = `<div className="sm:w-[500px] w-[300px] p-4">
<div className="animate-pulse flex space-x-4">
  <div className="rounded-full bg-slate-200 h-10 w-10"></div>
  <div className="flex-1 space-y-3 py-1">
    <div className="h-2 bg-slate-200"></div>
    <div className="h-2 bg-slate-200"></div>
    <div className="h-2 bg-slate-200"></div>
    <div className="h-2 bg-slate-200"></div>
  </div>
</div>
</div>`;

/* Breadcrumb */

export const codeBreadcrumb = `<nav className="p-5">
<ol className="flex items-center gap-1 text-sm text-gray-600 dark:text-white">
  <li>
    <a
      href="#"
      className="block transition hover:text-pink-500"
    >
      <span> Home </span>
    </a>
  </li>

  <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </li>

  <li>
    <a
      href="#"
      className="block transition hover:text-pink-500"
    >
      {" "}
      Shirts{" "}
    </a>
  </li>

  <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </li>

  <li>
    <a
      href="#"
      className="block transition hover:text-pink-500"
    >
      {" "}
      Plain Tee{" "}
    </a>
  </li>
</ol>
</nav>`;
