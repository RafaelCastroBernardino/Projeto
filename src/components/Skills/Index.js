const Skills = ({ habilidades }) => (
  <ul>
    {habilidades.map((val) => (
      <li key={val}>{val}</li>
    ))}
  </ul>
);

export default Skills;
