import styles from './index.module.css';

interface IProps {
  props: {
    name: string;
  };
}

function Button({ props }: IProps) {
  return <button className={styles.button}>{props.name}</button>;
}

export default Button;
