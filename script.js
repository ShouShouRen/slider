// document.getElementById('next').onclick = function () {
//   let lists = document.querySelectorAll('.item');
//   document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function () {
//   let lists = document.querySelectorAll('.item');
//   document.getElementById('slide').prepend(lists[lists.length - 1]);
// }

// let autoPlayInterval;

// function startAutoPlay() {
//   autoPlayInterval = setInterval(function () {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
//   }, 4500);
// }

// startAutoPlay();

// function stopAutoPlay() {
//   clearInterval(autoPlayInterval);
// }


// // stopAutoPlay();



let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }, 4500);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

document.getElementById('next').onclick = function () {
  stopAutoPlay();
  setTimeout(function () {
    startAutoPlay();
  }, 3000);
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
  stopAutoPlay();
  setTimeout(function () {
    startAutoPlay();
  }, 3000);
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};

startAutoPlay();
