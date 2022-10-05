import '../../assets/styles/atoms.css'
function Informacion(props){
    return (
        <>
        <input type={props.type} id={props.id}  placeholder={props.placeholder} required/>
        </>
    );
}
export default Informacion;