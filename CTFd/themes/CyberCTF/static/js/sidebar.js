document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggle = document.getElementById("sidebarToggle");
    const main = document.querySelector("main");

    // Восстанавливаем состояние
    if (localStorage.getItem("sidebar") === "closed") {
        sidebar.classList.add("closed");
        main.classList.add("full");
    }

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
        main.classList.toggle("full");

        if (sidebar.classList.contains("closed")) {
            localStorage.setItem("sidebar", "closed");
        } else {
            localStorage.setItem("sidebar", "open");
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {

//     function initSidebar() {
//         const sidebar = document.getElementById("sidebar");
//         const toggle = document.getElementById("sidebarToggle");
//         const main = document.querySelector("main");

//         if (!sidebar || !toggle || !main) {
//             console.warn("Sidebar elements not found");
//             return;
//         }

//         // восстановление состояния
//         if (localStorage.getItem("sidebar") === "closed") {
//             sidebar.classList.add("closed");
//             main.classList.add("full");
//         }

//         toggle.onclick = function () {
//             sidebar.classList.toggle("closed");
//             main.classList.toggle("full");

//             localStorage.setItem(
//                 "sidebar",
//                 sidebar.classList.contains("closed") ? "closed" : "open"
//             );
//         };
//     }

//     // Небольшая задержка на случай, если CTFd дорендерит DOM
//     setTimeout(initSidebar, 50);
// });