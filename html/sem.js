function findAddress() {
    const M = Number(document.getElementById("entrance").value);
    const O = Number(document.getElementById("floor").value);
    const K = Number(document.getElementById("door").value);
    const N = Number(document.getElementById("number").value);
  
    const resultDiv = document.getElementById("result");
  
    const total = M * O * K;
  
    if (N < 1 || N > total) {
      resultDiv.textContent = "Таны хайсан тоот олдсонгүй";
      return;
    }
  
    const perEntrance = O * K;
    const entrance = Math.ceil(N / perEntrance);
    const remainder = (N - 1) % perEntrance;
    const floor = Math.floor(remainder / K) + 1;
    const door = (remainder % K) + 1;
  
    resultDiv.textContent =
      `${N} тоот нь ${entrance}-р орц, ${floor}-р давхар, ${door}-р хаалга байна.`;
  }

// sem2

  let count = 0

  function updateCount() {
    document.getElementById("counter-value").textContent =count;
  }

  function decrement() {
    count--;
    updateCount();
   }

   function resetCounter () {
    count = 0;
    updateCount();
   }

   function increment() {
    count ++;
    updateCount();
   }

// sem3

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
    });
