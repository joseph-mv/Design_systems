const user={
    name:'joseph',
    age:"25",
    email:'jos@mail'
}

const {name,...props}=user

console.log({...props})