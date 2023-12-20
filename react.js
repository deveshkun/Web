// Creating a component in react


function Mybutton(){
    return( <button>i am button</button>);
}

//Nesting a component in another component
//Mybutton starts with capital letter -> React components are like this

function myapp(){
    return(
        <div>
            <h1>
                welcome to my app
            </h1>
            <Mybutton />
        </div>
    );
}

//to make an css class

<img classname="Image" />