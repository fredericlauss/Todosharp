function enableDragAndDrop(tableId, dotNetReference) {
    const table = document.getElementById(tableId);
    if (!table) return;
    let draggedRow = null;

    table.addEventListener('dragstart', (event) => {
        draggedRow = event.target;
        event.target.style.opacity = 0.5;
    });

    table.addEventListener('dragend', (event) => {
        event.target.style.opacity = '';
    });

    table.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    table.addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.tagName === 'TD' || event.target.tagName === 'TR') {
            const targetRow = event.target.closest('tr');
            if (draggedRow !== targetRow) {
                const parent = table.querySelector('tbody');
                parent.insertBefore(draggedRow, targetRow.nextSibling);

                const rows = Array.from(parent.querySelectorAll('tr'));
                const newOrder = rows.map(row => row.dataset.id);
                dotNetReference.invokeMethodAsync('UpdateOrder', newOrder);
            }
        }
    });
}
