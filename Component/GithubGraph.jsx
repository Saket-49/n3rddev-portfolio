import GitHubCalendar from 'react-github-calendar';

function GithubGraph() {
  return (
    <div style={{ width: "90%", marginTop: "2vw",padding:"2vh", position:"relative", left:"5%", border:"1px solid gray", borderRadius:"8px", bottom:"10%"}}>
      
      <GitHubCalendar username="nerdd3v" />
    </div>
  );
}

export default GithubGraph;