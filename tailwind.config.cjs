const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      
        screens: {
          // 'xs': '450px',
          // 'sm': '580px',
          // 'md': '768px',
          // 'lg': '1024px',
          // 'xl': '1250px',
  
          // xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
          // sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
          // md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
          // lg: { min: '1200px' }, // Desktop smallest.
          // xl: { min: '1159px' }, // Desktop wide.
          // xxl: { min: '1359px' }, // Desktop widescreen.
          // // 450px 580px 768px 1024px 1250px
          xs: {min:"1px",max:"580px"},
          sm: {min:"580px",max:"767px"},
          md: {min:"768px",max:"1023px"},
          lg: {min:"1024px",max:"1249px"},
          xl: {min:"1250px",max:"5000px"},
  
        },
        fontFamily:{
          Poppins: "'Poppins', sans-serif",
          OpenSans: "'Open Sans', sans-serif",
        }
      }
    
  },

  plugins: [
    require('tailwindcss-question-mark'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('prettier-plugin-tailwindcss')
  ]
};

module.exports = config;