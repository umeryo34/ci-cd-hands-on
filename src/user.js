// src/userService.js

export async function fetchUser(userId) {
  console.log("fetch user:", userId);

  const response = await fetch(`https://api.example.com/users/${userId}`);

  return response.json();
}
