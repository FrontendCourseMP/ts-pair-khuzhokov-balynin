import { getInitials } from "./getInitals.js";

const form = document.getElementById("task-1");
if (!form || !(form instanceof HTMLFormElement)) {
  throw new Error("form `task-1` not found");
}

const output = form.querySelector("#output");
if (!output) {
  throw new Error("output not found");
}

const onSubmit = (event: SubmitEvent) => {
  event.preventDefault();
  const formData = new FormData(form);
  try {
    const initials = getInitials(formData.get("fullName")?.toString() || "");
    output.innerHTML = initials;
    output.classList.remove("red");
  } catch (error) {
    output.classList.add("red");
    if (error instanceof Error) {
      output.innerHTML = error.message;
    } else {
      output.innerHTML = `uknown error`;
    }
  }
};

form.addEventListener("submit", onSubmit);
