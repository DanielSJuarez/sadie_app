import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
      <div>
        <div>
          “Birth is not only about making babies. Birth is about making mothers—strong, competent, capable mothers who trust themselves and know their inner strength.”
        </div>
        <div>-Barbara Katz Rothman, PhD</div>
        <div>
            <div>
              Whether you are a first time mom, or sixth time mom, no birth is the same and you have options you can choose from. I will be right by your side to make sure your gut feeling is valid. 
            </div>
            <div>
              Birth is one of the greatest gifts we as humans are able to partake in in this world. I love being able to be right beside those leading up to and during birth. It is such a magical moment!
            </div>
            <div>
              There is no right or wrong way to give birth, just as long as you felt that your voice was heard.
            </div>
            img
        </div>
        <div>
          <div>Services</div>
          <div>
            <div>
              <div>
                img
              </div>
              <div>Prenatal Care</div>
              <div>
                Care and visits that happen during your pregnancy to get you prepped and confident for your birth ahead
              </div>
            </div>
            <div>
                img
            </div>
            <div>
              <div>
                img
              </div>
              <div>Labor Support</div>
              <div>
                Whether you need extra counter pressure, a hand to hold, words of affirmation or a person to be your advocate in the room — I will be by your side to bring your sweet babe earthside.
              </div>
              <div className='button' onClick={() => navigate('/services')}>Learn More</div>
            </div>
            <div>
              <div>
                img
              </div>
              <div>Postpartum Support</div>
              <div>
                Navigating those first couple weeks can be a hard adjustment on you and your family. I will be here to offer advice and to listen to your needs.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              “She was exactly the support I needed and was able to anticipate my needs!”
            </div> 
            <div>- Valerie M.</div>
          </div>
          <div>
            img
          </div>
        </div>
      </div>
    )
}

export default Home