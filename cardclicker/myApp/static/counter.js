import Counter from cardclicker/myApp/static/classes.js

const counterIncrement = () => {
    let counter = Counter(0,1);
    function increment(multiplyer) {
        return counter.value = counter.value + (1 * multiplyer);
    }
    
    setInterval(increment(counter.multiplyer), 1000)
}