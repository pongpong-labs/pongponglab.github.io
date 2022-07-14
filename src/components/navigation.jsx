export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand page-scroll' href='#page-top'>
            퐁퐁랩
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features'>
                Home
              </a>
            </li>
            <li>
              <a href='#services'>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href='#portfolio'>
              SERVICE
              </a>
            </li>
            <li>
              <a href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
