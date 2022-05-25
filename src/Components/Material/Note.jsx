import React, {useEffect, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';

export default function Note() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:8080/notes')
            .then(res => res.json())
            .then(data => setNotes(data));
    }, [])

  return (
    <div>
      <Grid container spacing={3}>
        {notes.map(note => (
            <Grid item key={note.id} xs={12} md={6}>
              <Paper>
              {note.title}
              </Paper>
            </Grid>
        ))}
      </Grid>
    </div>
  )
}
