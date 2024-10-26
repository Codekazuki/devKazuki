const ContactUs = () => {
  return (
    <section className='contact'>
      <form>
        <h1>Contact Form</h1>
        <div className='input-box'>
          <label htmlFor=''>Full name</label>
          <input
            className='field'
            type='text'
            required
            placeholder='yor name'
          />
        </div>
        <div className='input-box'>
          <label htmlFor=''>Email</label>
          <input
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
            name=''
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
