function example(){
    var x = 2
    let y = 4
    const z = 6

    if(x = 15)
    {
        var x = 10  // this reassign the outer 'x'
        let y = 20  // this creates a new 'y' with block scope
        const z = 30  // this creates a new 'z' with block scope

        console.log(x,y,z); // 10 20 30
    }
    console.log(x,y,z); // 10 4 6
}

example()