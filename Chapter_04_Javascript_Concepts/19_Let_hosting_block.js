//Let is block-Scoped and not function-scoped like var. It is also not hoisted like var.

let x = "global x";
if (true) {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization


    let x = "block-scoped x";
    console.log(x); // block-scoped x
}