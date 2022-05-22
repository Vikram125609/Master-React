// Spread Operator
// const name = ['Vikram','Singh'];
// This is a spread operator
// const stock = [1,...name,'Krishna'];
// const longArray = ["Vikram","Ram","Ghanshyaam","KhatuShyaam","Radhey","Janki","Janaknadini","Sita","Laxmi","Janakputri"];
// const [name,...remaining] = longArray;
// console.log(name);
// console.log(remaining); 

// The last and sabse jyada imp
//  Now using spread operator over objects

const almighty = {
    Godname:"Krishna",
    Goddob :"1-1-5501"
};
const bioData = {
    ...almighty,
    name : "Vikram",
    dob  : "30-12-2001"
};
console.log(bioData);
const Tut38 = () => {
    return(
        <>Ram </>
    );
};
export default Tut38;