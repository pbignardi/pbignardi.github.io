if (navigator.clipboard) {
  document.querySelectorAll("pre:has(code)").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.setAttribute("aria-label", "Copy code");

    btn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(pre.querySelector("code").innerText);
      btn.classList.add("copied");
      setTimeout(() => btn.classList.remove("copied"), 700);
    });

    pre.append(btn);
  });
}