class SearchBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card mb-3" id="searchElement">

            <ul class="card-header nav nav-tabs pt-3 pb-0 mb-3 justify-content-center bg-light" role="tablist"
                id="searchPill">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" role="tab" data-toggle="pill" href="#searchByName"
                        aria-selected="true">Search By Name</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" role="tab" data-toggle="pill" href="#searchByCategory" aria-selected="false">By
                        Category</a>
                </li>
            </ul>

            <div class="card-body">
                <div class="tab-content">
                    <div class="tab-pane fade show active form-group mb-0" id="searchByName" role="tabpanel">
                        <div class="input-group">
                            <input id="searchInput" class="form-control" type="text" placeholder="Meal Name">
                            <div class="input-group-append">
                                <button class="btn btn-info" id="searchButton">Find out</button>
                            </div>
                        </div>
                        <small class="form-text" id="noticeTab1"></small>
                    </div>

                    <div class="tab-pane fade form-group mb-0" id="searchByCategory" role="tabpanel">
                        <div class="input-group">
                            <select class="custom-select" id="categoryList">
                                <option selected>Category...</option>
                            </select>
                            <div class="input-group-append">
                                <button class="btn btn-info" id="searchButtonCategory">Show</button>
                            </div>
                        </div>
                        <small class="form-text" id="noticeTab2"></small>
                    </div>
                </div>

            </div>
        </div>
        `;
    }
}

customElements.define("search-bar", SearchBar);