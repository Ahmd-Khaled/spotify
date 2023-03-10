import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from './formInput.module.css';

export default function FormInput({ isForSignup, isThereError, title, type, id, placeholder, msg}) {
  return (
    <div className={styles.formInput}>
      <div className={isThereError ? styles.formInputBoxError : styles.formInputBox}>
        <label htmlFor={id} className={styles.formInputLabel}>{title}</label>
        <input id={id} className={styles.formInputInput} type={type} placeholder={placeholder} />
      </div>
      {isForSignup && 
        <div className={styles.formInputNotes}>
          {msg && <span className={styles.formInputNote}>This appears on your profile.</span>}
          {isThereError && 
            <div className={styles.formInputError}>
              <FontAwesomeIcon className={styles.formInputErrorIcon} icon={faCircleExclamation} />
              {id === "email" && <span className={styles.formInputErrorTxt}>You need to enter your email.</span>}
              {id === "password" && <span className={styles.formInputErrorTxt}>You need to enter a password.</span>}
              {id === "cpassword" && <span className={styles.formInputErrorTxt}>You need to confirm your password.</span>}
              {id === "username" && <span className={styles.formInputErrorTxt}>Enter a name for your profile.</span>}
            </div>
          }
          {id === "email" && <Link className={styles.formInputNotesLink} href='/'>Use phone number instead.</Link>}
        </div>
      }
    </div>
  )
}
