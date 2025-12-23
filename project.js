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