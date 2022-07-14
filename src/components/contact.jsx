import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const id = "Y6JVAJY3KFe7zVkyL"

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_510v861', 'template_qt5r2of', e.target, id
      )
      .then(
        (result) => {
          alert('문의 내역이 정상적으로 등록되었습니다.');
          clearState()
        },
        (error) => {
          alert('문의 내역이 정상적으로 등록되지 않았습니다.');
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
        <strong><p>사이트 리뉴얼 중에 있습니다. 빠른 시일내에 업데이트 예정입니다.</p></strong>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact</h2>
                <p>
                  여러분의 프로젝트를 의뢰해주세요!
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='이름'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='이메일'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='내용'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  문의하기
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Office Number
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
              </p>
              <a href= {props.data ? "mailto:"  + props.data.email : 'loading'}
              style={{color: "white"}}> {props.data ? props.data.email : 'loading'}</a>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <img 
            src="https://s3-alpha-sig.figma.com/img/5a1e/9817/65f4ea63e4dd4fd75f8d61997dea0735?Expires=1658707200&Signature=OXErERTO2VvSFRI1xhDmIhTH5tAbUDuB1AvyeWjgnxHb0wd1WQUt5N1dStmdt8jLHspt~bNQ9K1db4N3aQwGEQ3JMKn4Qa8GTOQ67jufgd~qIW7sTV0kqpH7naMnNhBit3SY2YcnUP9zwRWqB2kGy0uaCK~CfPHVHJyHu96z5u8TmCvguSF7ZYOP0AVQjjW5DX0BUl37614ZHqkxVvtASjbPu6reH0lnV1l~VAmd~uTwRizA6IBvwLGvMcWvtc1-tzR4dVNvdTMyvdVYRGKmwx9eKCIc0pawyYLm4jGjs4xn9BS3sgR3ak3~28AEopV23Jp9bt7bpqLY2ewuBoQmNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt='logo'/>
          <p>
            &copy; 2020 pongponglab
          </p>
        </div>
      </div>
    </div>
  )
}
