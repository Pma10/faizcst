export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.80REorF8.js","app":"_app/immutable/entry/app.CuWdRAre.js","imports":["_app/immutable/entry/start.80REorF8.js","_app/immutable/chunks/entry.DBtVxb6V.js","_app/immutable/chunks/runtime.C0OIpZUk.js","_app/immutable/chunks/index.B3bRtxDF.js","_app/immutable/entry/app.CuWdRAre.js","_app/immutable/chunks/runtime.C0OIpZUk.js","_app/immutable/chunks/store.twnAGfoI.js","_app/immutable/chunks/disclose-version.CHxFa33J.js","_app/immutable/chunks/index-client.Dx5syebS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
