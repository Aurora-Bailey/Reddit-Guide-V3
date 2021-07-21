class Collecting {
    constructor() {
        this.loopCount = 0
    }

    start() {
        this.doNext().catch(console.error)
    }

    async doNext() {
        console.log(`Hello world! From loop ${this.loopCount}`)
        this.loopCount++

        // Set up next loop
        setTimeout(() => {
            this.doNext().catch(console.error)
        }, 1000)
    }

    test () {
        return true
    }
}

module.exports = new Collecting()