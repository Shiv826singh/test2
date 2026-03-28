let count = 0;

// Elements
const countEl = document.getElementById("count");
const errorEl = document.getElementById("error");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");

// Update UI
function updateUI() {
  countEl.innerHTML = count;

  // ✅ Show clear only if count > 1 (as required)
  if (count > 1) {
    clearBtn.style.display = "block";
  } else {
    clearBtn.style.display = "none";
  }
}

// Increment
incBtn.addEventListener("click", function () {
  count++;
  errorEl.style.display = "none";
  updateUI();
});

// Decrement
decBtn.addEventListener("click", function () {
  if (count === 0) {
    errorEl.style.display = "block";
  } else {
    count--;
    errorEl.style.display = "none";
    updateUI();
  }
});

// Clear
clearBtn.addEventListener("click", function () {
  count = 0;
  errorEl.style.display = "none";
  updateUI();
});

// Initial render
updateUI();
