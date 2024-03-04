"use strict";
function createShape(name, calculateArea) {
    return {
        name,
        calculateArea,
    };
}
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
function calculateRectangleArea(width, height) {
    return width * height;
}
const circle = createShape("Circle", () => calculateCircleArea(5));
console.log(`S ${circle.name}: ${circle.calculateArea()}`);
const rectangle = createShape("Rectangle", () => calculateRectangleArea(4, 6));
console.log(`S ${rectangle.name}: ${rectangle.calculateArea()}`);
function updateSettings(newSettings) {
    console.log("New Settings:", newSettings);
}
const newSettings = {
    theme: "light",
    fontSize: 16,
    isDarkMode: false,
};
updateSettings(newSettings);
function getUserProfile(user, account) {
    const userProfile = Object.assign(Object.assign({}, user), account);
    return userProfile;
}
const user = {
    name: "Name",
    age: 25,
};
const account = {
    username: "UserName",
    email: "rendom@example.com",
};
const userProfileResult = getUserProfile(user, account);
console.log("UserProfile res:", userProfileResult);
