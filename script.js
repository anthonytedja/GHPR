javascript: (() => {
  const modal = document.getElementById("anthonytedja-modal");
  modal.showModal();

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

  function check() {
    const checkboxes = document.getElementsByName("viewed");
    const len = checkboxes.length;
    for (var x = 0; x < len; x++) {
      if (checkboxes[x].checked !== toggle.checked) {
        checkboxes[x].click();
      }
    }
    checkboxes[len - 1]?.scrollIntoView();
  }

  function checkFilter(filter) {
    const checkboxes = document.getElementsByName("viewed");
    const len = checkboxes.length;
    for (var x = 0; x < len; x++) {
      if (
        checkboxes[x].checked !== toggle.checked &&
        checkboxes[x].id.toLowerCase().startsWith(filter.toLowerCase())
      ) {
        checkboxes[x].click();
      }
    }
    checkboxes[len - 1]?.scrollIntoView();
  }

  async function prepare() {
    submit.textContent = "Loading...";
    submit.disabled = true;
    cancel.disabled = true;
    filter.disabled = true;
    toggle.disabled = true;
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
        if (filter.value) checkFilter(filter.value);
        else check();
      });
    }
    hide();
  });
})();
