const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next("Hello");
  }, 1000);

  return () => {
    //cleanup function
    clearInterval(id); // remove interval to avoid memory leaks
  };
});

let i = 0;

const observer = observable.subscribe({
  next: (value) => {
    console.log(value);
    i++;
    if (i >= 3) {
      observer.unsubscribe();
    }
  },
  complete: () => {
    console.log("Complete");
  },
  error: (error) => {
    console.error(error);
  },
});
