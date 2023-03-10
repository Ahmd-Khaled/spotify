import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FormInput } from '../components';


export default function Signup() {
  return (
    <section>
      <div className={styles.signup}>
        <Link href='/' className={styles.signupLogo}>
          <Image className={styles.signupLogoImg} width={200} height={50} src='/imgs/Spotify-Black-Logo.wine.svg' alt='' />
          <h3 className={styles.signupTxt}>Sign up for free to start listening</h3>
        </Link>
        <div className={styles.signupMethods}>
          <Link className={styles.signupMethodsFB} href='/'>
            <FontAwesomeIcon className={styles.signupMethodIcon} icon={faFacebook} />
            <span>Sign up with facebook</span>
          </Link>
          <Link className={styles.signupMethodsGoogle} href='/'>
            {/* <FontAwesomeIcon className={styles.signupMethodIcon} icon={faGoogle} /> */}
            <Image width={26} height={26} src='/imgs/Google icon.png' alt='Google' />
            <span>Sign up with google</span>
          </Link>
          <div className={styles.loginOR}>
            <span className={styles.loginHr}></span>
            <span className={styles.loginOrTxt}>OR</span>
            <span className={styles.loginHr}></span>
          </div>
          <form className={styles.signupForm}>
            <FormInput isForSignup={true} title="What's your email?" type="email" id='email' placeholder='Enter your email.' />
            <FormInput isForSignup={true} title="Create a password" type="password" id='password' placeholder='Enter your password.' />
            <FormInput isForSignup={true} isThereError={true} title="Confirm your password" type="password" id='cpassword' placeholder='Enter your password again.' />
            <FormInput isForSignup={true} title="What should we call you?" type="text" id='username' placeholder='Enter a profile name.' msg="This appears on your profile." />
            <div className={styles.signupFormDBirth}>
              <label className={styles.formInputLabel}>{"What's your date of birth?"}</label>
              <div className={styles.signupFormDBirthBox}>
                <div className={styles.signupFormDBirthDay}>
                  <label className={styles.signupFormDBirthLabel}>Day</label>
                  <select className={styles.signupFormDBirthSelect}>
                    <option value='DD' defaultValue>DD</option>
                    <option value={1}>1</option>
                  </select>
                </div>
                <div className={styles.signupFormDBirthMonth}>
                  <label className={styles.signupFormDBirthLabel}>Month</label>
                  <select className={styles.signupFormDBirthSelect}>
                    <option value='Month' defaultValue>Month</option>
                    <option value='january'>January</option>
                  </select>
                </div>
                <div className={styles.signupFormDBirthYear}>
                  <label className={styles.signupFormDBirthLabel}>Year</label>
                  <input className={styles.signupFormDBirthInput} type='text' placeholder='Year' />
                </div>
              </div>
            </div>
            <div className={styles.signupFormGender}>
              <label className={styles.formInputLabel}>{"What's your gender?"}</label>
              <ul className={styles.signupFormGenderList}>
                <li className={styles.signupFormGenderItem}>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor='male'>Male</label>
                </li>
                <li className={styles.signupFormGenderItem}>
                  <input type="radio" id="female" name="gender" value="female" />
                  <label htmlFor='female'>Female</label>
                </li>
                <li className={styles.signupFormGenderItem}>
                  <input type="radio" id="other" name="gender" value="other" />
                  <label htmlFor='other'>Prefer not to say</label>
                </li>
              </ul>
            </div>
            <div className={styles.signupFormSendOffers}>
              <input type="checkbox" id="sendOgOffers" name="sendOgOffers" value={true} />
              <label htmlFor='sendOgOffers'>Please send me news and offers from Spotify</label>
            </div>
            <div className={styles.signupFormShareRegistration}>
              <input type="checkbox" id="shareRegistration" name="shareMyRegistration" value={true} />
              <label htmlFor='shareRegistration'>{"Share my registration data with Spotify's content providers for marketing purposes."}</label>
            </div>
            <div className={styles.signupFormTerms}>
              <p>{"By clicking on sign-up, you agree to Spotify's"}</p>
              <Link href='/terms'>Terms and Conditions of Use.</Link>
            </div>
            <div className={styles.signupFormPolicy}>
              <p>To learn more about how Spotify collects, uses, shares and protects your personal data,</p>
              <p>please see <Link href='/policy'>{"Spotify's Privacy Policy."}</Link></p>
            </div>
            <button className={styles.signupFormSubmitBtn} type='submit'>Sign up</button>
          </form>
          <div className={styles.signupRedirectToLogin}>
            <span>Have an account? <Link href='/login'>Log in</Link>.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
