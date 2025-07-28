import MyComponent from "./MyComponent";

const FirstComponent = () =>{

    return (
        <div>
            <h1 className='title'>Meu primeiro componente!</h1>
            <p className='text'>Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;