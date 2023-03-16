//your JS code here. If required.
	const form = document.querySelector('form');
		const ageInput = document.querySelector('#age');
		const nameInput = document.querySelector('#name');
		const btn = document.querySelector('#btn');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const age = ageInput.value;
			const name = nameInput.value;

			if (!age || !name) {
				alert('Please enter both age and name.');
				return;
			}

			const promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					if (age > 18) {
						resolve({ age, name });
					} else {
						reject({ age, name });
					}
				}, 4000);
			});

			promise
				.then(({ age, name }) => {
					alert(`Welcome, ${name}. You can vote.`);
					return age;
				})
				.then((age) => {
					return { age };
				})
				
				.catch(({ age, name }) => {
					alert(`Oh sorry ${name}. You aren't old enough.`);
				});
		});