// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;


import { getTableLayananOnline } from '$lib/aktivasiLayananOnline';

export async function load() {
	return {
        TableDatasLayananOnline : await getTableLayananOnline()
	};
}