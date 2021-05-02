import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}/notes`)
    AppState.notes = res.data
  }

  async addNote(newNote, id) {
    await api.post('api/notes', newNote)
    // AppState.notes.push(res.data)
    this.getNotesByBugId(id)
  }

  async deleteNote(id, bugId) {
    await api.delete(`api/notes/${id}`)
    this.getNotesByBugId(bugId)
  }
}

export const notesService = new NotesService()
