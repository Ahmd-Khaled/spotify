import Image from 'next/image';
import styles from './page.module.css';
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormInput } from '../components';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Login() {
  return (
    <section className={roboto.className}>
      <div className={styles.login}>
        <Link href='/' className={styles.loginLogo}>
          <Image className={styles.loginLogoImg} width={250} height={100} src='/imgs/Spotify-Black-Logo.wine.svg' alt='' />
        </Link>
        <div className={styles.loginMethods}>
          <span className={styles.loginLabel}>To continue, log in to Spotify.</span>
          <Link href="/" className={`${styles.loginFacebook} ${styles.loginMethod}`}>
            <FontAwesomeIcon className={styles.loginMethodIcon} icon={faFacebook} />
            <span>Continue with facebook</span>
          </Link>
          <Link href="/" className={`${styles.loginApple} ${styles.loginMethod}`}>
            <FontAwesomeIcon className={styles.loginMethodIcon} icon={faApple} />
            <span>Continue with Apple</span>
          </Link>
          <Link href="/" className={`${styles.loginGoogle} ${styles.loginMethod}`}>
            {/* <FontAwesomeIcon className={styles.loginMethodIcon} icon={faGoogle} /> */}
            <Image width={26} height={26} src='/imgs/Google icon.png' alt='Google' />
            <span>Continue with google</span>
          </Link>
          <Link href="/" className={`${styles.loginPhone} ${styles.loginMethod}`}>
            <span>Continue with phone number</span>
          </Link>
          <div className={styles.loginOR}>
            <span className={styles.loginHr}></span>
            <span className={styles.loginOrTxt}>OR</span>
            <span className={styles.loginHr}></span>
          </div>
          <form className={styles.loginForm}>
            <FormInput isForSignup={false} title="Email address or username" type="email" id='email' placeholder="Email address or username" />
            <FormInput isForSignup={false} title="Password" type="password" id='password' placeholder="Password" />
            <Link className={styles.loginFormForgot} href='/fogot'>Forgot your password?</Link>
            <div className={styles.loginFormSubmit}>
              <div className={styles.loginFormRemember}>
                <input className={styles.loginFormCheckbox} name='rememberme' value={true} type='checkbox' />
                <span>Remember me</span>
              </div>
              <input className={styles.loginFormSubmitBtn} type='submit' value="Log in" />
            </div>
          </form>
          <div className={styles.loginCreateAccount}>
            <span className={styles.loginCreateAccountTxt}>{"Don't have an account?"}</span>
            <Link className={styles.loginCreateAccountBtn} href='/signup'>Sign up for Spotify</Link>
          </div>
        </div>

      </div>
    </section>

  )
}
