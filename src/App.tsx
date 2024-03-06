import React from "react";
import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

// Defining the structure of a basketball team
interface BasketballTeam {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

// Component for rendering individual basketball teams
class Team extends React.Component<BasketballTeam> {
  render() {
    // Set up props for easier access
    const { school, name, city, state } = this.props;

    return (
      <div className="team-box">
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

// Function for rendering a list of basketball teams
function ListTeams() {
  return (
    <div className="team-container">
      {teamsData.teams.map((oneTeam) => (
        <Team key={oneTeam.tid} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="header">
        <h1>March Madness Basketball Season 2024</h1>
        <p>
          On this website, you will find info about every college team that will
          be competing in the NCAA this year!
        </p>
      </div>
      <div className="container">
        <ListTeams />
      </div>
      <div className="footer">
        <p>© 2024 March Madness</p>
      </div>
    </div>
  );
}

export default App;
