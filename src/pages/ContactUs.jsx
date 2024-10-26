const ContactUs = () => {
  return (
    <section className='contact'>
      <form
        action='https://formsubmit.co/dafaa4fb0da7c628c36f29b1a0be4eed'
        method='POST'
      >
        <h1>Contact Form</h1>
        <div className='input-box'>
          <label htmlFor='name'>Full name</label>
          <input
            name='name'
            className='field'
            type='text'
            required
            placeholder='your name'
          />
        </div>
        <div className='input-box'>
          <label htmlFor=''>Email</label>
          <input
            name='email'
            className='field'
            type='email'
            required
            placeholder='yor email'
          />
        </div>
        <div className='input-box'>
          <label htmlFor=''>Message</label>
          <textarea
            className='field message'
            name='message'
            id=''
            required
            placeholder='your message'
          ></textarea>
        </div>
        <button className='btn-submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
