

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Cd9TpdlU.js","_app/immutable/chunks/disclose-version.CHxFa33J.js","_app/immutable/chunks/runtime.C0OIpZUk.js"];
export const stylesheets = [];
export const fonts = [];