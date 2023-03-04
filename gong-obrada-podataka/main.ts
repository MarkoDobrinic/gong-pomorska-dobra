// import * as xlsx from "https://cdn.sheetjs.com/xlsx-0.19.2/package/xlsx.mjs";
import _, { isArray } from "https://cdn.skypack.dev/lodash?dts";
// import { z } from "https://deno.land/x/zod@v3.20.5/mod.ts";
import { writeJson, readJson } from "https://deno.land/x/jsonfile@1.0.0/mod.ts";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";
import { Result } from "./types.ts";

// import * as dateFns from "https://cdn.skypack.dev/date-fns@^2.29.2";

// const zk = (await readJson("zk.json")) as string[];

// const mainBooks = (await readJson("main_books.json")) as {
// 	id: number;
// 	name: string;
// }[];

// const razmak = "%20";
// const t = zk.map((item) => {
// 	const [mainbook1, mainbook2, ulozak] = item.split(",");

// 	const search = ulozak
// 		.replace("ZK-uložak", "")
// 		.trim()
// 		.replaceAll(/\W+/gi, razmak);
// 	const name1 = `${mainbook1},${mainbook2}`;
// 	const name2 = `${mainbook2.trim()}, ${mainbook1}`;

// 	const mainBook = mainBooks.find((mainBook) => {
// 		return mainBook.name.includes(name1) || mainBook.name.includes(name2);
// 	});

// 	if (!mainBook) {
// 		console.log(name1);
// 		console.log(name2);
// 	}

// 	return {
// 		search,
// 		mainBookId: mainBook?.id,
// 	};
// });

// await writeJson("search3.json", t);

// const json = (await readJson("./ready_for_searching.json")) as {
// 	search: string;
// 	mainBookId: number;
// }[];

// const errors: unknown[] = [];
// const results: unknown[] = [];

// const lookup = (mainBookId: number, search: string) => {
// 	const url = `https://oss.uredjenazemlja.hr/oss/public/lr-units/by-parcel-number?mainBookId=${mainBookId}&parcelNumber=&lrUnitNumber=${search}`;

// 	return axiod
// 		.get(url)
// 		.then((res) => results.push(res.data))
// 		.catch((err) => errors.push(err));
// };

// const allSearches = json.map((item) => lookup(item.mainBookId, item.search));

// await Promise.allSettled(allSearches);

// await writeJson("./output/results.json", results);

// await writeJson("./output/errors.json", errors);

// const json = (await readJson("./output/results_flat.json")) as Result[];

// const results: {
// 	[key: string]: any[];
// } = {};

// for (const result of json) {
// 	const name = result.mainBookName;

// 	const possesionSheet = result.possessionSheetA1;

// 	const parcels: any[] = [];

// 	if (possesionSheet?.cadParcels && possesionSheet.cadParcels.length > 0) {
// 		for (const p of possesionSheet.cadParcels) {
// 			parcels.push(p);
// 		}
// 	}

// 	if (possesionSheet?.lrParcels && possesionSheet.lrParcels.length > 0) {
// 		for (const p of possesionSheet.lrParcels) {
// 			parcels.push(p);
// 		}
// 	}

// 	if (possesionSheet?.lrBodies && possesionSheet.lrBodies.length > 0) {
// 		for (const body of possesionSheet.lrBodies) {
// 			if (body?.lrParcels && body.lrParcels.length > 0) {
// 				for (const p of body.lrParcels) {
// 					parcels.push(p);
// 				}
// 			}
// 		}
// 	}

// 	results[name] = parcels;

// 	// `${parcelNumber} ${name}`

// 	// cadParcels -> ima odmah recordse
// 	// lrBodies -> lrParcels -> records
// 	// lrParcels -> records
// }

// await writeJson("./output/results_parcels.json", results);

const json = (await readJson("./output/results_parcels_per_mainbook.json")) as {
	[name: string]: {
		parcelNumber: string;
	}[];
};

const searches = Object.entries(json)
	.map((entry) => {
		const [name, parcels] = entry;

		const results = parcels.map((parcel) => `${parcel.parcelNumber}|${name}`);

		return results;
	})
	.flat();

await writeJson("./output/searches2.json", searches);
