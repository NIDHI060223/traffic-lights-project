# Project Description :
 - This is a simple React project that simulates a traffic light system. The application cycles through traffic lights (Red → Yellow → Green) in a loop, with each light staying active for a 
   specific duration. The project demonstrates theuse of React hooks like useState and useEffect for managing state and side effects.

---
## Features:
   - Displays a traffic light with three colors: Red, Yellow, and Green.
   - Lights change automatically after a specified duration.
   - Clean and responsive UI design.
   - Modular code for easy understanding and maintenance.

---
## Technology Stack:
   - Frontend: React.js
   - Styling: CSS

---
## How It Works:
1. The application initializes with the Red light active.

2. Lights change based on the predefined durations:
  -Red: 5 seconds
  -Yellow: 5 seconds
  -Green: 5 seconds

3. The logic is implemented using:
  -useState to manage the current active light.
  -useEffect to handle the light-changing intervals.
  
4. The component dynamically applies the active class to highlight the current light.
