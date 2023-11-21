import styles from './index.module.css';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

export const DropdownMenuButton = ({ isOpen, toggle }: IProps) => {
  let openButton = isOpen && styles.buttonOpen;

  const onClickBtn = () => {
    toggle();
  };

  return (
    <button
      type='button'
      className={`${styles.button} ${openButton}`}
      onClick={onClickBtn}>
      <span>Click</span>
    </button>
  );
};
