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
            id='name'
            required
            placeholder='Input your name'
          />
        </div>
        <div className='input-box'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            className='field'
            type='email'
            required
            placeholder='Input your email'
          />
        </div>
        <div className='input-box'>
          <label htmlFor='interest'>What are you interested in?</label> <br />
          <select name='interest' className='field-interest' id='interest'>
            <option value='webdev'>Web Development</option>
            <option value='trainig'>Training</option>
            <option value='others'>Others</option>
          </select>
        </div>

        <div className='input-box'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='field message'
            name='message'
            id='message'
            required
            placeholder='your message'
          ></textarea>
        </div>
        <button
          className='btn-submit'
          onSubmit={() => {
            console.log("submitted");
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;