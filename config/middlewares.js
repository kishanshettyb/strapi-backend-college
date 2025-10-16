module.exports = [
	"strapi::logger",
	"strapi::errors",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					"connect-src": ["'self'", "https:"],
					"img-src": ["'self'", "data:", "blob:", "https:"],
					"media-src": ["'self'", "data:", "blob:", "https:"],
					upgradeInsecureRequests: null
				}
			}
		}
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::query",
	"strapi::body",
	{
		name: "strapi::session",
		config: {
			secure: process.env.NODE_ENV === "production" // ✅ dynamic secure cookie setting
		}
	},
	"strapi::favicon",
	"strapi::public"
];
