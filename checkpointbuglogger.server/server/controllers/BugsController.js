import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get('', this.getAllBugs)
      .get('/:id', this.getBugById)
      .get('/:id/notes', this.getNotesByBugId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBug)
      .put('/:id', this.editBug)
      .delete('/:id', this.deleteBug)
  }

  // creatorId???
  async getAllBugs(req, res, next) {
    try {
      const data = await bugsService.getAllBugs(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  // creatorId???
  async getBugById(req, res, next) {
    try {
      const bug = await bugsService.getBugById(req.params.id)
      return res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      const note = await notesService.getNotesByBugId(req.params.id)
      return res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.createBug(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      delete req.body.closed
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const data = await bugsService.editBug(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteBug(req, res, next) {
    try {
      const data = await bugsService.deleteBug(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
