import React, { useState } from 'react';
import { Button, Grid, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material';

const ChordButton = styled(Button)({
  height: '100px',
  width: '100px',
  margin: '10px',
});

const ChordSampler = () => {
  const [chords, setChords] = useState(['C Major', 'G7']);
  const [selectedChord, setSelectedChord] = useState('');
  const availableChords = [
    'C Major', 'G7', 'D Minor', 'A Minor', 'E Major', 
    'F Major', 'B7', 'E Minor', 'A Major', 'D7', 
    'G Major', 'C7', 'F# Minor', 'B Minor', 'F#7', 
    'B Major', 'E7', 'A7', 'D Major', 'G# Minor',
    'C# Minor', 'F Minor', 'C# Major', 'G#7', 'Eb Major'
  ];

  const playChord = (chord: string) => {
    console.log(`Playing ${chord}`);
    // 実際の和音を鳴らすロジックをここに追加
  };

  const handleChordChange = (event: SelectChangeEvent<string>) => {
    setSelectedChord(event.target.value as string);
  };

  const addChord = () => {
    if (selectedChord && !chords.includes(selectedChord)) {
      setChords([...chords, selectedChord]);
      setSelectedChord('');
    }
  };

  // 既に選択されたコードを除外したコードのリストを取得
  const filteredAvailableChords = availableChords.filter(chord => !chords.includes(chord));

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Grid container justifyContent="center" alignItems="center" style={{ margin: '20px 0' }}>
        <FormControl variant="filled" style={{ minWidth: 120 }}>
          <InputLabel id="chord-select-label">Chord</InputLabel>
          <Select
            labelId="chord-select-label"
            value={selectedChord}
            onChange={handleChordChange}
          >
            {filteredAvailableChords.map((chord, index) => (
              <MenuItem key={index} value={chord}>
                {chord}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton onClick={addChord} color="primary" disabled={!selectedChord || chords.includes(selectedChord)}>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={() => setChords(chords.slice(0, chords.length - 1))} color="secondary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap' }}>
        {chords.map((chord, index) => (
          <Grid item key={index}>
            <ChordButton variant="contained" color="primary" onClick={() => playChord(chord)}>
              {chord}
            </ChordButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChordSampler;
