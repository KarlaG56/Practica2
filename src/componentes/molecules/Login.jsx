import InputT from "../atoms/Informacion";
import Button from "../atoms/button";

function Longin(){
    return (
        <div className="formulario">
            <form action="">
                <InputT value={"name"} type={"text"} id={"name"} placeholder={"Nombre"}/>
                <InputT value={"password"} type={"password"} id={"password"} placeholder={"Contraseña"}/>
                <Button></Button>
            </form>
        </div>
    );
}

export default Longin;