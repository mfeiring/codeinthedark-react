import React from 'react';

const Instructions = ({ closeInstructions }) => (
  <div className="instructions-container" onClick={closeInstructions}>
    <div className="instructions">
      <pre>
        <p>--- The rules ---</p>
        <ol>
          <li>No previews - of either results or assets!</li>
          <li>Stay in this editor at all times</li>
          <li>No measurement tools</li>
          <li>Stop coding when the time's up</li>
          <li>
            After the round is over, press "Finish" and follow the prompt
            instructions to see your results
          </li>
        </ol>

        <p>Good luck and most important of all; have fun!</p>

        <p>--- Assets ---</p>
        <p>NOTE TO ORGANIZERS (REMOVE ME):</p>
        <ul>
          <li>INCLUDE PATHS TO ANY ASSETS THE PAGE MIGHT NEED HERE</li>
          <li>MAKE SURE TO PROVIDE DIMENSIONS FOR THE ASSETS AS WELL</li>
          <li>
            THE BASE PATH WHEN VIEWING RESULTS IS /assets, SO YOU DON'T NEED TO
            INCLUDE THAT IN THE PATHS BELOW
          </li>
        </ul>

        <p>./beach.jpg (1223x815)</p>
      </pre>
    </div>
  </div>
);

export default Instructions;
