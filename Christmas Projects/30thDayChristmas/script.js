const ornaments = document.querySelectorAll('.ornament');
const treeContainer = document.querySelector('.tree-container');

ornaments.forEach(ornament => {
    ornament.addEventListener('dragstart', dragStart);
    ornament.addEventListener('dragend', dragEnd);
});

treeContainer.addEventListener('dragover', dragOver);
treeContainer.addEventListener('drop',drop);