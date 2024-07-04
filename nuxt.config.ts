// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		"~/assets/styles/main.css"
	],
	modules: [
		"@nuxtjs/tailwindcss", 
		"@nuxt/icon"
	],
	app: {
		head: {
			title: "Thandi R. Menelas - RealStr1ke",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
			],
		},
	}
});
