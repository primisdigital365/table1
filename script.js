document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
            let key = event.key.toLowerCase(); // Normalize the key input

            switch (key) {
                case "s":
                    event.preventDefault();
                    triggerClick('input[name="insert_data"]');
                    break;
                case "d":
                    event.preventDefault();
                    triggerClick('input[name="remove_column"]');
                    break;
                case "n":
                    event.preventDefault();
                    triggerClick('input[name="create_table"]');
                    break;
            }
        }
    });

    function triggerClick(selector) {
        let button = document.querySelector(selector);
        if (button) {
            button.click();
        } else {
            console.warn("Button not found:", selector);
        }
    }
});


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        switch (event.key.toLowerCase()) {
            case "s": // Ctrl + S -> Insert Data
                event.preventDefault();
                let insertButton = document.querySelector("input[name='insert_data']");
                if (insertButton) insertButton.click();
                break;
            case "d": // Ctrl + D -> Delete Table
                event.preventDefault();
                let deleteButton = document.querySelector("input[name='delete_table_submit']");
                if (deleteButton) deleteButton.click();
                break;
            case "n": // Ctrl + N -> Create Table
                event.preventDefault();
                let createButton = document.querySelector("input[name='create_table']");
                if (createButton) createButton.click();
                break;
        }
    }
});





