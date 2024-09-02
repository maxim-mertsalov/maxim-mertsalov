"use client"

import { useState } from 'react';
import './contact.scss';

export default function ContactClient() {
  const nowDate = new Date()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
    date: nowDate
  });
  const [success, setSuccess] = useState(false);
  // console.log(formData)

  const submitForm = async(e: any) => {
    e.preventDefault();
    const res = fetch("/api/telegram", {
      method: "POST", 
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({...formData, date: formData.date.toString()}),
    })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setSuccess(true)
      })
      .catch((error) => {
          console.log(error);
      });
  }
  const [cont1Hide, setCont1Hide] = useState(false);
  const [cont2Hide, setCont2Hide] = useState(true);

  return (
    <>
      <div className='cont-wr'>
        <div className='col1'>
          <div className='cont-cat'>
            <div className={`cont-tt ${cont1Hide && "hide"}`} onClick={() => setCont1Hide(!cont1Hide)}>contacts</div>
            <div className={`cont-cats h-80 ${cont1Hide && "hide"}`}>
              <div>
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0ZM8.15963 7.04275L2.95888 2.62633L1.90851 3.86244L8.17017 9.17918L14.3191 3.85838L13.2582 2.6312L8.16044 7.04275H8.15963Z" fill="#607B96"/>
                </svg>
                <a href='mailto:maxmertsalov.gl@gmail.com'>maxm....@gmail.com</a>
              </div>
              <div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.221 12.496V15.6825C16.2211 15.9107 16.1347 16.1304 15.9791 16.2973C15.8236 16.4642 15.6105 16.5659 15.3829 16.5819C14.9891 16.6089 14.6674 16.6234 14.4187 16.6234C6.45507 16.6234 0 10.1683 0 2.20468C0 1.95596 0.0135175 1.63424 0.0414537 1.24043C0.0574246 1.01283 0.159129 0.799769 0.326046 0.644225C0.492962 0.488682 0.712664 0.402241 0.940819 0.402344H4.12735C4.23913 0.402231 4.34696 0.44367 4.4299 0.518613C4.51283 0.593555 4.56495 0.69665 4.57613 0.80787C4.59686 1.01514 4.61578 1.18005 4.63381 1.30531C4.8129 2.55517 5.17992 3.77076 5.72242 4.91089C5.80803 5.09112 5.75215 5.3065 5.58994 5.42185L3.64522 6.81145C4.83427 9.58205 7.04222 11.79 9.81282 12.979L11.2006 11.0379C11.2573 10.9586 11.3401 10.9017 11.4345 10.8772C11.5288 10.8527 11.6288 10.862 11.717 10.9037C12.857 11.4451 14.0723 11.8112 15.3217 11.9896C15.4469 12.0076 15.6118 12.0274 15.8173 12.0472C15.9284 12.0586 16.0312 12.1108 16.106 12.1937C16.1807 12.2767 16.2221 12.3844 16.2219 12.496H16.221Z" fill="#607B96"/>
                </svg>
                <a href='tel:380936161745'>+38 (093) 616 1745</a>
              </div>
            </div>
            <div className={`cont-tt line-t ${cont2Hide && "hide"}`} onClick={() => setCont2Hide(!cont2Hide)}>find-me-also-in</div>
            <div className={`cont-cats h-more ${cont2Hide && "hide"}`}>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                </svg>
                <a href='https://www.instagram.com/max.mertsalov/'>Instagram</a>
              </div>
              <div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.22222 2.66667V4.44444H1.77778V14.2222H11.5556V9.77778H13.3333V15.1111C13.3333 15.3469 13.2397 15.573 13.073 15.7397C12.9063 15.9064 12.6802 16 12.4444 16H0.888889C0.653141 16 0.427048 15.9064 0.260349 15.7397C0.0936505 15.573 0 15.3469 0 15.1111V3.55556C0 3.31981 0.0936505 3.09372 0.260349 2.92702C0.427048 2.76032 0.653141 2.66667 0.888889 2.66667H6.22222ZM16 0V7.11111H14.2222V3.03378L7.29511 9.96178L6.03822 8.70489L12.9644 1.77778H8.88889V0H16Z" fill="#607B96"/>
                </svg>
                <a href='https://t.me/maxmertsalov'>Telegram</a>
              </div>
            </div>
          </div>
        </div>
        <div className='form'>
          <div className='code-tabs'></div>
          
          <form onSubmit={submitForm}>
            <div className='success' style={{display: success ? "flex" : "none"}}>
              <h2>Thank you!</h2>
              <p>Your message has been accepted. You will recieve answer really soon!</p>
              <button aria-label="Send new message" className='btnp' onClick={() => {setSuccess(false); setFormData({...formData, name: "", email:"",body: ""})}}>send-new-message</button>
            </div>
            <div className='inp-gr'>
              <label htmlFor='name'>_name:</label>
              <input aria-label="Name field" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type='text' id='name' name='name'/>
            </div>
            <div className='inp-gr'>
              <label htmlFor='email'>_email:</label>
              <input aria-label="Email field" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type='text' id='email' name='email'/>
            </div>
            <div className='inp-gr'>
              <label htmlFor='message'>_message:</label>
              <textarea aria-label="Message field" required value={formData.body} onChange={e => setFormData({...formData, body: e.target.value})} id='message' name='message'/>
            </div>
            <div style={{paddingInline: "10px"}}>
              <button aria-label="Send message" id='sendBtn' className='btnp' type='submit'>submit-message</button>
            </div>
          </form>
        </div>
        <div className='preview'>
          <div className='code-tabs'></div>
          <div className='prev-wr'>
            <div className='code'>
              <ol>
                <li><span className='rd'>const</span> button = <span className='bl'>document.querySelector</span>{"('"}<span className='yw'>#sendBtn</span>{"')"};</li>
                <li></li>
                <li><span className='rd'>let</span> message = {"{"}</li>
                <li style={{paddingLeft: "12px"}}><span className='bl'>name</span>: &quot;<span className='yw'>{formData.name}</span>&quot;,</li>
                <li style={{paddingLeft: "12px"}}><span className='bl'>email</span>: &quot;<span className='yw'>{formData.email}</span>&quot;,</li>
                <li style={{paddingLeft: "12px"}}><span className='bl'>message</span>: &quot;<span className='yw'>{formData.body}</span>&quot;,</li>
                <li style={{paddingLeft: "12px"}}><span className='bl'>date</span>: &quot;<span className='yw'>{formData.date.toDateString()}</span>&quot;</li>
                <li>{"}"}</li>
                <li><span className='bl'>button.addEventListener</span>{"('"}<span className='yw'>click</span>{"'"}, () {"=> {"}</li>
                <li style={{paddingLeft: "12px"}}><span className='bl'>form.send(<span className='yw'>message</span>)</span>;</li>
                <li>{"})"}</li>
                <li></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
