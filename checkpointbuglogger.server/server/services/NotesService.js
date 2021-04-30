import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(query = {}) {
    const note = await dbContext.Note.find(query)
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async getNotesById(id, userId) {
    const data = await dbContext.Note.findOne({ _id: id, creatorId: userId })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }

  async createNote(body) {
    return await dbContext.Note.create(body)
  }

  async editNote(body) {
    const data = await dbContext.Note.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }

  async deleteNote(id, userId) {
    const data = await dbContext.Note.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }
}
export const notesService = new NotesService()
