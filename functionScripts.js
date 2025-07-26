function copyEmail() {
    navigator.clipboard.writeText("oliverreedy0@gmail.com").then(() => {
    alert("Email copied to clipboard!");
    });
}