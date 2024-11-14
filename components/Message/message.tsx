import styles from '../Message/message.module.css'

const Message=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.boxFrame} >
                <div className={styles.box1} >
                    <h1>contact </h1>
                    <h2>lorem ipsum</h2>
                    <p>tel.+370 64695537</p>
                </div>
                <div className={styles.box2} >
                    <input className={styles.formInputs} type="text" placeholder='your name '/>
                    <input className={styles.formInputs} type="email" placeholder='your email '/>
            <textarea className={styles.formInputs}  placeholder='your message'  />
            <button className={styles.btnSend}>send message</button>
            </div>
            </div>
        </div>
    );
}

export default Message