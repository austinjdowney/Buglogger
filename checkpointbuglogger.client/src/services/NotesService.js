import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getNotesByBugId(bugId) {
    const res = await api.get(`api/bugs/${bugId}/notes`)
    AppState.notes = res.data
  }

  async addNote(newNote) {
    const res = await api.post('api/notes', newNote)
    AppState.notes.push(res.data)
  }

  async deleteNote(note) {
    await api.delete(`api/notes/${note.id}`)
    this.getNotesByBugId(note.bugId)
  }
}

export const notesService = new NotesService()
