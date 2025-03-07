import './hello-world-button.scss';

class helloWorldButton {
	bClass = 'hello-world-button';
	render() {
		const button = document.createElement('button');
		const body = document.querySelector('body');
		button.innerHTML = 'Hello world';
		button.onclick = function() {
			const p = document.createElement('p');
			p.innerHTML = 'Hello world';
			p.classList.add('hello-world-text');
			body.appendChild(p);
		};
		button.classList.add(this.bClass);
		body.appendChild(button);
	}
}

export default helloWorldButton;
