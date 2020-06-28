class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container jumbotron bg-light text-dark text-center my-1">
                <p class="display-4 mb-1">Masakin</p>
                <p class="lead mb-0">Find Food Recipes</p>
            </div>
        `;
    }
}
customElements.define("jumbo-tron", Jumbotron);