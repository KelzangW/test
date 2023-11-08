// Function to change the active tab
function changeTab(tabId) {
    const contentTabs = document.querySelectorAll('.content');
    contentTabs.forEach((tab) => {
        tab.style.display = 'none';
    });

    document.getElementById(`${tabId}-tab`).style.display = 'block';

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });

    document.querySelector(`[onclick="changeTab('${tabId}')"]`).classList.add('active');
}

// Set the initial tab (e.g., Home) as active
changeTab('home');
