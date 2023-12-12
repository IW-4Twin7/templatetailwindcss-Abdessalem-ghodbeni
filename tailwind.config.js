/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        navColor: "#314584",
        btnColor: "#ff3946",
        pColor: "#6e757a",
        div_custumer_color: "#e64c47",
      },
      fontSize: {
        navSize: "24px",
        texttSize: "28px",
        SectionTwoSize: "45px",
        TitleFooter: "50px",
        titleSize: "74px",
        pSize: "18px",
        pSizeP2: "18px",
      },

      fontFamily: {
        fontNav: ["Work Sans"],
      },
      width: {
        custumer_div_width: "304px",
      },
      height: {
        custumer_div_height: "385px",
      },
    },
  },
  plugins: [],
};
