export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/mother.png","images/snipe.png","images/snipe.png:Zone.Identifier","images/war.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7c6f06f2.js","app":"_app/immutable/entry/app.bfeed3c3.js","imports":["_app/immutable/entry/start.7c6f06f2.js","_app/immutable/chunks/index.758fa85b.js","_app/immutable/chunks/singletons.037e4fe5.js","_app/immutable/entry/app.bfeed3c3.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/index.758fa85b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();