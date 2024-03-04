//1
interface Shape {
    name: string;
    calculateArea: () => number;
  }
  
  function createShape(name: string, calculateArea: () => number): Shape {
    return {
        name,
        calculateArea,
    };
}
function calculateCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}
function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}
const circle = createShape("Circle", () => calculateCircleArea(5));
console.log(`S ${circle.name}: ${circle.calculateArea()}`);

const rectangle = createShape("Rectangle", () => calculateRectangleArea(4, 6));
console.log(`S ${rectangle.name}: ${rectangle.calculateArea()}`);

//2
interface Settings {
    theme?: string;
    fontSize?: number;
    isDarkMode?: boolean;
  }
  
  function updateSettings(newSettings: Settings): void {
    console.log("New Settings:", newSettings);
  }
  
  const newSettings: Settings = {
    theme: "light",
    fontSize: 16,
    isDarkMode: false,
  };
  
  updateSettings(newSettings);
  
  //3
  interface User {
    name: string;
    age: number;
  }
  
  interface Account {
    username: string;
    email: string;
  }
  
  interface UserProfile extends User, Account {}
  
  function getUserProfile(user: User, account: Account): UserProfile {
    const userProfile: UserProfile = {
      ...user,
      ...account,
    };
  
    return userProfile;
  }
  
  const user: User = {
    name: "Name",
    age: 25,
  };
  
  const account: Account = {
    username: "UserName",
    email: "rendom@example.com",
  };
  
  const userProfileResult: UserProfile = getUserProfile(user, account);
  console.log("UserProfile res:", userProfileResult);
  
