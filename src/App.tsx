import React, { useState } from 'react';
import { Button, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { styled } from '@mui/material/styles';

const ChordButton = styled(Button)({
  height: '100px',
  width: '100px',
  margin: '10px',
});

const App = () => {
  const [chords, setChords] = useState(['C Major', 'G7']);

  const playChord = (chord: string) => {
    console.log(`Playing ${chord}`);
    // ここに実際の和音を鳴らすロジックを追加します。
  };

  const addChord = () => {
    const newChord = `New Chord ${chords.length + 1}`; // 実際にはユーザー入力から取得するか、適切なロジックを使用して生成します。
    setChords([...chords, newChord]);
  };

  const removeChord = () => {
    if (chords.length > 0) {
      setChords(chords.slice(0, chords.length - 1));
    }
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap' }}>
        {chords.map((chord, index) => (
          <Grid item key={index}>
            <ChordButton variant="contained" color="primary" onClick={() => playChord(chord)}>
              {chord}
            </ChordButton>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
        <IconButton onClick={addChord} color="primary">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={removeChord} color="secondary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
    </div>
  );
};

export default App;
