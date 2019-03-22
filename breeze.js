const columnsOutput = document.getElementById('columns');

const addColumnBtn = document.getElementById('addColumn');
const deleteBtn = document.getElementById('removeColumn');

addColumnBtn.addEventListener('click', (e) => {
   const noneColumns = document.getElementsByName('none');
   let noneColumnsArray = [];

   for (let i = 0, length = noneColumns.length; i < length; i++) {
      if (noneColumns[i].nodeType === 1) {
         noneColumnsArray.push(noneColumns[i]);
      }
   }

   if(noneColumnsArray[0]) {
      noneColumnsArray[0].setAttribute('style', 'display: block;');
   } else {
      alert('Don\'t add more than 12 columns');
   }
   
   noneColumnsArray[0].setAttribute('name', 'block');
   noneColumnsArray.splice(0, 1);
})

deleteBtn.addEventListener('click', (e) => {
   let blockColumns = document.getElementsByName('block');
   let blockColumnsArray = [];

   for (let i = 0, length = blockColumns.length; i < length; i++) {
      if (blockColumns[i].nodeType === 1) {
         blockColumnsArray.push(blockColumns[i]);
      }
   }
   if (blockColumnsArray.length === 1) {
      // Do nothing
   } else {
      blockColumnsArray = blockColumnsArray.reverse();
      blockColumnsArray[0].setAttribute('style', 'display: none;');
      blockColumnsArray[0].setAttribute('name', 'none');

      noneColumnsArray.push(blockColumnsArray[0]);
   }

})

let menu = document.getElementById('mobileMenu');

document.querySelector('.menu-click').addEventListener('click', function(e) {
   e.preventDefault();
   if (menu.classList.contains('unclicked')) {
      menu.classList.add('clicked');
      menu.classList.remove('unclicked');
   } else {
      menu.classList.add('unclicked');
      menu.classList.remove('clicked');
   }
})
