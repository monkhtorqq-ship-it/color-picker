document.addEventListener('DOMContentLoaded', () => {

  const colorPicker = document.getElementById("colorPicker");
  const hexInput = document.getElementById("hexInput");
  const preview = document.getElementById("preview");
  const rgbValue = document.getElementById("rgbValue");
  const snow = document.getElementsByClassName("snow");

  /* hex to rgb */
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
      : null;
  }

  /* ongoo huwilgah */
  function updateColor(color) {
    preview.style.backgroundColor = color;
    hexInput.value = color;     /* ene mur ajilahgui baina shu */
    snow.style.backgroundColor = color;
    const rgb = hexToRgb(color);
    if (rgb) {
      rgbValue.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    }
  }

  /* ongiig ni ajiglah */
  colorPicker.addEventListener("input", (e) => {
    updateColor(e.target.value);
  });
  hexInput.addEventListener("input", (e) => {
    let hex = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      colorPicker.value = hex;
      updateColor(hex);
    }
  });

  /* hex/rgb huulj awah */
  preview.addEventListener("click", () => {
    let hex = hexInput.value;
    if (hex) {
      navigator.clipboard.writeText(hex)
        .then(() => alert(`Coppied hex: ${hex}`))
        .catch(err => alert("Failed to copy" + err))
    }
  });
  rgbValue.addEventListener("click", () => {
    let rgb = hexToRgb(hexInput.value);
    if (rgb) {
      navigator.clipboard.writeText(`${rgb.r}, ${rgb.g}, ${rgb.b}`)
        .then(() => alert(`${rgb.r}, ${rgb.g}, ${rgb.b}`))
        .catch(err => alert("Failed to copy" + err))
    };
  })

})

const btn = document.getElementById("btn");
const text = document.getElementById("text");

async function fetchMessage() {
  try {
    let res = await fetch('mendchilgee.json');
    if (!res.ok) {
      console.error('HTTP error', res.status);
      return null; // return null if fetch failed
    }
    const data = await res.json();
    return data; // <-- RETURN the JSON data here
  } catch (error) {
    console.error(error.message);
    return null; // return null on error
  }
}
 
let messages = [];

// Fetch JSON and store in messages
fetchMessage().then(data => {
  if (data) {
    messages = data.mendchilgee;
  }
});

btn.addEventListener('click', () => {
  if (messages.length === 0) return;
  const randomIndex = Math.floor(Math.random() * messages.length);
  text.textContent = messages[randomIndex];
});


// nemelt combo 

  const grad1 = document.getElementById("c1");
  const grad2 = document.getElementById("c2");
  const grad3 = document.getElementById("c3");

  const angleRange = document.getElementById("angleRange");
  const angleDisplay = document.getElementById("angleValue");
  const gradientPreview = document.getElementById("preview");
  const cssCode = document.getElementById("cssCode");

  function updateGradient() {
    const angle = angleRange.value;
    angleDisplay.textContent = angle;

    const gradientStr = `linear-gradient(${angle}deg, ${grad1.value}, ${grad2.value}, ${grad3.value})`;
    gradientPreview.style.background = gradientStr;
    cssCode.value = `background: ${gradientStr};`;
  }

  grad1.addEventListener("input", updateGradient);
  grad2.addEventListener("input", updateGradient);
  grad3.addEventListener("input", updateGradient);
  angleRange.addEventListener("input", updateGradient);

  updateGradient();

