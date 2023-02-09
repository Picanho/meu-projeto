import styles from './frase.module.css';


function Frase() {
  return (
    <div className={styles.fraseContainer} >
      <p className={styles.fraseContent} >Componente com frase</p>
    </div>
  );
}

export default Frase;