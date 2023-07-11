import React from 'react'
import Logo from "../IBL_Logo.png"
import './rules.css'
export default function Rules() {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#eee',
          textAlign: 'center',
          paddingBottom: '25px',
        }}
      >
        <img src={Logo} style={{ height: '200px' }} />
      </div>
      <div style={{background: "#1c3663"}} className="match-format">
        <h5
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            padding: '20px',
            marginBottom: '0'
          }}
        >
          TOURNAMENT FORMAT
        </h5>
      </div>
      <div style={{background: "#1c3663"}} className="format">
        <img style={{width: "70%"}} src="static/rules_img/format.png" alt="" />
      </div>
      <div style={{ backgroundColor: '#1c3663' }}>
        <div className="container">
          <div className="row match-rule">
            <h5
              style={{
                fontSize: '30px',
                fontWeight: 'bold',
                padding: '20px',
                marginBottom: '0',
                textAlign: "center",
                width: "100%"
              }}
            >
              TOURNAMENT RULES
            </h5>
          </div>

          <div className="card-div t-text" style={{ display: 'flex' }}>
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/referee.png" />
            <div
              className="div-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              Referee decision will be the final. If player/team argues with
              referee then warning will be given for first incident and for
              subsequent incidents 2 point penalty will be applied for each
              incident.
            </div>
          </div>
          <div
            className="card-div t-text div-text"
            style={{ marginTop: '10px', textAlign: 'inherit' }}
          >
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/singles.png" />
            Rackets will be provided. You are welcomed to bring your own racket.
          </div>
          <div
            className="card-div t-text  "
            style={{ marginTop: '10px', display: 'flex' }}
          >
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/shuttercock.png" />
            <div
              className="div-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '6px',
              }}
            >
              Yonex Mavis 350 shuttle will be used in all games.
            </div>
          </div>
          <div
            className="card-div t-text"
            style={{ marginTop: '10px', display: 'flex' }}
          >
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/clock.png" />
            <div
              className="div-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '6px',
              }}
            >
              Teams must arrive 15 minutes before scheduled time. If team
              reaches after scheduled time but within 10 mins window then points
              will be deducted for their match. e.g. scheduled time is 9:00 AM
              and team arrives at 9:05 AM then point will be deducted for that
              team. If team reaches after 10 minutes from scheduled time then BYE
              will be given to the other team.
            </div>
          </div>
          <div
            className="card-div t-text"
            style={{ marginTop: '10px', display: 'flex' }}
          >
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/team.png" />
            <div
              className="div-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '6px',
              }}
            >
              If required players are not available in playing team, then team
              can decide whether to play with available players or give bye to
              opponent team.
            </div>
          </div>
          <div
            className="card-div t-text"
            style={{ marginTop: '10px', display: 'flex' }}
          >
            <img style={{ height: "75px", width: "75px", margin: "0 12px" }} src="static/rules_img/water.png" />
            <div
              className="div-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '6px',
              }}
            >
              Water will be available at the ground. Refreshment can be
              purchased from the canteen at your own cost.
            </div>
          </div>
          <div
            className="row match-rule"
          >
            <h5 style={{ 
                fontSize: '30px',
                fontWeight: 'bold',
                padding: '20px',
                marginBottom: '0',
                textAlign: "center",
                width: "100%" }}>
              MATCH RULES
            </h5>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/scoreboard.png" />
                  </div>
                  <div>
                    <h3 className="card-head">SCORING SYSTEM</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px !important',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  A match consists of the best of 3 games of 21 points.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Every time there is a serve - there is a point scored.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  At 20 all, the side which gains a 2 point lead first, wins that game.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  At 29 all, the side scoring the 30th point, wins that game.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  The side winning a game serves first in the next game.
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/interval.png" />
                  </div>
                  <div>
                    <h3 className="card-head">INTERVAL AND CHANGE OF ENDS</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  When the leading score reaches 11 points, players have a 60 second interval.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  A 2 minute interval between each game is allowed.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  In the third game, players change ends when the leading score reaches 11 points..
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/singles.png" />
                  </div>
                  <div>
                    <h3 className="card-head">SINGLES</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  At the beginning of the game (0-0) and when the server’s score is even, the server serves
                  from the right service court. When the server’s score is odd, the server serves from the left
                  service court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  If the server wins a rally, the server scores a point and then serves again from the alternate
                  service court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  If the receiver wins a rally, the receiver scores a point and becomes the new server. They
                  serve from the appropriate service court – left if their score is odd, and right if it is even.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/doubles.png" />
                  </div>
                  <div>
                    <h3 className="card-head">DOUBLES</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  A side has only one ‘service’.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  The service passes consecutively to the players as shown in the diagram.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  At the beginning of the game and when the score is even, the server serves from the right
                  service court. When it is odd, the server serves from the left court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  If the serving side wins a rally, the serving side scores a point and the same server serves
                  again from the alternate service court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  If the receiving side wins a rally, the receiving side scores a point. The receiving side
                  becomes the new serving side.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  The players do not change their respective service courts until they win a point when their
                  side is serving.
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/error.png" />
                  </div>
                  <div>
                    <h3 className="card-head">ERRORS</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  If players commit an error in the service court, the error is corrected when the mistake is discovered.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  In a doubles match between A & B against C & D. A & B won the toss and decided to serve. A to
                  serve to C. A shall be the initial server while C shall be the initial receiver.
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img style={{ height: "auto", width: "100px" }} src="static/rules_img/document.png" />
                  </div>
                  <div>
                    <h3 className="card-head">GAME FORMAT</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Each team comprises of 5 players (Min 1 female and min 3 males).
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  All games will be knockout.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Best of three matches will be moved to the next round.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Sequence of matches will be same as shown in table above
                </p>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img src="static/rules_img/ball.png" />
                  </div>
                  <div>
                    <h3 className="card-head">SERVING</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Always serve diagonal, not forward.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Must serve below waist.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Front foot must not cross the short service line.
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img src="static/rules_img/ball.png" />
                  </div>
                  <div>
                    <h3 className="card-head">STRATEGIES (SINGLES)</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Make opponent move quickly by using different shots.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Make shots to the corners.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  After making a shot, always come back to the center of the court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Make quick decisions (what kind of shot you are going to make and where to hit the birdie).
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Change the pace regularly but unexpectedly.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Overhead strokes must look the same.
                </p>
              </div>
              <div className="card-div" style={{ marginTop: '20px' }}>
                <div>
                  <div style={{ float: 'left' }}>
                    <img src="static/rules_img/ballposition.png" />
                  </div>
                  <div>
                    <h3 className="card-head">STRATEGIES (DOUBLES)</h3>
                  </div>
                </div>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Short serves are better.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Target the space between opponents.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  When receiving, play aggressively toward the net.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  Should switch quickly from defense to offense and from offense to defense.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  When attacking, adopt a formation with one player in the front part of the court, and the other player towards the rear part of the court.
                </p>
                <p
                  className="p-text"
                  style={{
                    textAlign: "left",
                    fontSize: '14px',
                    lineHeight: '1.42857143',
                    color: '#1C3663',
                    backgroundColor: '#fff',
                  }}
                >
                  <img src="static/rules_img/chevron-right.svg" />
                  When defending, adopt a side-by-side formation in order to cover the full width of the doubles court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
