import { useNavigate } from 'react-router-dom'

function Footer () {
  const navigate = useNavigate()

  return (
    <>
    <div>
      <div>Let's Talk</div>
      <div>
        Thinking we may be a good match? Let’s meet up for coffee or tea to be sure!
      </div>
      <div className='button' onClick={() => navigate('/contact')}>Schedule a coffee date</div>
    </div>
    <div>
      <div>
        <div>Service Area</div>
        <div>
          Update, SC
        </div>
      </div>
      <div>
        <div>Contact</div>
        <div>
          <a href={`tel:(864)-770-3227`}>(864)-770-3227</a>
          <a href={'mailto:sadiejuarez.doula@gmail.com'}>sadiejuarez.doula@gmail.com</a>
        </div>
      </div>
      <div>
      <div>Follow Me</div>
        <div>
          <a target='blank' href='adsgasg'>Facebook</a>
          <a target='blank' href='adsgasg'>Instagram</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer