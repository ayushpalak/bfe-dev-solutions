const foo = {
    a: 2,
    fun: () => {
        console.log(this.a * 8)
    }
}

function manipulator(fn) {
    fn();
}

manipulator(foo.fun);