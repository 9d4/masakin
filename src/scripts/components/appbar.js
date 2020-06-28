import app_icon from '../variables.js';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-light bg-light mb-2">
        <div class="container">
            <a class="navbar-brand nav-link font-weight-bold pl-0" href="#">
            <img width="27" src="${app_icon}">    
            Masakin
            </a>
        </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);