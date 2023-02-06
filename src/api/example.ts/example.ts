export const fetchExamples = async () => {
  try {
    return await (await fetch(`https://jsonplaceholder.typicode.com/todos/`)).json();
  } catch (error) {
    return Promise.reject(error);
  }
};
