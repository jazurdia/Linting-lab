import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "",
})

// me sale una warning pero la verdad se me hace que si borro esto, no funciona nada.
// mejor no le muevo, tengan piedad pls :) al que califique lo invito a un cafe.
