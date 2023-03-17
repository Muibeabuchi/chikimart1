/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors:{
      transparent:'transparent',
      primary:'rgb(var(--primary-color) / <alpha-value>)',
      hero:'rgb(var(--hero-bg) / <alpha-value>)',
      cardfirst:'rgb(var(--card-bg-01) / <alpha-value>)',
      cardsecond:'rgb(var(--card-bg-02) / <alpha-value>)',
      cardthird:'rgb(var(--card-bg-03) / <alpha-value>)',
      cardfourth:'rgb(var(--card-bg-04) / <alpha-value>)',
      stc:'rgb(var(--small-text-color) / <alpha-value>)',
      htc:'rgb(var(--heading-text-color) / <alpha-value>)',
    },
    screens:{
      'small':{'max':'576px'},
      'tablet':{'max':'768px'},
      'laptop':{'max':'992px'},
    },
    extend: {
        backgroundImage:{
          'common-section':"url('/assets/images/eco-logo.png')"
        }
    },
    fontFamily:{
      'display':['Poppins','sans-serif'],
      'original':["Montserrat", 'sans-serif']
    }
  },
  plugins: [],
}