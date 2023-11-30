import RegistrationForm from '@/app/ui/RegistrationForm';
import styles from './index.module.css';

function Registration() {
  return (
    <main>
      <div className={styles.container}>
        <RegistrationForm />
      </div>
    </main>
  );
}

export default Registration;
