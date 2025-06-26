
const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("GET Data:", data);
  } catch (error) {
    console.log("GET Error:", error);
  }
};
// getData();


const postData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "new post",
        body: "post one",
        userId: 1100,
      }),
    });

    const data = await res.json();
    console.log("POST Response:", data);
  } catch (error) {
    console.log("POST Error:", error);
  }
};
postData();


const deleteData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1100", {
      method: "DELETE",
    });

    console.log(res)
    if (res.ok) {
      console.log("DELETE Success: Post deleted");
    } else {
      console.log("DELETE Failed: Something went wrong");
    }
  } catch (error) {
    console.log("DELETE Error:", error);
  }
};
deleteData();
