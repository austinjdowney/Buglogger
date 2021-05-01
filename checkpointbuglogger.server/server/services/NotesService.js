import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(id) {
    const note = await dbContext.Note.find({ bug: id }).populate('Bug')
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async createNote(body) {
    const note = await dbContext.Note.create(body)
    return note
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
