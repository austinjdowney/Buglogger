import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async addBug(data) {
    const res = await api.post('api/bugs', data)
    router.push({ name: 'BugDetails', params: { id: res.data.id } })
  }
}

export const bugsService = new BugsService()
