class CardImage extends HTMLElement {
    constructor() {
        super();
        this._src = this.getAttribute("src");
        this._alt = this.getAttribute("alt");
        this._shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowDOM.innerHTML = `
        <style>
            .list-img-display{
                background-image: url("${this._src}");
                min-height: 215px;
                height: 100%;
                background-position: center;
                background-size: cover;
            }
            @media screen and (min-width:768px){
                .list-img-display{
                    border-top-left-radius: .25rem;
                    border-bottom-left-radius: .25rem;
                }
            }
            
            @media screen and (max-width:765px){
                .list-img-display{
                    border-top-left-radius: .25rem;
                    border-top-right-radius: .25rem;
                }
            }
        </style>
        <div class="list-img-display" alt="${this._alt}">
        </div>
        `;
    }
}
customElements.define("card-image", CardImage);