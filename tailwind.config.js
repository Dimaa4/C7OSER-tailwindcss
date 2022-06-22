/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      "b-lg": {"max": "1232px"},
      "lg": {"max": "992px"},
      "md": {"max": "768px"},
      "sm": {"max": "480px"},
    },
    container:{
      padding: "30px",
      center: "true"
    },
    colors:{
      "white": "#fff",
      "redBrighter": "#EF4123",
      "redDarker" : "#E44225",
      "textBlue": "#0F385A",
      "textGinger": "#E9E1CC"
    },
    extend: {
      backgroundImage: {
        "contentGroups" : "url('../img/groupbg.png')",
        "homePageMain" : "url('../img/people.png')",
        
      },
      keyframes: {
        yearCardAppearLeft: {
          "0%, 100%": {transform: "translate(0px)"},
          "50%": {transform: "translate(-150%)"}
        },
        yearCardAppearRight: {
          "0%, 100%": {transform: "translate(0px)"},
          "50%": {transform: "translate(150%)"}
        }
        
      },
      animation:{
        yearCardAppearLeft: "yearCardAppearLeft 1.5s ease-in-out",
        yearCardAppearRight: "yearCardAppearRight 1.5s ease-in-out"
        
      }
    },
  },
  plugins: [],
}
