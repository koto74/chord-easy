import React, { useState } from 'react';
import { Button, Grid, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material';

const getButtonColor = (role: string) => {
  switch(role) {
    case 'Tonic':
      return 'primary';
    case 'Subdominant':
      return 'secondary';
    case 'Dominant':
      return 'success';
    default:
      return 'primary';
  }
};

const availableChords = [
  { name: 'C Major', role: 'Tonic' },
  { name: 'F Major', role: 'Subdominant' },
  { name: 'G Major', role: 'Dominant' },
  { name: 'A Minor', role: 'Tonic' },
  { name: 'D Minor', role: 'Subdominant' },
  { name: 'E Minor', role: 'Dominant' },
  { name: 'Bb Major', role: 'Subdominant' },
  { name: 'C7', role: 'Dominant' },
  { name: 'F# Minor', role: 'Tonic' },
  { name: 'B Minor', role: 'Subdominant' },
  { name: 'E Major', role: 'Dominant' },
  { name: 'A7', role: 'Dominant' },
  { name: 'D7', role: 'Dominant' },
  { name: 'G7', role: 'Dominant' },
  { name: 'C# Minor', role: 'Tonic' },
  { name: 'F# Major', role: 'Subdominant' },
  { name: 'B Major', role: 'Dominant' },
  { name: 'E7', role: 'Dominant' },
  { name: 'A Major', role: 'Subdominant' },
  { name: 'D Major', role: 'Tonic' },
  { name: 'G Minor', role: 'Subdominant' },
  { name: 'C Minor', role: 'Tonic' },
  { name: 'F Minor', role: 'Subdominant' },
  { name: 'Bb7', role: 'Dominant' },
  { name: 'Eb Major', role: 'Subdominant' },
  { name: 'Ab Major', role: 'Tonic' },
  { name: 'Db Major', role: 'Subdominant' },
  { name: 'Gb Major', role: 'Dominant' },
  { name: 'B7', role: 'Dominant' },
  { name: 'E Minor', role: 'Tonic' },
  { name: 'A Minor', role: 'Subdominant' },
  { name: 'D Minor', role: 'Dominant' },
];

const ChordButton = styled(Button)(({ theme, role }) => ({
  height: '100px',
  width: '100px',
  margin: '10px',
  backgroundColor: theme.palette[getButtonColor(role)].main,
  '&:hover': {
    backgroundColor: theme.palette[getButtonColor(role)].dark,
  },
}));

const ChordSampler = () => {
  const [chords, setChords] = useState([{ name: 'C Major', role: 'Tonic' }, { name: 'G Major', role: 'Dominant' }]);
  const [selectedChord, setSelectedChord] = useState('');

  const playChord = (chord: string) => {
    console.log(`Playing ${chord}`);
    // 実際の和音を鳴らすロジックをここに追加
  };

  const handleChordChange = (event: SelectChangeEvent<string>) => {
    setSelectedChord(event.target.value as string);
  };

  const addChord = () => {
    const chordToAdd = availableChords.find(chord => chord.name === selectedChord);
    if (chordToAdd && !chords.some(chord => chord.name === chordToAdd.name)) {
      setChords([...chords, chordToAdd]);
      setSelectedChord('');
    }
  };

  const filteredAvailableChords = availableChords.filter(chord => !chords.some(c => c.name === chord.name));

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
              <MenuItem key={index} value={chord.name}>
                {chord.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton onClick={addChord} color="primary" disabled={!selectedChord || chords.some(chord => chord.name === selectedChord)}>
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={() => setChords(chords.slice(0, chords.length - 1))} color="secondary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ maxWidth: '600px', margin: '0 auto', flexWrap: 'wrap' }}>
        {chords.map((chord, index) => (
          <Grid item key={index}>
            <ChordButton
              variant="contained"
              role={chord.role}
              onClick={() => playChord(chord.name)}>
              {chord.name}
            </ChordButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChordSampler;
