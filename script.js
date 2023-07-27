javascript: (() => {
  const modal = document.getElementById("anthonytedja-modal");
  const form = document.getElementById("anthonytedja-form");
  const toggle = document.getElementById("anthonytedja-toggle");
  const filter = document.getElementById("anthonytedja-filter");
  const cancel = document.getElementById("anthonytedja-close");
  const submit = document.getElementById("anthonytedja-confirm");

  function hide() {
    modal.classList.add("hide");
    modal.addEventListener("webkitAnimationEnd", () => {
      modal.close();
      modal.parentNode?.removeChild(modal);
    });
  }

  function check(checkboxes) {
    const len = checkboxes.length;
    for (var x = 0; x < len; x++) {
      checkboxes[x].click();
    }
    checkboxes[len - 1]?.scrollIntoView();
  }

  async function prepare() {
    submit.disabled = true;
    cancel.disabled = true;
    filter.disabled = true;
    toggle.disabled = true;
    submit.innerHTML = "Loading...";
    return;
  }

  toggle.addEventListener("keypress", (e) => {
    e.preventDefault();
    if (e.which === 13) toggle.checked ^= 1;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (e.submitter === submit) {
      await prepare().then(() => {
        const checkboxes = document.querySelectorAll(
          `input[name="viewed"]${
            toggle.checked ? ":not([checked]" : "[checked]"
          }${filter.value ? `[id^="${filter.value.trim()}"]` : ""}`
        );
        check(checkboxes);
      });
    }
    hide();
  });

  modal.showModal();
})();
