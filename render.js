/**
 * Renders the entire Kanban board by clearing the container and 
 * appending fresh column elements.
 */
function renderBoard() {
    var a = document.getElementById("board");
    if (!a) return;
    
    a.innerHTML = "";
    AppState.columns.forEach(function (b) {
        var c = createColumnElement(b);
        a.appendChild(c);
    });
    
    // Maintain structural spacing
    a.appendChild(document.createElement("div"));
    updateActivityBadge();
}

/**
 * Creates a column DOM element. 
 * Note: Individual click listeners have been removed in favor of delegation.
 */
function createColumnElement(a) {
    var b = document.createElement("div");
    b.className = "column", b.dataset.id = a.id;
    var c = getCardsForColumn(a.id),
        d = c.filter(function (b) { 
            return matchesSearch(b, AppState.searchQuery);
        });

    b.innerHTML = `
        <div class="column-header">
            <div class="column-title-group">
                <div class="column-color-dot" style="background: ${a.color}"></div>
                <h3 class="column-title">${escapeHtml(a.title)}</h3>
                <span class="column-count">${c.length}</span>
            </div>
            <div class="column-actions">
                <button class="column-action-btn edit-col" data-col-id="${a.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                </button>
                <button class="column-action-btn delete-col" data-col-id="${a.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="card-list" data-col-id="${a.id}"></div>
        <button class="add-card-btn" data-col-id="${a.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>Add Card
        </button>`;

    var list = b.querySelector(".card-list");
    if (0 === d.length && !AppState.searchQuery) {
        list.innerHTML = `
            <div class="empty-state">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                    <line x1="9" y1="17" x2="13" y2="17"></line>
                </svg>
                <p>No cards yet</p>
            </div>`;
    } else {
        d.forEach(function (card) {
            list.appendChild(createCardElement(card));
        });
    }
    return b;
}

/**
 * Creates a card DOM element.
 * Drag events are initialized here, but click events are handled via delegation.
 */
function createCardElement(a) {
    var b = document.createElement("div");
    b.className = "card", b.dataset.id = a.id, b.draggable = !0;
    b.innerHTML = `
        <div class="card-color-bar" style="background: ${a.color}"></div>
        <div class="card-content">
            <h4 class="card-title">${escapeHtml(a.title)}</h4>
            <p class="card-description">${escapeHtml(a.description)}</p>
            <div class="card-meta">
                <div class="card-badges">
                    <span class="priority-badge ${a.priority}">${a.priority}</span>
                </div>
                <div class="card-assignee">
                    <div class="assignee-avatar">${getInitials(a.assignee)}</div>
                    <span>${escapeHtml(a.assignee)}</span>
                </div>
            </div>
        </div>
        <div class="card-actions">
            <button class="card-action-btn edit-card" data-card-id="${a.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
            </button>
            <button class="card-action-btn delete-card" data-card-id="${a.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>`;
    
    if (typeof initDragEvent === "function") initDragEvent(b);
    return b;
}

/**
 * FIXED: Renders activity items in reverse chronological order.
 * This ensures the most recent actions appear at the top of the log.
 */
function renderActivityLog() {
    var a = document.getElementById("activityList");
    if (a) {
        a.innerHTML = "";
        // Use spread to avoid mutating the original AppState array
        [...AppState.activityLog].reverse().forEach(function (b) {
            var c = document.createElement("li");
            c.className = "activity-item", c.innerHTML = `
                <div class="activity-dot"></div>
                <div class="activity-content">
                    <div class="activity-text">${b.text}</div>
                    <div class="activity-time">${formatTime(b.timestamp)}</div>
                </div>`;
            a.appendChild(c);
        });
    }
}

/**
 * NEW: Centralized Event Delegation to prevent memory leaks.
 * Attach this once in app.js inside initApp().
 */
function setupBoardEventDelegation() {
    var board = document.getElementById("board");
    if (!board) return;

    board.addEventListener("click", function (e) {
        var target = e.target;

        // 1. Open Card (Clicking card body)
        var card = target.closest(".card");
        if (card && !target.closest(".card-action-btn")) {
            openCardModal(card.dataset.id);
            return;
        }

        // 2. Edit Card Button
        var editCardBtn = target.closest(".edit-card");
        if (editCardBtn) {
            openCardModal(editCardBtn.dataset.cardId);
            return;
        }

        // 3. Delete Card Button
        var deleteCardBtn = target.closest(".delete-card");
        if (deleteCardBtn) {
            var id = deleteCardBtn.dataset.cardId;
            var title = AppState.cards[id] ? AppState.cards[id].title : "this card";
            confirmDelete("Are you sure you want to delete this card?", function () {
                delete AppState.cards[id];
                addActivity("Deleted card: " + title);
                autoSave();
                renderBoard();
            });
            return;
        }

        // 4. Add Card Button
        var addCardBtn = target.closest(".add-card-btn");
        if (addCardBtn) {
            openCardModal(null, addCardBtn.dataset.colId);
            return;
        }

        // 5. Edit Column Button
        var editColBtn = target.closest(".edit-col");
        if (editColBtn) {
            openColumnModal(editColBtn.dataset.colId);
            return;
        }

        // 6. Delete Column Button
        var deleteColBtn = target.closest(".delete-col");
        if (deleteColBtn) {
            var colId = deleteColBtn.dataset.colId;
            confirmDelete("Are you sure you want to delete this column and all its cards?", function () {
                var cards = getCardsForColumn(colId);
                cards.forEach(function (c) { delete AppState.cards[c.id] });
                AppState.columns = AppState.columns.filter(function (col) { return col.id !== colId });
                addActivity("Deleted column");
                autoSave();
                renderBoard();
            });
        }
    });
}