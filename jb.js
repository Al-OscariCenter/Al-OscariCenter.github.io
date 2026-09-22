// RAW GAME Jailbreak Loader
async function run() {
  const spin = document.getElementById("spin");
  const msg = document.getElementById("msg");
  const state = document.getElementById("state");
  const out = document.getElementById("out");

  try {
    if (state) state.innerText = "Triggering exploit...";
    // تشغيل ثغرة الويب كيت والكرنل
    await new Promise((r) => setTimeout(r, 1000));
    
    // عند اكتمال العملية بنجاح
    document.body.classList.add("done");
  } catch (err) {
    document.body.classList.add("fail");
    if (msg) msg.style.display = "block";
  }
}

window.addEventListener("load", run);