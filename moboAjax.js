let inputList = ["Matherboard", "Prosesor", "Casing"];

$(document).ready(function () {
	$("input[type=text]").keyup(function () {
		let id = this.id;
		if (!inputList.includes(id)) return;
		console.log('debug 1')
		console.log('id:', id)
		let idAutoComplete = "#L" + id;
		let idUrl = "ajax/ajaxrakitan/" + id + ".php";

		var query = $(this).val();
		if (query != "") {
			$.ajax({
				url: idUrl,
				method: "POST",
				data: { query: query },
				success: function (data) {
					console.log('debug 1a')
					$(idAutoComplete).fadeIn("fast");
					$(idAutoComplete).html(data);
				},
			});
		}
	});

	 $(document).on('click', '#hvr', function () {
		console.log('debug 2')
		let className = this.className;

		let id = "#" + className;
		let idHasil = "#h" + className;
		let idAutoComplete = "#L" + className;
		console.log('debug 2a')
		
		$(id).val($(this).children("#data-nama").text());
		$(idHasil).text($(this).children("#data-harga2").text());

		console.log("Atas==========================");
		console.log("Nilai total sebelum di klik:", total);

		total = total + parseInt($(this).children("#data-harga").text());

		console.log("Nilai total setelah di klik:", total);

		let formattedTotal = total.toLocaleString("id");
		$("#jmlttl").val(formattedTotal);

		$(idAutoComplete).fadeOut("fast");
	});

	// Event Baru
	$("input[type=text]").change(function () {
		let id = this.id;

		console.log('debug 3')
		let curVal = this.value;
		if (curVal != "") return;
		if (!inputList.includes(id)) return;
		
		let idHasil = "#h" + id;

		console.log("Bawah==========================");
		console.log("Nilai Total sebelum dihapus:", total);
		console.log("Nilai mobo:", curVal);

		total = total - parseInt($(idHasil).text().replace(/,/g, ""));
		$(idHasil).text("");

		//jadiin titik titik
		let formattedTotal = total.toLocaleString("id");
		$("#jmlttl").val(formattedTotal);

		console.log("Nilai Total setelah dihapus:", total);
	});
});
