export const Skill = ({ skill, src, title }) => {
  return (
    <>
      <li>
        <strong>{skill}</strong>
        <img className='striker' src={src} title={title} />
      </li>
    </>
  )
}