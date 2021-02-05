window.addEventListener("load", function() {
    const locale = navigator.languages[0] || navigator.language;

    document.querySelectorAll(".iso8601")
        .forEach(function ($element) {
            const date = new Date($element.innerText);
            if (!isNaN(date.getTime())) {
                $element.innerText = date.toLocaleString(locale);
            }
            $element.classList.add("l10n");
        })
});
