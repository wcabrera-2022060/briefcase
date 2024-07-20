import { Skill } from './Skill.jsx'
export const Skills = () => {
  return (
    <section className='s-resume target-section'>
      <div className='row s-resume__section'>
        <div className='column tab-12'>
          <h3 className='section-header-allcaps'>
            Skills
          </h3>
        </div>
        <div className='column large-10 tab-12'>
          <div className='resume-block'>
            <ul className='skill-bars-fat skill-grid'>
              <Skill
                skill='Javascript'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                title='Javascript'
              />
              <Skill
                skill='React'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfxxgtvjoywpYYFjqCM2IByvFIxA6n40Wtw&s'
                title='React'
              />
              <Skill
              skill='Node'
              src='https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg'
              title='Node'
              />
              <Skill
              skill='MongoDB'
              src='https://cdn1.epicgames.com/ue/product/Screenshot/Slide1.PNG-1920x1080-160df0b6db5b5e9131397f6dbe8289d2.jpg?resize=1&w=1920'
              title='MongoDB'
              />
              <Skill
              skill='Git'
              src='https://miro.medium.com/v2/resize:fit:1400/0*iFApAuNplslAErbr'
              title='Git'
              />
              <Skill
              skill='GitHub'
              src='https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw'
              title='GitHub'
              />
              <Skill
              skill='MySQL'
              src='https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png'
              title='MySQL'
              />
              <Skill
              skill='Java'
              src='https://www.conmasfuturo.com/wp-content/uploads/2014/03/JavaBlack.jpg'
              title='Java'
              />
              <Skill
              skill='Vercel'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s'
              title='Vercel'
              />
              <Skill
              skill='Python'
              src='data:image/jpeg;base64,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'
              title='Python'
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}