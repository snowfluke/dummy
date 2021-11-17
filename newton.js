// Awal Ariansyah

const soal1 = {
	f: (x) => Math.pow(x, 3) + 2 * Math.pow(x, 2) + 10 * x - 20,
	f_: (x) => 3 * Math.pow(x, 2) + 4 * x + 10,
	koma: 1,
};

const soal2 = {
	f: (x) => Math.pow(x, 3) - 7 * x + 1,
	f_: (x) => 3 * Math.pow(x, 2) - 7,
	koma: 6,
};

const hitung = ({ f, f_, koma }) => {
	const epsilon = 0.00001;
	const pembulatan = epsilon.toString().split(".")[1].length + koma;
	const bulatkan = (x) => x.toFixed(pembulatan);
	const newton = (x, fx, f_x) => x - fx / f_x;
	const x0 = 1;

	let res = [];
	let tmpX0 = x0;
	for (let i = 0; i < 10; i++) {
		let obj = {};
		obj.x1 = tmpX0;
		obj["f(x1)"] = f(obj.x1);
		let f_x = f_(obj.x1);
		obj.x2 = newton(obj.x1, obj["f(x1)"], f_x);
		obj["|f(x2)|"] = Math.abs(f(obj.x2));

		res.push(obj);
		res[i] = {
			x1: bulatkan(obj.x1),
			"f(x1)": bulatkan(obj["f(x1)"]),
			x2: bulatkan(obj.x2),
			"|f(x2)|": bulatkan(obj["|f(x2)|"]),
		};
		tmpX0 = obj.x2;
		obj["f(x1)"] = f(obj.x2);

		if (obj["|f(x2)|"] < epsilon) {
			break;
		}
	}
	console.table(res);
};

hitung(soal2);
hitung(soal1);
