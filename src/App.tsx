import { useState } from 'react';
import { Button, Grid, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material';
import * as Tone from 'tone';
import chordData from './data/sound.json'

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

type ChordButtonProps = {
  role: string;
};

const ChordButton = styled(Button)<ChordButtonProps>(({ theme, role }) => ({
  height: '100px',
  width: '100px',
  margin: '10px',
  backgroundColor: theme.palette[getButtonColor(role)].main,
  '&:hover': {
    backgroundColor: theme.palette[getButtonColor(role)].dark,
  },
}));

const synth = new Tone.PolySynth().toDestination();

const ChordSampler = () => {
  const [chords, setChords] = useState(chordData.availableChords.slice(0, 2)); // 初期状態の設定
  const [selectedChord, setSelectedChord] = useState('');

  const playChord = (chordName: string) => {
    const chordNotes = chordData.chords.find(chord => chord.name === chordName)?.chords;
    if (chordNotes) {
      console.log(`Playing ${chordName}`);
      synth.triggerAttackRelease(chordNotes, '4n');
    }
  };

  const handleChordChange = (event: SelectChangeEvent<string>) => {
    setSelectedChord(event.target.value);
  };

  const addChord = () => {
    const chordToAdd = chordData.availableChords.find(chord => chord.name === selectedChord);
    if (chordToAdd && !chords.some(chord => chord.name === chordToAdd.name)) {
      setChords([...chords, chordToAdd]);
      setSelectedChord('');
    }
  };

  const filteredAvailableChords = chordData.availableChords.filter(chord => !chords.some(c => c.name === chord.name));

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
                {chord.name.replace(/_/g, ' ')}
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
              {chord.name.replace(/_/g, ' ')}
            </ChordButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ChordSampler;
