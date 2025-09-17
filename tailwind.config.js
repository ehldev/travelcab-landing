// tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        tc: {
          blue: '#365EFF',
          bluedark: '#2E4EDA'
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}