// part1.js

// Function to escape HTML special characters
function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

// Content to display
var content = '<p><strong style="font-family: Times New Roman; color: red;">xy</strong> ';
content += '<span style="font-family: Arial; color: blue;">12</span> ';
content += '<span style="font-family: Impact; color: green; font-style: italic;">89</span></p>';

// Display the content using document.write()
document.write(escapeHtml(content));
