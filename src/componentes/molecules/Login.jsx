import InputT from "../atoms/Informacion"
import Button from "../atoms/button";
import "../../assets/styles/formulario.css"

function Longin(){
    return (
        <div className="formulario">
                <br/><br/><br/> <br/><br/><br/> <br/><br/><br/>
            
            <form action="">
                <h1>Iniciar sesion</h1>
                <br/><br></br>
                <InputT value={"name"} type={"text"} id={"name"} placeholder={"Nombre"}/>
                
                <InputT value={"password"} type={"password"} id={"password"} placeholder={"Contraseña"}/>
                <br/>
                <Button></Button>
            </form>
        </div>
    );
}

export default Longin;