import styles from "../css/board.module.css";

interface BlockProps{
    value?:string | null;
    onClick?: ()=> void;
}

const Block: React.FC<BlockProps> = (props)=>{

    return(
        <div onClick={props.onClick} className={styles.block}>
            {props.value}
        </div>
    );
}
export default Block;