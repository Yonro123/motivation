export default async function fetchMotivationData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Data fetched unsuccessfully");
  }
}
