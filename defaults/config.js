module.exports = {
	//
	// Set the server mode.
	// Public servers does not require authentication.
	//
	// Set to 'false' to enable users.
	//
	// @type     boolean
	// @default  false
	//
	public: true,

	//
	// Allow connections from this host.
	//
	// @type     string
	// @default  "0.0.0.0"
	//
	host: "0.0.0.0",

	//
	// Set the port to listen on.
	//
	// @type     int
	// @default  9000
	//
	port: 9000,

	//
	// Set the local IP to bind to.
	//
	// @type     string
	// @default  "0.0.0.0"
	//
	bind: undefined,

	//
	// Themes
	//
	// @type     array
	//
	themes: [
		//
		// A theme
		//
		// @type     object
		//
		{
			//
			// Name
			//
			// @type     string
			// @default  "Default"
			//
			"name": "Default",
			//
			// Path to the theme CSS
			//
			// @type     string
			// @default  ""
			//
			"path": "",
			//
			// Set the theme as default
			//
			// @type     boolean
			// @default  false
			//
			"default": true
		},
		{
			"name": "Morning",
			"path": "themes/morning.css",
			"default": false
		},
		{
			"name": "Zenburn",
			"path": "themes/zenburn.css",
			"default": false
		},
		{
			"name": "Crypto",
			"path": "themes/crypto.css",
			"default": false
		}
	],

	//
	// Autoload users
	//
	// When this setting is enabled, your 'users/' folder will be monitored. This is useful
	// if you want to add/remove users while the server is running.
	//
	// @type     boolean
	// @default  true
	//
	autoload: true,

	//
	// Prefetch URLs
	//
	// If enabled, Shuo will try to load thumbnails and site descriptions from
	// URLs posted in channels.
	//
	// @type     boolean
	// @default  true
	//
	prefetch: true,

	//
	// Display network
	//
	// If set to false Shuo will not expose network settings in login
	// form, limiting client to connect to the configured network.
	//
	// @type     boolean
	// @default  true
	//
	displayNetwork: true,

	//
	// Log settings
	//
	// Logging has to be enabled per user. If enabled, logs will be stored in
	// the '/users/<user>/logs/' folder.
	//
	// @type     object
	// @default  {}
	//
	logs: {
		//
		// Timestamp format
		//
		// @type     string
		// @default  "YYYY-MM-DD HH:mm:ss"
		//
		format: "YYYY-MM-DD HH:mm:ss",

		//
		// Timezone
		//
		// @type     string
		// @default  "UTC+00:00"
		//
		timezone: "UTC+00:00"
	},

	//
	// Default values for the 'Connect' form.
	//
	// @type     object
	// @default  {}
	//
	defaults: {
		//
		// Name
		//
		// @type     string
		// @default  "Freenode"
		//
		name: "PonyChat",

		//
		// Host
		//
		// @type     string
		// @default  "irc.ponychat.net"
		//
		host: process.env["IRCD_PORT_6667_TCP_ADDR"] || "irc.ponychat.net",

		//
		// Port
		//
		// @type     int
		// @default  6697 or 6667 if envvar DONT_USE_SSL is set.
		//
		port: process.env["DONT_USE_SSL"] ? 6667 : 6697,

		//
		// Password
		//
		// @type     string
		// @default  ""
		//
		password: "",

		//
		// Enable TLS/SSL
		//
		// @type     boolean
		// @default  true
		//
		tls: process.env["DONT_USE_SSL"] ? false : true,

		//
		// Nick
		//
		// @type     string
		// @default  "shuo-user"
		//
		nick: process.env["DEFAULT_NICK"] || "shuo-user",

		//
		// Username
		//
		// @type     string
		// @default  "shuo-user"
		//
		username: process.env["DEFAULT_IDENT"] || "shuo-user",

		//
		// Real Name
		//
		// @type     string
		// @default  "Shuo User"
		//
		realname: process.env["DEFAULT_GECOS"] || "Shuo User",

		//
		// Channels
		//
		// @type     string
		// @default  "#foo, #shuo"
		//
		join: process.env["DEFAULT_CHANNELS"] || "#foo, #shuo"
	},

	//
	// Set socket.io transports
	//
	// @type     array
	// @default  ["polling', "websocket"]
	//
	transports: ["polling", "websocket"],

	//
	// Run Shuo with HTTPS support.
	//
	// @type     object
	// @default  {}
	//
	https: {
		//
		// Enable HTTPS support.
		//
		// @type     boolean
		// @default  false
		//
		enable: false,

		//
		// Path to the key.
		//
		// @type     string
		// @example  "sslcert/key.pem"
		// @default  ""
		//
		key: "",

		//
		// Path to the certificate.
		//
		// @type     string
		// @example  "sslcert/key-cert.pem"
		// @default  ""
		//
		certificate: ""
	},

	//
	// Run Shuo with identd support.
	//
	// @type     object
	// @default  {}
	//
	identd: {
		//
		// Run the identd daemon on server start.
		//
		// @type     boolean
		// @default  false
		//
		enable: false,

		//
		// Port to listen for ident requests.
		//
		// @type     int
		// @default  113
		//
		port: 113
	}
};
