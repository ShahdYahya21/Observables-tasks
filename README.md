I have completed several tasks to gain experience in using observables. The tasks are:

1. **Basic Observable Creation**
    - Create an `Observable` that emits the numbers `1`, `2`, `3` with a 1-second delay between each.
    - Subscribe in a component and display the numbers in the template.

2. **HTTP GET Observable**
    - Use `HttpClient` to fetch fake data from `https://jsonplaceholder.typicode.com/posts`.
    - Display the first 10 post titles in a list.

3. **Interval Observable**
    - Create an `interval()` Observable that updates the current time every second.
    - Show the formatted time in the UI.

4. **Search-as-You-Type**
    - Add an `<input>` box and listen for `keyup` events.
    - Convert it to an Observable using `fromEvent`.
    - Use `debounceTime(500)` and `distinctUntilChanged()` to avoid unnecessary API calls.
    - Call a fake API (e.g., `jsonplaceholder` search) and show results.
