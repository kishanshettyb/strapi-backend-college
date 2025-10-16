module.exports = ({ env }) => {
	const isProduction = env("NODE_ENV") === "production";

	return {
		host: env("HOST", "0.0.0.0"),
		port: env.int("PORT", 1337),
		app: {
			keys: env.array("APP_KEYS", ["defaultKey1", "defaultKey2", "defaultKey3", "defaultKey4"])
		},
		url: env("PUBLIC_URL", `http${isProduction ? "s" : ""}://${env("RENDER_EXTERNAL_HOSTNAME") || "localhost:1337"}`),
		admin: {
			auth: {
				options: {
					secure: isProduction // ✅ secure cookies only in production (HTTPS)
				}
			}
		}
	};
};
