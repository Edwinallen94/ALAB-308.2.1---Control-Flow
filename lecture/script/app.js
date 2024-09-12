// Growing Pains
// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens.
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
try {
  // We're going to try some code here that might run into problems.
  // If something goes wrong, we'll catch the error later.
  const plantCount = initialPlantsLarger * 2 ** 10;
  // This calculates how many plants we have after 10 weeks.
  // Starting with 100 plants, doubling them each week (2 to the power of 10).

  const requiredSpace = plantCount * spacePerPlant;
  // Here we figure out how much total space the plants need.
  // Each plant needs a certain amount of space, so we multiply that by the number of plants.

  if (requiredSpace > area) {
    // If the space needed for all the plants is more than what's available...
    throw new Error(
      `Not enough space! Required space: ${requiredSpace}, Available space: ${area}`
    );
    // ... we throw an error (basically saying, "Uh oh, we don't have enough space!").
    // The message tells us how much space we need and how much we actually have.
  } else {
    console.log(`Plants fit in the available space.`);
  } // If everything's good and the plants fit, we log this message saying they fit just fine.
} catch (error) {
  // If anything in the 'try' part goes wrong, we end up here.
  // This block catches the error and makes sure it doesn't crash the program.

  console.error(error.message);
}
// It logs the error message so we know what went wrong.
