import React, { useEffect, useState } from "react";
import "./styles.css";
import { StatusBarItem, StatusBar, NavBar, Prompt, Modal, Dialog } from "..";
import { useWordle } from "../../hooks/useWordle";

function Sidebar() {
  const [openNewPlayerDialog, setOpenNewPlayerDialog] = useState(false);
  const [openStatsDialog, setOpenStatsDialog] = useState(false);

  const [promptText, setPromptText] = useState("");
  const { playerName, setPlayerName, reset, wins, lost, won, gameOver, plays } =
    useWordle();

  useEffect(() => {
    if (won || gameOver) {
      setOpenStatsDialog(true);
    } else {
      setOpenStatsDialog(false);
    }
  }, [won, gameOver]);

  useEffect(() => {
    if (playerName == null) {
      setOpenNewPlayerDialog(true);
    } else {
      setOpenNewPlayerDialog(false);
    }
  }, [playerName]);

  const handleNewPlayerName = () => {
    setPlayerName(promptText);
  };

  const handleNewGame = () => {
    reset();
  };

  const validatePlayerName = (name) => {
    const regex = new RegExp(/^[a-z ,.'-]+$/i);

    return regex.test(name);
  };

  return (
    <>
      {playerName && (
        <div className="sidebar">
          <NavBar>
            <div className="user">
              <h4 className="user__username">{playerName}</h4>
              <p className="user__title">scores</p>
            </div>
            <StatusBar>
              <StatusBarItem
                iconClassName={"uil uil-medal"}
                title="Wins"
                scale={wins}
                badgeColor="success"
              />
              <StatusBarItem
                iconClassName={"uil uil-heart-break"}
                title="Lost"
                scale={lost}
                badgeColor="danger"
              />
            </StatusBar>
          </NavBar>
        </div>
      )}

      <Modal isOpen={openNewPlayerDialog}>
        <Prompt
          title="Write your name"
          onSubmit={handleNewPlayerName}
          textSubmit="play"
          showCloseButton={false}
          disableSubmitButton={!validatePlayerName(promptText)}
          placeholder="David, Frank, Bill, etc..."
          onInputChange={(e) => {
            setPromptText(e.target.value);
          }}
          value={promptText}
        />
      </Modal>

      <Modal isOpen={openStatsDialog}>
        <Dialog
          title={won ? "You're won" : "You're lost"}
          textSubmit="Try Again"
          showCloseButton={false}
          onSubmit={handleNewGame}
        >
          <p style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
            {won ? "You're won" : "You're lost"} after
            <span
              className={`badge btn-${won ? "dark" : "danger"}`}
              style={{ fontSize: "10px" }}
            >
              {plays.length}
            </span>{" "}
            attemp(s).
          </p>
        </Dialog>
      </Modal>
    </>
  );
}

export default Sidebar;
