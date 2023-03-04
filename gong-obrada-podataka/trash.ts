// // @deno-types="https://cdn.sheetjs.com/xlsx-0.19.2/package/types/index.d.ts"
// import * as XLSX from "https://cdn.sheetjs.com/xlsx-0.19.2/package/xlsx.mjs";
// import { readJson } from "https://deno.land/x/jsonfile@1.0.0/mod.ts";

// const workbook = XLSX.readFile("./pomorska_dobra.xlsx");

// const sheet = workbook.Sheets[workbook.SheetNames[0]];

// const json = XLSX.utils.sheet_to_json(sheet);

// const key = "ZK-uložak";

// const onlyZK = json.filter((item: any) => key in item);

// const sheet2 = XLSX.utils.json_to_sheet(onlyZK);

// // workbook.Sheets[workbook.SheetNames[0]] = sheet2;

// // XLSX.writeFileXLSX(workbook, "out.xlsx");

// await XLSX.writeFileXLSX(, "out");

// const onlyValues = onlyZK.map((item: any) => item[key]);

// await writeJson("zk.json", onlyValues);

// const variability = Object.entries(dict).reduce(
// 	(newDict: { [key: string]: number }, entry) => {
// 		const [key, value] = entry;

// 		if (!(key in newDict)) {
// 			newDict[key] = value.length;
// 		} else {
// 			newDict[key] = newDict[key] + 1 + value.length;
// 		}

// 		return newDict;
// 	},
// 	{}
// );

// const json = await readJson("./valid_items_mericuh.json");

// const wb = await xlsx.readFile("./ajd.xlsx");

// const sheet = xlsx.utils.json_to_sheet(json);

// wb.Sheets[wb.SheetNames[0]] = sheet;

// await xlsx.writeFileXLSX(wb, "valid_items.xlsx");

// // const decoder = new TextDecoder();

// // const file = await Deno.readFile("./rk_svi_podaci.txt");

// // const contents = decoder.decode(file);

// // // const LINE_REGEX = /;{2,}/g;
// // // const DELIMITER_REGEX = /;{1}/g;

// // // const dict: {
// // // 	[key: number]: [string[]];
// // // } = {};

// // // for (const line of contents.split(LINE_REGEX)) {
// // // 	const items = line
// // // 		.trim()
// // // 		.split(DELIMITER_REGEX)
// // // 		.filter((item) => !_.isEmpty(item))
// // // 		.map((item) => item.trim());

// // // 	const len = items.length;

// // // 	if (!dict[len]) {
// // // 		dict[len] = [items];
// // // 	} else {
// // // 		dict[len].push(items);
// // // 	}
// // // }

// // const lines = contents.split("\n").reduce((lines: string[], entry) => {
// // 	const value = entry.trim().slice(-1);

// // 	if (value === ";") {
// // 		lines.push(entry.trim());
// // 	}

// // 	return lines;
// // }, []);

// // const DELIMITER = /\;+/g;

// // const items = lines.map((line) =>
// // 	line
// // 		.split(DELIMITER)
// // 		.map((item) => item.trim())
// // 		.filter((item) => !_.isEmpty(item))
// // );

// // // await writeJson("items.json", items);

// // // const distribution = items.reduce(
// // // 	(dict: { [key: number]: [string[]] }, items) => {
// // // 		const len = items.length;

// // // 		if (dict[len]) {
// // // 			dict[len].push(items);
// // // 		} else {
// // // 			dict[len] = [items];
// // // 		}

// // // 		return dict;
// // // 	},
// // // 	{}
// // // );

// // // await writeJson(
// // // 	"./items_length_distribution.json",
// // // 	Object.entries(distribution).reduce(
// // // 		(
// // // 			newDict: {
// // // 				[key: number]: number;
// // // 			},
// // // 			entry
// // // 		) => {
// // // 			const [len, values] = entry;

// // // 			newDict[Number(len)] = values.length;

// // // 			return newDict;
// // // 		},
// // // 		{}
// // // 	)
// // // );

// // const oibValidation = z
// // 	.string()
// // 	.length(11)
// // 	.refine((str) => {
// // 		return str.split("").every((char) => {
// // 			return !isNaN(Number(char));
// // 		});
// // 	});

// // const dateValidation = z.date();

// // // const fakeDate = "01.01.2011.";

// // // const res = dateValidation.parse(dateFns.parseISO(fakeDate));

// // // const d = new Date(fakeDate);

// // // const newDate = dateFns.addHours(d, 1);

// // // console.log(dateValidation.parse(newDate));

// // // console.log(res);

// // const validationSchema = z.array(z.string()).refine((entry) => {
// // 	const oibs = [];
// // 	const dates = [];

// // 	for (const str of entry) {
// // 		if (oibValidation.safeParse(str).success) {
// // 			oibs.push(str);
// // 			continue;
// // 		}

// // 		try {
// // 			const [day, month, year] = str.split(".").filter(Boolean);

// // 			const normalDateString = `${month}/${day}/${year}`;

// // 			const d = new Date(normalDateString);

// // 			if (dateValidation.safeParse(d).success) {
// // 				dates.push(str);
// // 			}
// // 		} catch (_error) {
// // 			continue;
// // 		}
// // 	}

// // 	if (oibs.length === 2 && dates.length === 2) {
// // 		// if (oibs.length === 2) {
// // 		return true;
// // 	}
// // 	// console.log(oibs.length, dates.length);

// // 	return false;
// // });

// // const allValues = Object.values(items);

// // // const allLength = allValues.length;

// // // console.log(allLength);

// // // const [val] = allValues;

// // // validationSchema.parse(val);

// // const validValues = allValues.filter((val) => {
// // 	try {
// // 		validationSchema.parse(val);

// // 		return true;
// // 	} catch (_error) {
// // 		return false;
// // 	}
// // });

// // const invalidValues = allValues.filter((val) => {
// // 	try {
// // 		validationSchema.parse(val);

// // 		return false;
// // 	} catch (_error) {
// // 		// console.error(_error);
// // 		return true;
// // 	}
// // });

// // // console.log(validValues.length);

// // // await writeJson("invalid_items.json", invalidValues);

// // // await writeJson("valid_items.json", validValues);

// // const invalidValuesWithValidDates = invalidValues.map((entry) => {
// // 	const newEntry = [];

// // 	for (let item of entry) {
// // 		try {
// // 			const [day, month, year] = item.split(".").filter(Boolean);

// // 			const normalDateString = `${month}/${day}/${year}`;

// // 			const d = new Date(normalDateString);

// // 			if (dateValidation.safeParse(d).success) {
// // 				item = normalDateString;
// // 			}
// // 		} catch (_error) {
// // 			// do nothing
// // 		}

// // 		newEntry.push(item);
// // 	}

// // 	return newEntry;
// // });

// // const validValuesWithValidDates = validValues.map((entry) => {
// // 	const newEntry = [];

// // 	for (let item of entry) {
// // 		try {
// // 			const [day, month, year] = item.split(".").filter(Boolean);

// // 			const normalDateString = `${month}/${day}/${year}`;

// // 			const d = new Date(normalDateString);

// // 			if (dateValidation.safeParse(d).success) {
// // 				item = normalDateString;
// // 			}
// // 		} catch (_error) {
// // 			// do nothing
// // 		}

// // 		newEntry.push(item);
// // 	}

// // 	return newEntry;
// // });

// // // await writeJson("valid_items_mericuh.json", validValuesWithValidDates);

// // const active = validValuesWithValidDates.filter((entry) => {
// // 	const dates = [];

// // 	for (const item of entry) {
// // 		try {
// // 			const d = new Date(item);

// // 			if (dateValidation.safeParse(d).success) {
// // 				dates.push(d);
// // 			}
// // 		} catch (_error) {
// // 			// do nothing
// // 		}
// // 	}

// // 	const isActive =
// // 		dateFns.isBefore(dates[0], new Date(2017, 11, 31)) &&
// // 		dateFns.isAfter(dates[1], new Date(2017, 11, 31));

// // 	return isActive;
// // });

// // const activeInvalid = invalidValuesWithValidDates.filter((entry) => {
// // 	const dates = [];

// // 	for (const item of entry) {
// // 		try {
// // 			const d = new Date(item);

// // 			if (dateValidation.safeParse(d).success) {
// // 				dates.push(d);
// // 			}
// // 		} catch (_error) {
// // 			// do nothing
// // 		}
// // 	}

// // 	const isActive =
// // 		dateFns.isBefore(dates[0], new Date(2017, 11, 31)) &&
// // 		dateFns.isAfter(dates[1], new Date(2017, 11, 31));

// // 	return isActive;
// // });

// // // console.log(active.length);

// // const pomorskaDobra = active.filter((entry) => {
// // 	const pomorskoRegex = /pomorsko.* dobr.?/g;

// // 	for (const item of entry) {
// // 		if (pomorskoRegex.test(item)) return true;
// // 	}

// // 	return false;
// // });

// // const invalidPomorskaDobra = activeInvalid.filter((entry) => {
// // 	const pomorskoRegex = /pomorsko.* dobr.?/g;

// // 	for (const item of entry) {
// // 		if (pomorskoRegex.test(item)) return true;
// // 	}

// // 	return false;
// // });

// // console.log(pomorskaDobra.length);
// // console.log(invalidPomorskaDobra.length);
