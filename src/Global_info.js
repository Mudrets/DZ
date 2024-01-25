import './Global_info.css';

function Work_ex(props) {
  
  return (
    <>
      <span class='smTag'>{props.name}</span>
      <span class='grTag'>{props.date} | {props.country}</span>
      <ul>{props.projects.map((el)=><li key={el}>{el}</li>)}</ul>
    </>
  );
}

function Projects(props) {
  
  return (
    <>
      <ul>{props.projects.map((el)=><li className='url' key={el}>{el}</li>)}</ul>
    </>
  );
}

function Card(props) {
  
  return (
    <div id='card'>
      <span class='smTag'>Quality assurance {props.date}</span>
      <span id='name'>{props.name}</span>
      <span id='info'>{props.info}</span>
      <span className='bigTag'>Educations</span>
      <span class='smTag'>{props.education}</span>
      <span class='grTag'>{props.educationDate}</span>
      <span className='bigTag'>Projects</span>
      <Projects projects={['http://random.link1.com','http://random.link2.com','http://random.link3.com']}/>
      <span className='bigTag'>Work Expirience</span>
      <Work_ex name='QA Ingeneer freelance project' date='From 20.20.20 to 21.21.21' country='Ukraine' projects={['Lorem, ipsum dolor','Lorem, ipsum dolor','Lorem, ipsum dolor']}/>
      <Work_ex name='QA Ingeneer Project #1' date='From 21.21.21 to 22.22.22' country='Ukraine' projects={['Lorem, ipsum dolor','Lorem, ipsum dolor','Lorem, ipsum dolor']}/>
      <Work_ex name='Project Manager Project #1' date='From 22.22.22 to 23.23.23' country='Ukraine' projects={['Lorem, ipsum dolor','Lorem, ipsum dolor','Lorem, ipsum dolor']}/>
    </div>
  );
}

export default Card;
