//your JS code here. If required.
// Function to simulate a microtask
const microtask = (name) => {
  console.log(`Processing microtask: ${name}`);
};

// Function to simulate a macrotask
const macrotask = (name) => {
  console.log(`Processing macrotask: ${name}`);
};

// Simulate an alien communication system
const communicateWithAliens = () => {
  console.log("Aliens have sent tasks to Earth!");

  // Microtasks
  Promise.resolve().then(() => microtask("Microtask 1"));
  Promise.resolve().then(() => microtask("Microtask 2"));

  // Macrotasks
  setTimeout(() => macrotask("Macrotask 1"), 0);
  setTimeout(() => macrotask("Macrotask 2"), 0);

  console.log("Tasks scheduled for processing...");
};

// Simulate the event loop
const simulateEventLoop = () => {
  console.log("Event loop starts...");

  // Process microtasks
  Promise.resolve().then(() => console.log("Processing microtasks..."));

  // Process macrotasks
  console.log("Processing macrotasks...");

  console.log("Event loop ends...");
};

// Simulate the communication with aliens and the event loop
communicateWithAliens();
simulateEventLoop();
