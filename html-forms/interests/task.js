let checkbox = document.querySelectorAll('.interest__check');

for (let element of checkbox) {
	element.addEventListener('change', () => {

		let parent = element.closest('li');

		let children = Array.from(parent.children);

		let firstbox = parent.children[0];
		firstbox = firstbox.children[0]

		for (let element of children) {

			let needElement = Array.from(element.querySelectorAll('.interest__check'));
			console.log(needElement);

			if (needElement.length > 1) {

				for (let element of needElement) {

					if (firstbox.checked) {
						element.checked = true;
					} else {
						element.checked = false;
					}
				}

			}

		}
	})
}