document.addEventListener('DOMContentLoaded', () => {

  const total = 200;
  function randomRange(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  
  for (let i = 0; i < total; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snow";
    
    const x = Math.random() * 100;
    const scale = Math.random();
    const duration = randomRange(10, 30);
    
    snowflake.style.left = `${x}vw`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.setProperty("--scale", scale);
    
    document.body.appendChild(snowflake);
  }

  /* ongiig ni ajiglah */
  colorPicker.addEventListener("input", (e) => {
    disco(e.target.value);
  });
  hexInput.addEventListener("input", (e) => {
    let hex = e.target.value;
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      colorPicker.value = hex;
      disco(hex);
    }
  });

  /* tsasaa holih */
  const tsas_array = Array.from(document.querySelectorAll(".snow"));
  for (let i = tsas_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    tsas_array[i], tsas_array[j] = tsas_array[j], tsas_array[i];
  }
  const tsasnuud = tsas_array.slice(0, Math.floor(tsas_array.length / 2));    /* taliig ni songoh */

  /* ongiig ni oorchloh */
  function disco(color) {
    tsasnuud.forEach(snow => {
      snow.style.backgroundColor = color;
    })
  }
})

/* ⠀⠀⠀⠀⠀⢀⣤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡼⠋⠀⣀⠄⡂⠍⣀⣒⣒⠂⠀⠬⠤⠤⠬⠍⠉⠝⠲⣄⡀⠀⠀
⠀⠀⠀⢀⡾⠁⠀⠊⢔⠕⠈⣀⣀⡀⠈⠆⠀⠀⠀⡍⠁⠀⠁⢂⠀⠈⣷⠀⠀
⠀⠀⣠⣾⠥⠀⠀⣠⢠⣞⣿⣿⣿⣉⠳⣄⠀⠀⣀⣤⣶⣶⣶⡄⠀⠀⣘⢦⡀     i have no idea how any of this works
⢀⡞⡍⣠⠞⢋⡛⠶⠤⣤⠴⠚⠀⠈⠙⠁⠀⠀⢹⡏⠁⠀⣀⣠⠤⢤⡕⠱⣷
⠘⡇⠇⣯⠤⢾⡙⠲⢤⣀⡀⠤⠀⢲⡖⣂⣀⠀⠀⢙⣶⣄⠈⠉⣸⡄⠠⣠⡿
⠀⠹⣜⡪⠀⠈⢷⣦⣬⣏⠉⠛⠲⣮⣧⣁⣀⣀⠶⠞⢁⣀⣨⢶⢿⣧⠉⡼⠁
⠀⠀⠈⢷⡀⠀⠀⠳⣌⡟⠻⠷⣶⣧⣀⣀⣹⣉⣉⣿⣉⣉⣇⣼⣾⣿⠀⡇⠀
⠀⠀⠀⠈⢳⡄⠀⠀⠘⠳⣄⡀⡼⠈⠉⠛⡿⠿⠿⡿⠿⣿⢿⣿⣿⡇⠀⡇⠀
⠀⠀⠀⠀⠀⠙⢦⣕⠠⣒⠌⡙⠓⠶⠤⣤⣧⣀⣸⣇⣴⣧⠾⠾⠋⠀⠀⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣭⣒⠩⠖⢠⣤⠄⠀⠀⠀⠀⠀⠠⠔⠁⡰⠀⣧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⢤⣀⣀⠉⠉⠀⠀⠀⠀⠀⠁⠀⣠⠏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠒⠲⠶⠤⠴⠒⠚⠁      */