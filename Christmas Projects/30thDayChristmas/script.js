const ornaments = document.querySelectorAll('.ornament');
const treeContainer = document.querySelector('.tree-container');

ornaments.forEach(ornament => {
    ornament.addEventListener('dragstart', dragStart);
    ornament.addEventListener('dragend', dragEnd);
});

treeContainer.addEventListener('dragover', dragOver);
treeContainer.addEventListener('drop',drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragEnd(e) {
    e.target.style.display = 'block';
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const ornament = document.getElementById(id);
    const rect = treeContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - ornament.offsetWidth / 2;
    const y = e.clientY - rect.top - ornament.offsetHeight / 2;
    ornament.style.left = `${x}px`;
    ornament.style.top = `${y}px`;
    treeContainer.appendChild(ornament);
}

